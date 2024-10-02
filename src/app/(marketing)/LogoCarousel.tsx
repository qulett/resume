import Image from "next/image";
import React from "react";

interface Logo {
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
      })"
      className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        className="animate-infinite-scroll flex items-center justify-center [&_img]:max-w-none [&_li]:mx-8"
      >
        {logos.map((logo, index) => (
          <li key={index} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={400}
              height={400}
              className="h-30 w-52"
            />
          </li>
        ))}

        {logos.map((logo, index) => (
          <li
            key={`${index}-duplicate`}
            className="flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={400}
              height={400}
              className="h-30 w-52"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
