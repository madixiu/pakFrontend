// Convert ISO datetime string like "2025-01-18T10:20:24+03:30" to Jalali (Hejri-Shamsi) date
export function isoToJalali(isoString, { locale = "fa" } = {}) {
  if (!isoString) return null;
  // take the date portion from the ISO (keeps the original timezone's date)
  const datePart = isoString.split("T")[0];
  const [gY, gM, gD] = datePart.split("-").map(Number);

  const [jy, jm, jd] = gregorianToJalali(gY, gM, gD);

  const persianMonths = [
    "فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور",
    "مهر","آبان","آذر","دی","بهمن","اسفند"
  ];

  const num = (n) => (locale === "fa" ? toPersianDigits(String(n)) : String(n));

  // Example: "۱۸ دی ۱۴۰۳" (default locale = "fa")
  return locale === "fa"
    ? `${num(jd)} ${persianMonths[jm - 1]} ${num(jy)}`
    : `${jy}-${String(jm).padStart(2,"0")}-${String(jd).padStart(2,"0")}`;
}

function gregorianToJalali(gy, gm, gd) {
  const gDaysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  const jDaysInMonth = [31,31,31,31,31,31,30,30,30,30,30,29];

  const div = (a, b) => Math.floor(a / b);

  let gy2 = gy - 1600;
  let gm2 = gm - 1;
  let gd2 = gd - 1;

  let gDayNo = 365 * gy2 + div(gy2 + 3, 4) - div(gy2 + 99, 100) + div(gy2 + 399, 400);
  for (let i = 0; i < gm2; ++i) gDayNo += gDaysInMonth[i];
  // leap year for feb
  if (gm2 > 1 && isGregorianLeap(gy)) gDayNo += 1;
  gDayNo += gd2;

  let jDayNo = gDayNo - 79;

  const jNp = div(jDayNo, 12053); // 33 years cycles
  jDayNo = jDayNo % 12053;

  let jy = 979 + 33 * jNp + 4 * div(jDayNo, 1461);
  jDayNo %= 1461;

  if (jDayNo >= 366) {
    jy += div(jDayNo - 366, 365);
    jDayNo = (jDayNo - 366) % 365;
  }

  let jm = 0;
  let jd = 0;
  for (let i = 0; i < 12; i++) {
    const dim = jDaysInMonth[i];
    if (jDayNo < dim) {
      jm = i + 1;
      jd = jDayNo + 1;
      break;
    }
    jDayNo -= dim;
  }

  return [jy, jm, jd];
}

function isGregorianLeap(y) {
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

function toPersianDigits(str) {
  const map = { '0':'۰','1':'۱','2':'۲','3':'۳','4':'۴','5':'۵','6':'۶','7':'۷','8':'۸','9':'۹' };
  return str.replace(/\d/g, d => map[d]);
}

/* Usage examples:
console.log(isoToJalali("2025-01-18T10:20:24+03:30")); // default Persian: "۲۸ دی ۱۴۰۳" (example)
console.log(isoToJalali("2025-01-18T10:20:24+03:30", { locale: "en" })); // "1403-10-28"
*/