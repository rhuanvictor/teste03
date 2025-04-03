"use client";
import { fontLexend, fontDangrek, fontAcme } from "@/config/fonts";
import React, { useEffect, useState, useMemo } from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";

const TextCloudDemo: React.FC = () => {
  const [radius, setRadius] = useState(200);
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 250) {
        setRadius(80);
        setFontScale(0.5);
      } else if (screenWidth < 480) {
        setRadius(100);
        setFontScale(0.6);
      } else if (screenWidth < 640) {
        setRadius(150);
        setFontScale(0.8);
      } else {
        setRadius(200);
        setFontScale(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const texts = [
    "Assertividade",
    "Solução",
    "Negócios",
    "Finanças",
    "Eficiência",
    "Automação",
    "Otimização",
    "Comunicação",
    "Tecnologia",
    "Resultado",
  ];

  const gradients = [
    "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400",
    "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400",
    "bg-gradient-to-r from-green-600 via-green-600 to-green-400",
    "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400",
    "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400",
    "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400",
    "bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400",
    "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400",
    "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400",
    "bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600",
  ];

  const baseSizes = [25, 20, 25, 25, 20, 20, 20, 20, 20, 25];
  const sizes = baseSizes.map((size) => size * fontScale);

  const fonts = [
    `${fontDangrek.className}`,
    `${fontAcme.className}`,
    "font-mono",
    "font-bold",
    "font-extralight",
    "font-medium",
    "font-black",
    `${fontLexend.className}`,
    `${fontLexend.className}`,
    `${fontLexend.className}`,
  ];

  // Reaplica estilos dinamicamente e observa mudanças no DOM
  useEffect(() => {
    const applyStyles = () => {
      const tags = document.querySelectorAll(".tagcloud > span");
      tags.forEach((tag, index) => {
        const element = tag as HTMLElement;
        element.classList.add("text-transparent", "bg-clip-text");

        gradients[index % gradients.length].split(" ").forEach((cls) => {
          element.classList.add(cls);
        });

        element.classList.add(fonts[index % fonts.length]);
        element.style.fontSize = `${sizes[index % sizes.length]}px`;
      });
    };

    applyStyles(); // Aplica os estilos inicialmente

    // Observa mudanças no DOM para reaplicar estilos quando necessário
    const observer = new MutationObserver(() => {
      applyStyles();
    });

    const targetNode = document.querySelector(".tagcloud");
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [fontScale]);

  return (
    <div className="flex justify-center items-center w-full h-[400px]">
      <TagCloud
        options={{
          radius: radius,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        }}
        className="tagcloud"
      >
        {texts}
      </TagCloud>
    </div>
  );
};

export default TextCloudDemo;
