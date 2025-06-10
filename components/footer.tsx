"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebookFilled,
  IconBrandYoutubeFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="relative px-10 w-full bg-footer-bg">
      <div className="flex flex-col lg:flex-row pb-[300px] md:pb-22 mb-1 lg:pb-0 space-y-5 justify-between pt-14 text-sm">
        <div className="flex-1 lg:h-[220px] text-foreground">
          {theme === "light" && (
            <Image
              src="/logo-labelled.png"
              alt="Logo"
              width={243}
              height={32}
            />
          )}
          {theme !== "light" && (
            <Image
              src="/logo-labelled-white.png"
              alt="Logo"
              width={243}
              height={32}
            />
          )}

          <p className="mt-4">Connect with us</p>

          <ul className="mt-4 flex gap-2 border-foreground">
            <li className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-inherit">
              <Link href="https://www.facebook.com/alwaysonnetwork">
                <IconBrandFacebookFilled />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-inherit">
              <Link href="https://www.youtube.com/@alwaysonnetwork">
                <IconBrandYoutubeFilled />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-inherit">
              <Link href="https://www.instagram.com/alwaysonnetwork">
                <IconBrandInstagramFilled />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-inherit">
              <Link href="https://www.linkedin.com/company/alwaysonnetwork">
                <IconBrandLinkedinFilled />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h2 className="font-semibold text-base mb-2">Company</h2>

          <ul className="flex flex-col gap-1 text-lime-600">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Management</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>
            <li>
              <Link href="/">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-base mb-2">New Services</h2>

          <ul className="flex flex-col gap-1 text-lime-600">
            <li>
              <Link href="/">Video Conferencing Solution</Link>
            </li>
            <li>
              <Link href="/">Surveillance Solutions</Link>
            </li>
            <li>
              <Link href="/">Customized Backhauls</Link>
            </li>
            <li>
              <Link href="/">Hotspot Solution</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h2 className="font-semibold text-base mb-2">Product & Service</h2>

          <ul className="flex flex-col gap-1 text-lime-600">
            <li>
              <Link href="/">Video Conferencing Solution</Link>
            </li>
            <li>
              <Link href="/">Surveillance Solutions</Link>
            </li>
            <li>
              <Link href="/">Customized Backhauls</Link>
            </li>
            <li>
              <Link href="/">Hotspot Solution</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[272px] md:h-16 gap-5 md:gap-5 px-10 py-5 text-xs flex flex-col md:flex-row md:justify-between md:items-center bg-secondary">
        {/* Left Section*/}
        <section>
          <p>AlwaysOn Network Bangladesh Ltd © 2013 All rights reserved</p>
        </section>

        {/* Right Section*/}
        <section className="flex gap-5 flex-col md:flex-row">
          <p>DBID No: 178299482</p>
          <Link href="/" className="text-foreground">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-foreground">
            Privacy Policy
          </Link>
          <Link href="/" className="text-foreground">
            Refund & Delivery Policy
          </Link>
          <Link href="/" className="text-foreground">
            Company Doc
          </Link>
          <Link href="/" className="text-foreground">
            Approved Tariff
          </Link>
        </section>
      </div>
    </footer>
  );
};
