import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import AppSidebar from "./sidebar";
import { fetchData } from "@/lib/query/query";

type Props = {};

const Navbar = async (props: Props) => {
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
    {
      name: "Corporate Training",
      href: "/corporate-training",
    },
    // {
    //   name: "Contact Us",
    //   href: "/contact",
    // },
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

  const contact = await fetchData("contact");
  console.log(contact.result[0]);

  return (
    <div className="relative w-full md:space-y-3 py-3 place-content-center place-items-end ">
      <div className="place-content-center place-items-end flex gap-4 h-full px-10 lg:px-20 max-md:hidden">
        <div className="flex gap-2 place-content-center place-items-center">
          <FaPhoneAlt className="h-3 w-3" />
          <div className="text-xs">{contact?.result[0]?.phone}</div>
        </div>
        <div className="flex gap-2 place-content-center place-items-center">
          <IoMail className="h-4 w-4" />
          <div className="text-xs"> {contact?.result[0]?.email}</div>
        </div>
      </div>
      <div className="w-[75%] bg-gradient-to-r from-primary to-white h-[1px] max-md:hidden"></div>
      <div className="flex justify-between items-center px-10 lg:px-20">
        <div className=" w-full flex justify-between items-center ">
          <div className="flex justify-between items-center h-full gap-10 max-md:hidden">
            <div className="flex justify-between items-center h-full space-x-4 lg:space-x-8">
              {navItems.map((item, idx) => (
                <Menubar key={idx} className="">
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
            <Link href="/admission" className="max-lg:hidden">
              <Button
                variant="secondary"
                size="lg"
                className="text-primary font-bold"
              >
                Online Admission
              </Button>
            </Link>
          </div>
          <AppSidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
