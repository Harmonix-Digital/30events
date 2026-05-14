"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const points = [
  "Disco Forever",
  "Old School Hip Hop",
  "Classic RnB",
  "Throwbacks Only",
  "Grown & Sexy",
];

export default function PointsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="mx-auto max-w-[2000px] bg-black">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {points.map((point, index) => (
            <div
              key={point}
              className="min-w-0 flex-[0_0_100%] px-6 py-6 md:flex-[0_0_50%] lg:flex-[0_0_25%]"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              {/* Text and star are two equal-spaced flex items */}
              <div className="flex items-center justify-between w-full">
                <div className="flex-1 text-center">
                  <h3 className="font-heading text-[28px] uppercase leading-[1.1] tracking-[-0.6px] text-bodyPink md:text-3xl">
                    {point}
                  </h3>
                </div>

                <div className="flex items-center justify-center flex-none w-[29px]">
                  <Image
                    src="/images/pinkstar.svg"
                    alt="Star"
                    width={29}
                    height={36}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}