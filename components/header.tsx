import { IconMenu2 as IconMenu, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

const meetTheBusinessesCategories = [
  {
    title: "Brancheområderne",
    link: "#",
  },
  {
    title: "Fødevarer, jordbrug og oplevelser",
    link: "#",
  },
  {
    title: "Kontor, handel og forretningsservice",
    link: "#",
  },
  {
    title: "Omsorg, sundhed og pædagogik",
    link: "#",
  },
  {
    title: "Teknologi, byggeri og transport",
    link: "#",
  },
];

const infoLinks = [
  {
    title: "Om ilære.dk",
    link: "#",
  },
  {
    title: "Garantivirksomheder",
    link: "#",
  },
];

export function Header() {
  return (
    <header className="bg-background">
      <div className="container h-18 mx-auto flex px-4 flex-row justify-between items-center">
        <div className="relative h-6 md:h-10 aspect-[7/1]">
          <Image src="/images/forside/logo.webp" alt="" fill />
        </div>
        <div className="flex flex-row gap-4">
          <NavigationMenu viewport={false} className="hidden xl:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Mød Virksomhederne
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {meetTheBusinessesCategories.map((category, idx) => (
                    <Link
                      className={navigationMenuTriggerStyle()}
                      key={idx}
                      href={category.link}
                    >
                      {category.title}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className={navigationMenuTriggerStyle()} href="#">
                  Erhvervsuddannelser
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Info</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {infoLinks.map((category, idx) => (
                    <Link
                      className={navigationMenuTriggerStyle()}
                      key={idx}
                      href={category.link}
                    >
                      {category.title}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className={navigationMenuTriggerStyle()} href="#">
                  Kontakt
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className={navigationMenuTriggerStyle()} href="#">
                  Bliv en del af ilære.dk
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <button>
            <IconSearch />
          </button>
          <button className="flex xl:hidden">
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
