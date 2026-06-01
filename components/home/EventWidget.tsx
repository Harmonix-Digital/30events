'use client';

import Script from 'next/script';
import { useRef } from 'react';

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

export default function EventbriteCheckout() {
  const initialized = useRef(false);

  const loadWidget = () => {
    if (initialized.current) return;
    if (!window.EBWidgets) return;

    initialized.current = true;

    // window.EBWidgets.createWidget({
    //   widgetType: 'checkout',
    //   eventId: '1989107357652',
    //   iframeContainerId: 'eventbrite-widget-container-1989107357652',
    //   iframeContainerHeight: 425,

    //   onOrderComplete: () => {
    //     console.log('Order complete!');
    //   },
    // });

    window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '1989107357652',
      iframeContainerId: 'eventbrite-widget-container-1989107357652',

      // Optional
      iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: () => {
        console.log('Order complete!');
      },

  });





  };

  return (
    <>
      <div className="container">
        <div className='bg-white min-h-[350px]' id="eventbrite-widget-container-1989107357652" />

        <Script
          src="https://www.eventbrite.ca/static/widgets/eb_widgets.js"
          // src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
          strategy="afterInteractive"
          onLoad={loadWidget}
        />
      </div>


    </>
  );
}