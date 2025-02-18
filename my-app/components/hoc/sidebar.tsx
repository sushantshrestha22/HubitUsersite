"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronRight, MenuIcon } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";

const AppSidebar: React.FC = () => {
  interface NavItem {
    name: string;
    href: string;
    dropdown?: Array<{ name: string; href: string }>;
  }

  const [open, setOpen] = React.useState(false);

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },

    {
      name: "Events",
      href: "/events",
    },
    {
      name: "News & Updates",
      href: "/news",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Get Involved",
      href: "/get-involved",
      dropdown: [
        {
          name: "Donate Blood",
          href: "/donate-blood",
        },
        {
          name: "Donate to NRCS",
          href: "/donate-nrcs",
        },
        {
          name: "Become a Volunteer",
          href: "/volunteer",
        },
        {
          name: "Become a Member",
          href: "/member",
        },
      ],
    },
  ];

  const pathname: string = usePathname();
  console.log(pathname);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="h-8 w-8 md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Hub IT</SheetTitle>
          <SheetDescription>
            {navItems.map((item, idx) => (
              <Menubar key={idx}>
                {item.dropdown ? (
                  <div className="w-full h-full ">
                    <div
                      onClick={() => {
                        setOpen(!open);
                      }}
                      className={`flex cursor-default select-none items-center rounded-sm px-3 py-1 text-xs lg:text-sm font-medium outline-none focus:text-accent-foreground w-full justify-between  ${
                        open
                          ? "bg-primary text-secondary"
                          : `bg-background ${
                              item.dropdown.some(
                                (subitem) =>
                                  pathname.toLowerCase() ===
                                  subitem.href.toLowerCase()
                              ) && "text-primary"
                            } `
                      }`}
                    >
                      {item.name}
                      <ChevronRight
                        className={`${
                          open ? "transform rotate-90" : "transform rotate-0"
                        } h-4 w-4`}
                      />
                    </div>
                    <div className={`${open ? "block" : "hidden"}`}>
                      {item.dropdown.map((subitem, subidx) => (
                        <MenubarMenu key={subidx}>
                          <MenubarTrigger>
                            <Link
                              href={subitem.href}
                              className={`${
                                pathname.toLowerCase() ===
                                  subitem.href.toLowerCase() && "text-primary"
                              }`}
                            >
                              {subitem.name}
                            </Link>
                          </MenubarTrigger>
                        </MenubarMenu>
                      ))}
                    </div>
                  </div>
                ) : (
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Link
                        href={item.href}
                        className={`${
                          pathname.toLowerCase() === item.href?.toLowerCase() &&
                          "text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </MenubarTrigger>
                  </MenubarMenu>
                )}
              </Menubar>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AppSidebar;