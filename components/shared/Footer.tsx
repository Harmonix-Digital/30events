import Link from "next/link";
import Image from "next/image";
import FooterForm from "./FooterForm";
// import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#130A10] pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Left */}
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <p className="mb-6 text-[18px] font-bold text-[#FAF3F7]">
              <Image src="/images/logo.svg" alt="Logo" width={87} height={80} />
            </p>

            <p className="max-w-[320px] text-[16px] leading-[1.6] text-bodyPink">
              Curated events for grown ups. Your favorite music from the 80s,
              90s & early 2000s. Adults vibes, no late night, just good times.
            </p>

            <div
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="700"
              data-aos-delay="120"
              className="mt-6 flex items-center gap-3"
            >
              <a href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bodyPink transition hover:border-pink hover:text-pink"
              >
                <Image src="/images/instagram.svg" width={22} height={22} alt="Instagram" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bodyPink transition hover:border-pink hover:text-pink"
              >
                 <Image src="/images/facebook.svg" width={22} height={22} alt="facebook" />
              </a>
            </div>
          </div>

          {/* Middle */}
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="150"
            className="lg:pl-10"
          >
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.25em] text-pink">
              Explore
            </p>

            <ul className="space-y-3">
              {["About", "Tickets", "Faq", "Join", "Contact"].map((item, index) => {
                const isExternal = item === "Tickets";

                const href = isExternal
                  ? "https://www.eventbrite.ca/e/1989107357652?aff=oddtdtcreator"
                  : `/#${item.toLowerCase()}`;

                return (
                  <li
                    key={item}
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="600"
                    data-aos-delay={220 + index * 80}
                  >
                    {isExternal ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[16px] text-bodyPink transition hover:text-[#FAF3F7]"
                      >
                        {item}
                      </a>
                    ) : (
                      <a
                        href={href}
                        className="text-[16px] text-bodyPink transition hover:text-[#FAF3F7]"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right */}
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.25em] text-pink">
              Stay In
            </p>

            <p className="mb-4 text-[16px] text-bodyPink">
              First access to drops & guest list.
            </p>

            <FooterForm />


          </div>
        </div>

        {/* Bottom */}
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="800"
          data-aos-delay="500"
          className="mt-14 border-t border-white/10 py-6 text-center text-[13px] text-bodyPink md:text-left"
        >
          © 2026 Your 30+ Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}