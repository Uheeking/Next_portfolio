"use client"
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/src/app/components/hero'));

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font" style={{marginTop: "150px", marginLeft: "100px"}}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-10">
          <Hero />
        </div>
      </section>
    </>
  );
}