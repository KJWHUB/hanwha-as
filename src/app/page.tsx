'use client'

import { useRef } from 'react'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import MainVideo from '@/components/main-home/MainVideo'
import Step1 from '@/components/main-home/Step1'

export default function Home() {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          // ..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {/* ...your app */}
        {/* video */}
        <MainVideo />
        {/* step1 */}
        <Step1 />
        {/* step2 */}
        {/* step3 */}
        {/* step4 */}
        {/* step5 */}
      </main>
    </LocomotiveScrollProvider>
  )
}
