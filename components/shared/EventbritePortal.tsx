"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";
import { X } from "lucide-react";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: {
        widgetType: string;
        eventId: string;
        iframeContainerId: string;
        iframeContainerHeight?: number;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

type EventbritePortalProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function EventbritePortal({ open, setOpen }: EventbritePortalProps) {
  const [mounted, setMounted] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-initialize widget whenever modal opens
  const initWidget = () => {
    if (!open) return;
    if (!window.EBWidgets) return;

    const container = document.getElementById(
      "eventbrite-widget-container-1989107357652"
    );

    if (container) {
      // Clear previous iframe if exists
      container.innerHTML = "";
    }

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: "1989107357652",
      iframeContainerId: "eventbrite-widget-container-1989107357652",
      iframeContainerHeight: 425,
      onOrderComplete: () => console.log("Order complete!"),
    });
  };

  // Run on modal open
  useEffect(() => {
    if (open) {
      initWidget();
    }
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-9998 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-9999 flex items-start justify-center overflow-y-auto px-4 pt-24">
        <div className="relative w-full max-w-2xl rounded-2xl bg-white p-4 shadow-2xl">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close modal"
            className="absolute right-3 top-3 z-10 rounded-full bg-black p-1 text-white"
          >
            <X size={22} />
          </button>

          {/* Eventbrite Widget */}
          <div
            id="eventbrite-widget-container-1989107357652"
            className="min-h-[425px]"
          />

          {/* Eventbrite Script */}
          <Script
            src="https://www.eventbrite.ca/static/widgets/eb_widgets.js"
            strategy="afterInteractive"
            onLoad={initWidget}
          />
        </div>
      </div>
    </>,
    document.body
  );
}