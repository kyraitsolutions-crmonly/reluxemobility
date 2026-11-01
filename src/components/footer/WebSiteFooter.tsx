import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Container } from "../sectionComponants";
import { WebsiteFooterLinks } from "./footerLink";

const socialLinks = [
  { label: "Instagram", href: contact.socialMedia.instagram, icon: <FaInstagram /> },
  { label: "Facebook", href: contact.socialMedia.facebook, icon: <FaFacebookF /> },
];

const WebSiteFooter = () => {
  return (
    <footer className="bg-dark text-white max_screen_width max-lg:py-10 lg:pt-18 lg:pb-10">
      <Container>
        <div className="grid lg:grid-cols-[1.3fr_auto_auto_auto_1.2fr] grid-cols-2 gap-x-6 gap-y-10 md:gap-x-8 lg:gap-x-14">
          <div className="max-w-sm max-md:col-span-2">
            <Link
              href="/"
              className="block relative w-60 max-md:mx-auto aspect-[3.95/1]"
            >
              <Image
                src={WebsiteFooterLinks.logo}
                alt="logo"
                fill
                sizes="240px"
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-ivory/80 mt-5">{WebsiteFooterLinks.description}</p>
            <div className="flex flex-wrap gap-3 mt-5 max-md:justify-center">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 items-center gap-2 rounded-full border border-white/20 pl-3 pr-4 text-sm text-ivory/90 transition hover:bg-white/10 hover:text-white"
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {WebsiteFooterLinks.listLinks.map((link, index, all) => (
            // Columns may shrink on phones; the Contact column (last) takes the full width there.
            <div key={index} className={`flex min-w-0 flex-col gap-5 ${index === all.length - 1 ? "max-md:col-span-2" : ""}`}>
              <h2 className="text-lg font-bold">{link.title}</h2>
              <ul className="flex flex-col gap-3.5">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm flex items-start text-ivory/80 transition hover:text-white [overflow-wrap:anywhere]"
                      {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.icon && <span className="mr-3 mt-0.5 shrink-0">{item.icon}</span>}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-white/10 mt-12 mb-7" />
        <div className="flex max-lg:flex-col justify-center max-lg:text-center gap-4 lg:justify-between items-center text-sm">
          <p>&copy; 2026 Reluxe Mobility. All rights reserved.</p>
          <p>
            Powered By{" "}
            <Link href="https://www.kyraitsolutions.com/" target="_blank" rel="noopener noreferrer" className="font-bold">
              kyra IT Solutions
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default WebSiteFooter;
