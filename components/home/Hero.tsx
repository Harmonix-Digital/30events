import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import HeroGetTicket from "./HeroGetTicket";
import HeroUpcomingEvent from "./HeroUpcomingEvent";

const points = [
  "Disco Forever",
  "Old School Hip Hop",
  "Classic RnB",
  "Throwbacks Only",
  "Grown & Sexy",
];

const meta = [
  { value: "12K+", label: "Members" },
  { value: "60+", label: "Nights hosted" },
  { value: "3", label: "Cities" },
  { value: "4.9★", label: "Avg rating" },
];


const HeroSection = () => {
  return (
    <>
      <section id="about" className="relative mt-[80px] overflow-hidden pt-[96px] pb-[72px] md:pt-[120px] md:pb-[90px] lg:pt-[128px] lg:pb-[100px] scroll-mt-24">
        <div className="absolute inset-0 z-20">
          <Image
            className="h-full w-full object-cover"
            src="/images/hero-gradient.webp"
            alt="overlay-shade"
            width={1440}
            height={1024}
            priority
          />
        </div>

        <div className="absolute inset-0 z-10">
          <Image
            className="h-full w-full object-cover"
            src="/images/herobg.webp"
            alt="hero background"
            width={1440}
            height={1024}
            priority
          />
        </div>

        <div className="container relative z-30">
          <div className="w-full lg:max-w-3xl">
            <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0"  className="flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-pink sm:text-xs">
              <Image
                src="/images/hero-icon.svg"
                alt="hero-icon"
                width={14}
                height={14}
              />
              <span>Amazing Events for the 30+ Crowd</span>
            </p>

            <h1  className="my-7 flex flex-col font-heading text-[58px] uppercase leading-[0.85] tracking-[-1px] text-[#FAF3F7] sm:text-[78px] md:text-[104px] md:tracking-[-2px] lg:my-8 lg:text-[136px] lg:tracking-[-2.7px]">
              <span data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0">The night</span>
              <span data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="`100" className="text-pink">still belongs</span>
              <span data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="200">to you.</span>
            </h1>

            <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="300" className="max-w-xl text-[16px] leading-[1.6] text-bodyPink md:text-[18px]">
              Bringing you the best adult events across North America! Relive
              the glory days without having to stay out all night. We create
              amazing events for adults with stuff to do the next day!
            </p>

            <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0" className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* <a
                href="https://www.eventbrite.ca/e/80s-90s-hit-parade-day-time-club-party-tickets-1989107357652?aff=oddtdtcreator"
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-buttonPink px-8 py-4 text-sm font-semibold uppercase tracking-[1.4px] text-[#0A0408] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] sm:w-auto"
              >
                Get Tickets <ArrowRight className="h-4 w-4" />
              </a> */}
              <HeroGetTicket/>
              <HeroUpcomingEvent />

              {/* <Link
                href="#"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#090407]/40 px-8 py-4 text-sm font-semibold uppercase tracking-[1.4px] text-[#FAF3F7] transition-all duration-300 hover:bg-[#090407]/70 sm:w-auto"
              >
                Upcoming Events
              </Link> */}


            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:flex sm:gap-10 lg:mt-24">
              {meta.map((item,index) => (
                <div data-aos="fade-left" data-aos-offset="0" data-aos-duration="800" data-aos-delay={index*100} key={item.label}>
                  <h3 className="text-2xl leading-[32px] tracking-[-0.48px] text-[#FAF3F7]">
                    {item.value}
                  </h3>
                  <p className="text-[10px] uppercase leading-[1.5] tracking-[1px] text-bodyPink">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src="/images/hero-bottom-logo.svg"
          width={75}
          height={112}
          alt="hero-bottom-logo"
          className="absolute bottom-8 right-6 z-30 hidden md:block lg:bottom-12 lg:right-12"
        />
      </section>

      {/* <section className="mx-auto max-w-[2000px] bg-black">
        <div className="flex w-full flex-col items-center justify-center gap-5 p-6 md:flex-row md:flex-wrap md:justify-between md:gap-8 lg:gap-12">
          {points.map((point, index) => (
            <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay={index * 100} key={point}>
              <div>
                <h3 className="text-center font-heading text-[28px] uppercase leading-[1.1] tracking-[-0.6px] text-bodyPink md:text-3xl">
                  {point}
                </h3>
              </div>

              {index !== points.length - 1 && (
                <Image
                  src="/images/pinkstar.svg"
                  alt="Star"
                  width={29}
                  height={36}
                  className="hidden md:block"
                />
              )}
            </div>
          ))}
        </div>
      </section> */}
      <HeroCarousel />



    </>
  );
};

export default HeroSection;