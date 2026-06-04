"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

const faqs = [
  {
    question: "What age group is this for?",
    answer: "This event is for the 30+ crowd who still know to have fun but don't want to stay out all night. If you have friends who are 25+ they are welcome.",
  },
  {
    question: "What kind of music will be played?",
    answer:
      "Your favorite songs from the 80s & 90s with a splash of the best early 2000s.",
  },
  {
    question: "Is there a dress code?",
    answer: "Casual, fun, come as you are.",
  },
  {
    question: "Do I need tickets in advance?",
    answer:
      "Purchasing a ticket guarantees entrance. Events will sell out and there may or may not be tickets available at the door.",
  },
  {
    question: "Can I reserve a table?",
    answer:
      "Yes, email us at yourthirtyplusevents@gmail.com for more information about table reservations.",
  },
  {
    question: "Where are events held?",
    answer:
      "Our launch event is being held in Vancouver, BC. We're planning future events for cities across Canada & the United States.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black py-16 md:py-20 lg:py-28  scroll-mt-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-14 text-center md:mb-20">
          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="0"
            className="mb-5 text-[18px] font-semibold uppercase tracking-[0.3em] text-pink"
          >
            FAQ
          </p>

          <h2
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="900"
            data-aos-delay="120"
            className="font-heading text-[54px] uppercase leading-none tracking-[-1.2px] text-[#FAF3F7] md:text-[70px] lg:text-[82px]"
          >
            Good Questions.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="rounded-2xl border border-white/10 bg-[#130A10] px-6 py-6 md:px-10"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <h3 className="text-[20px] font-bold text-[#FAF3F7] md:text-[24px]">
                    {item.question}
                  </h3>

                  <span
                    className={`text-pink transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    {isOpen ? <X size={22} /> : <Plus size={22} />}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "mt-6 max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[1.6] text-bodyPink md:text-[18px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}