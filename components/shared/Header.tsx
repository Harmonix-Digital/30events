"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEventbriteModal } from "@/components/shared/EventbriteProvider";

const navItems = ["ABOUT", "FAQ", "JOIN", "CONTACT"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openEventbrite } = useEventbriteModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-[#090407] transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="mx-auto flex items-center justify-between">
            <Link href="/" className="flex h-auto w-[87px] items-center p-3">
              <Image
                src="/images/logo-new2.svg"
                alt="Your 90s Events"
                width={87}
                height={80}
                className="h-auto"
                priority
              />
            </Link>

            <div className="hidden items-center gap-9 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-[14px] font-semibold tracking-[0.18em] text-[#8f7f8b] transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={openEventbrite}
              className="hidden rounded-full bg-[#FF82C7] px-6 py-2.5 text-[14px] font-semibold tracking-wide text-black transition-all duration-300 hover:bg-[#e7cada] hover:shadow-[0_0_20px_rgba(255,130,199,0.6)] md:inline-flex cursor-pointer"
            >
              GET TICKETS
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </nav>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[998] bg-black/80 transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-[999] h-full w-[280px] bg-[#070307] px-6 py-5 shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Image
            src="/images/logo.svg"
            alt="Your 90s Events"
            width={70}
            height={40}
            className="h-auto w-[64px]"
          />

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.22em] text-[#a99ca7] transition hover:text-white"
            >
              {item}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openEventbrite();
            }}
            className="mt-4 w-fit rounded-full bg-[#ff6bc8] px-6 py-3 text-xs font-extrabold tracking-wide text-black cursor-pointer "
          >
            GET TICKETS
          </button>
        </div>
      </aside>
    </>
  );
}