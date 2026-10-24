"use client";
import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import LinkButton from "../buttons/LinkButton";
import { Container } from "../sectionComponants";
import MobileNav from "./MobileNav";
import { isActiveLink, isPageLink, NavLink } from "./navlink";

const WebsiteNav = () => {
  const pathname = usePathname();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const openNav = () => {
    setIsOpenNav((isOpen) => !isOpen);
  };

  const pageLinks = NavLink.links
    .slice(0, NavLink.links.length - 1)
    .filter((link) => link.subLinks || isPageLink(link.href));
  const bookNow = NavLink.links[NavLink.links.length - 1];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-line bg-white/95 backdrop-blur-md">
        <nav className="max_screen_width">
          <Container className="flex items-center justify-between py-3">
            <Link
              href="/"
              className="relative block lg:w-44 w-36 aspect-[3.95/1]"
            >
              <Image
                fill
                priority
                sizes="(min-width: 1024px) 176px, 144px"
                className="object-contain"
                src={NavLink.logo}
                alt="Reluxe Mobility"
              />
            </Link>
            <ul className="flex max-lg:hidden items-center justify-center gap-8">
              {pageLinks.map((link, index) => {
                const isActive =
                  isActiveLink(pathname, link.href) ||
                  !!link.subLinks?.some((subLink) =>
                    isActiveLink(pathname, subLink.href),
                  );
                const triggerClassName = `relative flex items-center gap-1 py-2 text-sm transition-colors hover:text-dark ${
                  isActive
                    ? "font-semibold text-dark after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-dark"
                    : "font-medium text-secondary"
                }`;
                const triggerContent = (
                  <>
                    {link.label}
                    {link.subLinks && (
                      <BiChevronDown
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                    )}
                  </>
                );

                return (
                  <li key={index} className="group relative">
                    {!isPageLink(link.href) ? (
                      <button
                        type="button"
                        className={triggerClassName}
                        aria-haspopup="menu"
                      >
                        {triggerContent}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={triggerClassName}
                        aria-haspopup={link.subLinks ? "menu" : undefined}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {triggerContent}
                      </Link>
                    )}

                    {link.subLinks && (
                      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <ul
                          className="w-60 rounded-xl border border-line bg-white p-2 shadow-xl"
                          role="menu"
                          aria-label={`${link.label} submenu`}
                        >
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.label} role="none">
                              <Link
                                href={subLink.href}
                                onClick={(event) => event.currentTarget.blur()}
                                className="block rounded-lg px-3 py-2.5 text-sm text-secondary transition-colors hover:bg-quaternary hover:text-dark focus:bg-quaternary focus:text-dark focus:outline-none"
                                role="menuitem"
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-4 lg:gap-6">
              <a
                href={contact.callCta}
                aria-label={`Call ${contact.phone[0]}`}
                className="flex items-center gap-2 text-sm font-semibold text-dark transition-colors hover:text-secondary max-md:hidden"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-tertiary">
                  <LuPhone aria-hidden="true" className="size-4" />
                </span>
                <span className="lg:max-xl:hidden">{contact.phone[0]}</span>
              </a>
              <LinkButton
                href={bookNow.href}
                label={bookNow.label}
                className="text-sm text-white bg-dark border-dark rounded-xl tracking-normal! px-5 py-2.5 max-lg:hidden"
              />
              <button
                type="button"
                onClick={openNav}
                aria-label={
                  isOpenNav ? "Close mobile navigation" : "Open mobile navigation"
                }
                aria-expanded={isOpenNav}
                aria-controls="mobile-navigation"
                className="lg:hidden rounded-lg p-1 text-dark hover:bg-tertiary"
              >
                <BiMenu className="h-7 w-7" />
              </button>
            </div>
          </Container>
        </nav>
      </header>
      <MobileNav isOpen={isOpenNav} onClose={() => setIsOpenNav(false)} />
    </>
  );
};

export default WebsiteNav;
