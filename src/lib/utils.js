import { toJalaali } from "jalaali-js";



function toPersianDigits(str) {
  const map = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  return str.replace(/\d/g, (d) => map[d]);
}

/* Usage examples:
console.log(isoToJalali("2025-01-18T10:20:24+03:30")); // default Persian: "۲۸ دی ۱۴۰۳" (example)
console.log(isoToJalali("2025-01-18T10:20:24+03:30", { locale: "en" })); // "1403-10-28"
*/

//?***************************************************************8
const persianMonths = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور",
                       "مهر","آبان","آذر","دی","بهمن","اسفند"];

export function isoToJalali(iso, { locale = "fa" } = {}) {
  if (!iso) return null;

  const d = new Date(iso);
  const { jy, jm, jd } = toJalaali(d.getFullYear(), d.getMonth() + 1, d.getDate());

  if (locale === "fa") {
    return `${toPersianDigits(String(jd))} ${persianMonths[jm - 1]} ${toPersianDigits(String(jy))}`;
  }

  return `${jy}-${String(jm).padStart(2,"0")}-${String(jd).padStart(2,"0")}`;
}