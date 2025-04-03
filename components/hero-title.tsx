"use client";

import { title } from "@/components/primitives"; 
import  SvgComponent from "@/components/gradual-svg";
import  {GradualSpacing}   from "@/components/gradual-spacing";



const HeroTitle = () => {
  return (
    <section className="text-center w-full mx-auto py-10 max-w-[1324px]">
      <div className={`${title({ size: "sm" })}`}>
        <h1 className="font-medium leading-[1.2] text-sky-950 dark:bg-zinc-50  dark:from-zinc-50 dark:to-fuchsia-50 dark:bg-clip-text dark:text-transparent" style={{ fontSize: 'clamp(24px, 5vw, 50px)' }}>
        Simplifique processos complexos com uma solução   
          <span className="text-fuchsia-700 dark:bg-gradient-to-b dark:from-zinc-400 dark:to-fuchsia-200 dark:bg-clip-text dark:text-transparent">
            <strong> eficiente e&nbsp;</strong>
          </span>
          <span className="relative inline-block">
            <strong>
              <GradualSpacing 
                className="text-fuchsia-700 bg-gradient-to-b from-fuchsia-500 to-fuchsia-900 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-zinc-400 dark:to-fuchsia-200 dark:bg-clip-text dark:text-transparent relative z-10" 
                text="inteligente!"   onceInView={true} // 🔹 Anima só uma vez
              />  
            </strong>
            <SvgComponent/>
          </span>
        </h1>
      </div>
      <div className="mt-4" />
    </section>
  );
};

export default HeroTitle;