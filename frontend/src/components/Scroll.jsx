import React from "react";

export default function InfiniteHorizontalScroll() {
  const messages = [
    "Please login or signup before placing order otherwise the button of place order will not work.",
    "Check cart after pressing the button Add to cart.",
    "We are here to assist you 24/7"
  ];

  const repeated = Array(8).fill(messages.join(' \u00A0 • \u00A0 ')).join(' \u00A0 • \u00A0 ');

  return (
    <div className="w-full overflow-hidden bg-beige py-2" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="relative flex whitespace-nowrap animate-marquee">
        <span className="text-black font-semibold text-base pr-12">{repeated}</span>
        <span className="text-black font-semibold text-base pr-12">{repeated}</span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
