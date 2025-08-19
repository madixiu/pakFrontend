export default function BreadCrumb({ path }) {
  return ( 
    <div className="bg-[#e7edf6] py-5 px-80">
      {path.map((item, index) => (
        <span key={index}>
          {item}
          {index < path.length - 1 && ' > '}
        </span>
      ))}
    </div>
   );
}

