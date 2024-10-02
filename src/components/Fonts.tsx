"use client";

import { Noto_Serif as SerifFont } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";

const serif = SerifFont({
  subsets: ["latin"],
  variable: "--font-family-serif",
  fallback: ["Georgia", "Times", "serif"],
  preload: true,
  weight: ["400", "600", "700"],
});

function Fonts() {
  useServerInsertedHTML(() => {
    return (
      <style
        key={"fonts"}
        dangerouslySetInnerHTML={{
          __html: `
          :root {
             --font-family-serif: ${serif.style.fontFamily}, 'Georgia', 'Times', 'serif';
          }
        `,
        }}
      />
    );
  });

  return null;
}

export default Fonts;
