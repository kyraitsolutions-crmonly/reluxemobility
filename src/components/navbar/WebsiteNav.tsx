"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import LinkButton from "../buttons/LinkButton";
import { Container } from "../sectionComponants";
import MobileNav from "./MobileNav";
import { NavLink } from "./navlink";

const WebsiteNav = () => {
  // const { setIsOpenNav, isOpenNav } = useWebContext();

  const [isOpenNav, setIsOpenNav] = useState(false);
  const openNav = () => {
    setIsOpenNav((isOpen) => !isOpen);
  };
  return (
    <header className=" max_screen_width">
      {/* logo and page links */}
      <nav className="">
        <Container className="flex items-center justify-between py-4">
          {/* logo */}
          <Link
            href="/"
            className="relative block lg:w-[250px] w-[200px] aspect-[4/.6]"
          >
            <Image
              fill
              className="object-cover"
              src={NavLink.logo}
              alt="logo"
            />
          </Link>
          {/* page links */}
          <ul className="flex max-lg:hidden items-center justify-center gap-10">
            {NavLink.links
              .slice(0, NavLink.links.length - 1)
              .map((link, index) => (
                <li key={index} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 py-2 text-primary transition-colors hover:text-secondary"
                    aria-haspopup={link.subLinks ? "menu" : undefined}
                  >
                    {link.label}
                    {link.subLinks && (
                      <BiChevronDown
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                    )}
                  </Link>

                  {link.subLinks && (
                    <ul
                      className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 rounded-lg bg-[#FAF6EC] p-2 pt-3 opacity-0 shadow-lg ring-1 ring-primary/10 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                      role="menu"
                      aria-label={`${link.label} submenu`}
                    >
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.label} role="none">
                          <Link
                            href={subLink.href}
                            className="block rounded-md px-3 py-2 text-sm text-primary transition-colors hover:bg-white hover:text-secondary focus:bg-white focus:text-secondary focus:outline-none"
                            role="menuitem"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
          {/* button book-now */}
          <LinkButton
            href={NavLink.links[NavLink.links.length - 1].href}
            label={NavLink.links[NavLink.links.length - 1].label}
            className="uppercase text-sm text-white bg-primary rounded-2xl hover:bg-secondary lg:px-6 lg:py-3 max-lg:hidden"
          />
          {/* nav menu */}
          <button
            type="button"
            onClick={openNav}
            aria-label="Open mobile navigation"
            aria-expanded={isOpenNav}
            aria-controls="mobile-navigation"
            className="lg:hidden"
          >
            <BiMenu className="relative h-8 w-8 text-primary" />
          </button>
        </Container>
      </nav>
      <MobileNav isOpen={isOpenNav} onClose={() => setIsOpenNav(false)} />
    </header>
  );
};

export default WebsiteNav;
