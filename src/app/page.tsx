"use client";

import React from "react";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import TextPressure from "./components/TextPressure/TextPressure";
import SplitText from "./components/SplitText/SplitText";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import Aurora from "./components/Aurora/Aurora";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import ProfileCard from "./components/ProfileCard/ProfileCard";

export default function page() {
  // ✅ taruh di sini
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden flex">
      <SplashCursor />
      <div className="absolute h-screen w-screen">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="transition-all flex-col p-15 flex justify-center ">
        <div className="flex gap-5 pl-5">
          <div className="flex items-center">
            <SplitText
              text="I'm Ready For Job"
              className="text-2xl text-white font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              // ✅ callback dipanggil di sini
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          <RotatingText
            texts={["web Developer", "Welcome For You All", "Just Call Me"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-br from-black via-purple-950 to-indigo-900 text-white font-bold text-2xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <div className="text-white w-1/2 h-35 mt-5 ml-5">
          <DecryptedText
            text="Saya seorang Frontend Developer berpengalaman di React.js, Next.js, dan Tailwind CSS.
                  Fokus saya adalah membangun website yang modern, interaktif, dan responsif.
                  Mengutamakan kualitas, detail, serta pengalaman pengguna yang optimal.
                  Siap berkolaborasi untuk menghadirkan solusi digital yang inovatif."
            animateOn="view" // 👈 ini kuncinya
            className="text-sm"
            encryptedClassName="text-gray-400"
            speed={20} // kecepatan scrambling
            maxIterations={8} // jumlah randomisasi
            sequential={true} // huruf muncul berurutan
            revealDirection="start" // arah reveal (start | end | center)
          />
        </div>

        <div className=" inline-flex ">
          <ProfileCard
            contactText="Contact Me"
            avatarUrl="/path/to/avatar.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>

      {/* lanyard */}
      <div className="absolute z-10 right-0 top-[-30] h-screen w-1/2 flex justify-end items-center">
        <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}
