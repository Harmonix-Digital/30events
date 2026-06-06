"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useEventbriteModal } from "@/components/shared/EventbriteProvider";



const HeroGetTicket = () => {
  const { openEventbrite } = useEventbriteModal();

  return (
    <button
      type="button"
      onClick={openEventbrite}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-buttonPink px-8 py-4 text-sm font-semibold uppercase tracking-[1.4px] text-[#0A0408] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] sm:w-auto cursor-pointer"
    >
      Get Tickets <ArrowRight className="h-4 w-4" />
    </button>
  );
};

export default HeroGetTicket;