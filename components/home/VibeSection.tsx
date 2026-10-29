import Image from "next/image";

export default function VibeSection() {
  const imageAos = {
    "data-aos-offset": "0",
    "data-aos-duration": "800",
  };

  return (
    <section className="bg-[#130A10] py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 lg:mb-14">
          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="0"
            className="mb-3 text-[26px] font-semibold uppercase tracking-[0.22em] text-pink"
          >
            The Vibe
          </p>

          <h2
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="120"
            className="font-heading text-[42px] uppercase leading-none text-[#FAF3F7] md:text-[52px] lg:text-[60px] tracking-[-1.2px]"
          >
            30 Plus &amp; Living It Up
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">
          {/* Large Left */}
          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="0"
            className="relative col-span-2 row-span-2 md:col-span-1 md:row-span-2"
          >
            <Image
              src="/images/gallery/vibe-top-left.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Top small images */}
          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative"
          >
            <Image
              src="/images/gallery/vibe-top-small-1.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative"
          >
            <Image
              src="/images/gallery/vibe-top-small-2.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Tall right */}
          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative col-span-2 md:col-span-1 md:row-span-2"
          >
            <Image
              src="/images/gallery/vibe-top-right.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Middle wide */}
          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative col-span-2"
          >
            <Image
              src="/images/gallery/vibe-top-wide.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Row of 4 */}
          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="0"
            className="relative"
          >
            <Image
              src="/images/gallery/vibe-middle-1.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative"
          >
            <Image
              src="/images/gallery/vibe-middle-2.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative"
          >
            <Image
              src="/images/gallery/vibe-middle-3.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative"
          >
            <Image
              src="/images/gallery/vibe-middle-4.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Bottom wide */}
          {/* <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative col-span-2"
          >
            <Image
              src="/images/gallery/vibe-bottom-left.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div
            {...imageAos}
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative col-span-2"
          >
            <Image
              src="/images/gallery/vibe-bottom-right.svg"
              alt=""
              fill
              className="rounded-2xl object-cover"
            />
          </div> */}




        </div>
      </div>
    </section>
  );
}