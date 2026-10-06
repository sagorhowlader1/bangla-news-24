import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";
import Link from "next/link";

const HeaderPage = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="max-w-3xl mx-auto px-4 py-4">
      <Link href="/">
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
              Bangla News 24
            </span>
            <span className="text-xs text-neutral-500">{date}</span>
          </div>
        </div>
      </Link>

      <UserInfo />

      <NavLinks />
    </header>
  );
};

export default HeaderPage;
