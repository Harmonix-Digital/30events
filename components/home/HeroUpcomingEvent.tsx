"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useEventbriteModal } from "@/components/shared/EventbriteProvider";



const HeroUpcomingEvent = () => {
  const { openEventbrite } = useEventbriteModal();

  return (
    <>
      <button
        type="button"
        onClick={openEventbrite}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#090407]/40 px-8 py-4 text-sm font-semibold uppercase tracking-[1.4px] text-[#FAF3F7] transition-all duration-300 hover:bg-[#090407]/70 sm:w-auto cursor-pointer"
      >
        Upcoming Events
      </button>

      {/* <Link
        href="#"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#090407]/40 px-8 py-4 text-sm font-semibold uppercase tracking-[1.4px] text-[#FAF3F7] transition-all duration-300 hover:bg-[#090407]/70 sm:w-auto"
      >
        Upcoming Events
      </Link> */}



    
    </>
  );
};

export default HeroUpcomingEvent;