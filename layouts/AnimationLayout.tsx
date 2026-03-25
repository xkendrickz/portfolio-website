"use client";

import { useEffect } from "react";
import Script from "next/script";
import AOS from "aos";

declare global {
  interface Window {
    AOS: {
      init: (options?: Record<string, unknown>) => void;
      refresh: () => void;
    };
  }
}

export default function AnimationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-center",
      });
    };

    initAOS();
  }, []);

  return (
    <>
      {/* AOS CSS */}
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      {/* AOS Script */}
      <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.AOS.init({
            duration: 1000,
            easing: "ease",
          });
        }}
      />

      {children}
    </>
  );
}