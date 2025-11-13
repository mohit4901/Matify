import React from "react";

export default function InfiniteHorizontalScroll() {
  const messages = [
    "Please login or signup before placing order otherwise the button of place order will not work.",
    "Check cart after pressing the button Add to cart.",
    "We are here to assist you 24/7"
  ];

  const repeated = Array(10).fill(messages.join(' \u00A0 • \u00A0 ')).join(' \u00A0 • \u00A0 ');

  return (
    <div className="w-full overflow-hidden py-2 bg-[#F5F5DC] mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      <div className="relative flex whitespace-nowrap animate-marquee text-black font-medium text-sm sm:text-base">
        <span className="pr-12">{repeated}</span>
        <span className="pr-12">{repeated}</span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          span {
            font-size: 0.85rem;
          }
          /* Increase margin by 50% on mobile */
          .mt-4 {
            margin-top: 3rem !important; /* 50% more than default */
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
