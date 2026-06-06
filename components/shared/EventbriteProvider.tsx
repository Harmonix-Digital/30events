"use client";

import { createContext, useContext, useState } from "react";
import EventbritePortal from "@/components/shared/EventbritePortal";

type EventbriteContextType = {
  openEventbrite: () => void;
  closeEventbrite: () => void;
};

const EventbriteContext = createContext<EventbriteContextType | null>(null);

export function useEventbriteModal() {
  const context = useContext(EventbriteContext);

  if (!context) {
    throw new Error("useEventbriteModal must be used inside EventbriteProvider");
  }

  return context;
}

export default function EventbriteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openEventbrite = () => setOpen(true);
  const closeEventbrite = () => setOpen(false);

  return (
    <EventbriteContext.Provider value={{ openEventbrite, closeEventbrite }}>
      {children}
      <EventbritePortal open={open} setOpen={setOpen} />
    </EventbriteContext.Provider>
  );
}