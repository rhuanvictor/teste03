"use client"

import { useEffect, useRef, useState } from "react";
import {
  JavascriptIcon,
  N8nIcon,
  NextJsIcon,
  PowerBIIcon,
  TypescriptIcon,
  DatabricksIcon,
  SparkIcon,
  ReactIcon,
  NodeJsIcon,
  DjangoIcon,
} from "@/components/icons/social";

export default function ScrollingBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  const icons = [
    { Icon: NextJsIcon, id: "nextjs" },
    { Icon: TypescriptIcon, id: "typescript" },
    { Icon: JavascriptIcon, id: "javascript" },
    { Icon: DatabricksIcon, id: "databricks" },
    { Icon: DjangoIcon, id: "django" },
    { Icon: ReactIcon, id: "react" },
    { Icon: NodeJsIcon, id: "nodejs" },
    { Icon: SparkIcon, id: "spark" },
    { Icon: PowerBIIcon, id: "powerbi" },
    { Icon: N8nIcon, id: "n8n" },
  ];

  // Função para monitorar performance
  const monitorPerformance = () => {
    const [entry] = performance.getEntriesByType("paint");
    if (entry?.name === "largest-contentful-paint") {
      console.log("LCP: ", entry.startTime);
      setPerformanceMetrics((prevMetrics: any) => ({
        ...prevMetrics,
        LCP: entry.startTime,
      }));
    }
  };

  useEffect(() => {
    // Inicia a medição do desempenho
    monitorPerformance();

    const calculateWidth = () => {
      if (innerRef.current) {
        const singleSetWidth = innerRef.current.firstElementChild?.clientWidth || 0;
        setScrollWidth(singleSetWidth);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  const renderIcons = (key: string) => (
    <div className="flex items-center" key={key}>
      {icons.map(({ Icon, id }) => (
        <span key={`${key}-${id}`} className="inline-flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mx-4 sm:mx-6 md:mx-8">
          <Icon />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative w-full px-4 sm:px-6 md:px-8 my-6 sm:my-8 md:my-10">
      <div
        ref={containerRef}
        className="relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: "70vw",
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden="true"
      >
        <div
          ref={innerRef}
          className="flex whitespace-nowrap"
          style={{
            animation: `scroll ${scrollWidth / 40}s linear infinite`,
          }}
        >
          {renderIcons("set1")}
          {renderIcons("set2")}
          {renderIcons("set3")}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth}px);
          }
        }
      `}</style>

      {/* Exibe as métricas de performance */}
      {performanceMetrics && (
        <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
          <p>LCP: {performanceMetrics.LCP} ms</p>
        </div>
      )}
    </div>
  );
}
