import { useGSAP as useGSAPHook } from '@gsap/react';
import 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare module 'gsap' {
  interface gsap {
    registerPlugin(plugin: any): void;
    timeline(config?: gsap.TimelineVars): gsap.core.Timeline;
  }
  const gsap: gsap;
  export { gsap as default, ScrollTrigger };
}

declare module '@gsap/react' {
  export const useGSAP: typeof useGSAPHook;
}
