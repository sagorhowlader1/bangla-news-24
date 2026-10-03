import Image from "next/image";
import NavLinks from "./NavLinks";


const HeaderPage = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
 
  return (
    <header className="max-w-3xl mx-auto px-4 py-4">
      <div className="flex gap-4 justify-center items-center ">
        <Image
          src={"/logo.webp"}
          width={40}
          height={40}
          className="w-10 h-10"
          alt="Logo"
        />
        <div className="flex flex-col justify-center items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24</span>
          <span className="text-xs text-neutral-500">{date}</span>
          
        </div>
      </div>

      <div className="absolute top-4 right-84 flex items-center gap-3 text-sm">
        <button className="btn btn-ghost text-neutral-700 transition-colors
        hover:text-red-700 ">সাইন ইন</button>

        <button className="btn bg-red-700 px-3 py-1.5
        font-semibold text-white transition-colors">সাইন আপ</button>
      </div>

      <NavLinks />
      
    </header>

  );
};

export default HeaderPage;
