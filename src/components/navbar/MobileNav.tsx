"use client";

import Link from "next/link";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { NavLink } from "./navlink";
import LinkButton from "../buttons/LinkButton";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeNavigation = () => {
    setOpenSubmenu(null);
    onClose();
  };

  return (
    <div
      id="mobile-navigation"
      className={`fixed inset-y-0 right-0 z-50 h-dvh w-full max-w-sm bg-[#FAF6EC] px-4 shadow-2xl transition-all duration-300 lg:hidden ${
        isOpen
          ? "visible translate-x-0 opacity-100"
          : "pointer-events-none invisible translate-x-full opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={closeNavigation}
        aria-label="Close mobile navigation"
        className="absolute right-4 top-4 text-primary transition-colors duration-200 hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <MdClose size={34} />
      </button>
      <ul className="mt-4 flex w-full flex-col gap-2 py-15 pr-10">
        {NavLink.links.slice(0, NavLink.links.length - 1).map((link) => (
          <li key={link.label}>
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
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-primary transition-colors duration-200 hover:bg-white hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                  <BiChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openSubmenu === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  id={`${link.label.toLowerCase()}-submenu`}
                  className={`overflow-hidden transition-all duration-200 ${
                    openSubmenu === link.label
                      ? "max-h-96 pb-2 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.label}>
                      <Link
                        href={subLink.href}
                        onClick={closeNavigation}
                        className="block rounded-md px-6 py-2 text-sm text-primary transition-colors hover:bg-white hover:text-secondary focus:bg-white focus:outline-none"
                      >
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={link.href}
                onClick={closeNavigation}
                className="block rounded-md px-3 py-2 font-medium text-primary transition-colors duration-200 hover:bg-white hover:text-secondary focus:bg-white focus:outline-none"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <LinkButton
        href={NavLink.links[NavLink.links.length - 1].href}
        label={NavLink.links[NavLink.links.length - 1].label}
        onClick={closeNavigation}
        className="bg-primary text-white hover:bg-secondary rounded-2xl"
      />
    </div>
  );
};

export default MobileNav;
