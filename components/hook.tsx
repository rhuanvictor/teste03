import React, { useEffect } from 'react';

const ScrollingBanners = () => {
  useEffect(() => {
    // Medição de performance
    const measurePerformance = () => {
      // Marcar o tempo de início da renderização
      const start = performance.now();

      // Medir o First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntriesByType('paint');
        const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          console.log('FCP:', fcp.startTime);
        }
      });
      fcpObserver.observe({ type: 'paint', buffered: true });

      // Medir o Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntriesByType('largest-contentful-paint');
        const lcp = entries[0]; // O maior conteúdo visível
        if (lcp) {
          console.log('LCP:', lcp.startTime);
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // Medir o Total Blocking Time (TBT)
      const tbtObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntriesByType('longtask');
        let totalBlockingTime = 0;
        entries.forEach(entry => {
          if (entry.duration > 50) {
            totalBlockingTime += entry.duration;
          }
        });
        console.log('TBT:', totalBlockingTime);
      });
      tbtObserver.observe({ type: 'longtask', buffered: true });

      // Marcar o tempo de término da renderização
      const end = performance.now();
      console.log('Tempo de renderização do componente: ', end - start, 'ms');
    };

    measurePerformance();
  }, []);

  return (
    <div className="scrolling-banners">
      <h2>Scrolling Banners</h2>
      {/* Aqui você adiciona o conteúdo do seu componente */}
      <div className="banner-item">Banner 1</div>
      <div className="banner-item">Banner 2</div>
      <div className="banner-item">Banner 3</div>
    </div>
  );
};

export default ScrollingBanners;
