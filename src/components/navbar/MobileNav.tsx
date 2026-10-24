"use client";

import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import LinkButton from "../buttons/LinkButton";
import { isActiveLink, isPageLink, NavLink } from "./navlink";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeNavigation = () => {
    setOpenSubmenu(null);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const pageLinks = NavLink.links
    .slice(0, NavLink.links.length - 1)
    .filter((link) => link.subLinks || isPageLink(link.href));
  const bookNow = NavLink.links[NavLink.links.length - 1];

  return (
    <div className="lg:hidden">
      <div
        aria-hidden="true"
        onClick={closeNavigation}
        className={`fixed inset-0 z-40 h-dvh bg-dark/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <Link
            href="/"
            onClick={closeNavigation}
            className="relative block w-36 aspect-[3.95/1]"
          >
            <Image fill sizes="144px" className="object-contain" src={NavLink.logo} alt="Reluxe Mobility" />
          </Link>
          <button
            type="button"
            onClick={closeNavigation}
            aria-label="Close mobile navigation"
            className="rounded-lg p-1 text-dark transition-colors hover:bg-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-dark"
          >
            <MdClose size={26} />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-4 py-4">
          {pageLinks.map((link) => {
            const isActive =
              isActiveLink(pathname, link.href) ||
              !!link.subLinks?.some((subLink) => isActiveLink(pathname, subLink.href));
            const itemClassName = `flex w-full items-center justify-between rounded-lg px-3 py-3 text-base transition-colors hover:bg-quaternary ${
              isActive ? "font-semibold text-dark" : "font-medium text-secondary"
            }`;

            return (
              <li key={link.label} className="border-b border-tertiary last:border-b-0">
                {link.subLinks ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubmenu((current) =>
                          current === link.label ? null : link.label
                        )
                      }
                      aria-expanded={openSubmenu === link.label}
                      aria-controls={`${link.label.toLowerCase()}-submenu`}
                      className={itemClassName}
                    >
                      {link.label}
                      <BiChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 transition-transform duration-200 ${
                          openSubmenu === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      id={`${link.label.toLowerCase()}-submenu`}
                      className={`grid transition-all duration-200 ${
                        openSubmenu === link.label
                          ? "grid-rows-[1fr] pb-2 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden">
                        {[
                          ...(isPageLink(link.href) ? [{ label: `All ${link.label}`, href: link.href }] : []),
                          ...link.subLinks,
                        ].map(
                          (subLink) => (
                            <li key={subLink.label}>
                              <Link
                                href={subLink.href}
                                onClick={closeNavigation}
                                className="block rounded-lg px-6 py-2.5 text-sm text-secondary transition-colors hover:bg-quaternary hover:text-dark focus:bg-quaternary focus:outline-none"
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeNavigation}
                    aria-current={isActive ? "page" : undefined}
                    className={itemClassName}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-3 border-t border-line p-4">
          <div className="flex flex-col gap-2 px-1 text-sm text-secondary">
            <a href={contact.emailCta} className="flex items-center gap-2 hover:text-dark">
              <LuMail aria-hidden="true" className="size-4 shrink-0" />
              {contact.email}
            </a>
            <a
              href={contact.addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-dark"
            >
              <LuMapPin aria-hidden="true" className="size-4 shrink-0" />
              {contact.address}
            </a>
          </div>
          <a
            href={contact.callCta}
            onClick={closeNavigation}
            className="flex items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-semibold text-dark transition-colors hover:bg-quaternary"
          >
            <LuPhone aria-hidden="true" className="size-4" />
            Call {contact.phone[0]}
          </a>
          <LinkButton
            href={bookNow.href}
            label={bookNow.label}
            onClick={closeNavigation}
            className="w-full justify-center bg-dark border-dark text-white rounded-xl py-3 tracking-normal!"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
