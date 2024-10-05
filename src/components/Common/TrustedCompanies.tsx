import { CLIENTS } from '@/lib/constant'
import Image from 'next/image'
import React from 'react'

const TrustedCompanies = () => {
  return (
    <div className="container">
    <div className='border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28'>

        <h2 className='text-center pb-10 pt-16 text-gray-600 font-semibold text-2xl'>Trusted by great companies</h2>
        
        <section className="relative">
        <div
          className="overflow-hidden flex
                after:content['']
                after:dark:from-brand-dark
                after:to-transparent
                after:from-background
                after:bg-gradient-to-l
                after:right-0
                after:top-0
                after:bottom-0
                after:w-20
                after:absolute
                after:z-10

                 before:content['']
                before:dark:from-brand-dark
                before:to-transparent
                before:from-background
                before:bg-gradient-to-r
                before:top-0
                before:bottom-0
                before:w-20
                before:z-10
                before:absolute
            "
        >
          {[...Array(2)].map((arr, i) => (
            <div
              key={i}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[150px]
                    mx-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>  
    </div>
    </div>
      )
}

export default TrustedCompanies
