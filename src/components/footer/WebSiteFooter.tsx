import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { WebsiteFooterLinks } from "./footerLink";

const WebSiteFooter = () => {
  return (
    <footer className="bg-dark text-white max_screen_width max-lg:py-10 lg:pt-18 lg:pb-10">
      <Container>
        <div className="grid lg:grid-cols-[auto_auto_auto_auto_auto] md:grid-cols-2 grid-cols-1 gap-6">
          {/* logo */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="block relative w-[340px] max-md:mx-auto aspect-[4/.6]"
            >
              <Image
                src={WebsiteFooterLinks.logo}
                alt="logo"
                fill
                className="object-cover"
              />
            </Link>
            <p className="text-sm mt-4">{WebsiteFooterLinks.description}</p>
          </div>
          {/* links */}
          {WebsiteFooterLinks.listLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-lg font-bold">{link.title}</h2>
              <ul className="flex flex-col gap-2">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-sm flex items-center">
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
