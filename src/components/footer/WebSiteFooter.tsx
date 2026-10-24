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
        <div className="grid lg:grid-cols-[auto_auto_auto_auto_auto] grid-cols-2  gap-6">
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
            <p className="text-sm mt-4">{WebsiteFooterLinks.description}</p>
            <div className="flex gap-3 mt-5 max-md:justify-center">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-full border border-white/20 flex items-center justify-center transition hover:bg-white/10"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          {WebsiteFooterLinks.listLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-lg font-bold">{link.title}</h2>
              <ul className="flex flex-col gap-2">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm flex items-center"
                      {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-white/10 my-7" />
        <div className="flex max-lg:flex-col justify-center max-lg:text-center gap-4 lg:justify-between items-center text-sm">
          <p>Copyright @ 2026 | Reluxe Mobility | All Rights Reserved</p>
          <p>
            Powered By{" "}
            <Link href="https://www.kyraitsolutions.com/" className="font-bold">
              kyra IT Solutions
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default WebSiteFooter;
