import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../../public/images/Logo.svg";

const NavBar = () => {
  const router = useRouter();
  const links = {
    home: "/",
    about: "/about-us",
    team: "/meet-the-team",
    clients: "/our-talents",
    contact: "/contact",
  };
  return (
    <div>
      <nav>
        <div>
          <Image
            src={Logo}
            // layout="responsive"
            height={45}
            width={73}
            alt="logo"
          />
        </div>
        <ul className="absolute list-none right-0 mr-[75px] pt-[38px]">
          <li
            className={`inline-block p-5 text-[20px] ${
              router.pathname !== links.home
                ? "text-white"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] ${
              router.pathname !== links.home
                ? "text-white"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/about-us">About us</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] ${
              router.pathname !== links.home
                ? "text-white"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/meet-the-team">Meet the team</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] ${
              router.pathname !== links.home
                ? "text-white"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/our-talents">Our talents</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] ${
              router.pathname !== links.home
                ? "text-white"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
