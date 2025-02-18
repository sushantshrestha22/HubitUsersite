import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

type Props = {};

const Navbar = (props: Props) => {
  interface NavItem {
    name: string;
    href: string;
    dropdown?: Array<{ name: string; href: string }>;
  }

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "Placements",
      href: "/placements",
    },
    {
      name: "Services",
      href: "/services",
    },
    // {
    //   name: "Get Involved",
    //   href: "/get-involved",
    //   dropdown: [
    //     {
    //       name: "Donate Blood",
    //       href: "/donate-blood",
    //     },
    //     {
    //       name: "Donate to NRCS",
    //       href: "/donate-nrcs",
    //     },
    //     {
    //       name: "Become a Volunteer",
    //       href: "/volunteer",
    //     },
    //     {
    //       name: "Become a Member",
    //       href: "/member",
    //     },
    //   ],
    // },

    // {
    //   name: "News & Updates",
    //   href: "/news",
    // },
    // {
    //   name: "Contact Us",
    //   href: "/contact",
    // },
  ];

  return (
    <div className="relative w-full space-y-2 py-4 place-content-center place-items-end  ">
      <div className="place-content-center place-items-end flex gap-4 h-full px-10">
        <div className="flex gap-2 place-content-center place-items-center">
          <FaPhoneAlt className="h-4 w-4" />
          <div className="text-sm">071-532805 | 986454546</div>
        </div>
        <div className="flex gap-2 place-content-center place-items-center">
          <IoMail className="h-5 w-5" />
          <div className="text-sm"> training@hubit.com.np</div>
        </div>
      </div>
      <div className="w-[75%] bg-gradient-to-r from-primary to-white h-[1px]"></div>
      <div className="flex justify-between items-center px-10">
        <div className=" w-full flex justify-between items-center ">
          <div className="flex justify-between items-center h-full gap-10 max-md:hidden">
            <div className="flex justify-between items-center h-full space-x-4">
              {navItems.map((item, idx) => (
                <Menubar key={idx}>
                  {item.dropdown ? (
                    <MenubarMenu>
                      <MenubarTrigger>{item.name}</MenubarTrigger>
                      <MenubarContent>
                        {item.dropdown?.map((subItem, idx) => (
                          <MenubarItem key={idx}>
                            <Link href={subItem.href}>{subItem.name}</Link>
                          </MenubarItem>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  ) : (
                    <MenubarMenu>
                      <MenubarTrigger>
                        <Link
                          href={item.href}
                          //   className={`${
                          //     pathname.toLowerCase() ===
                          //       item.href?.toLowerCase() && "text-primary"
                          //   }`}
                        >
                          {item.name}
                        </Link>
                      </MenubarTrigger>
                    </MenubarMenu>
                  )}
                </Menubar>
              ))}
            </div>
            <div className="">
              <Link href="/admission" className="max-lg:hidden">
                <Button variant="secondary" size="lg" className="text-accent">Online Admission</Button>
              </Link>
            </div>
          </div>
          {/* <AppSidebar /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
