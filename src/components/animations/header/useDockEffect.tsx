import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type DockEffectConfig = {
    minSize: number;
    maxSize: number;
    itemSelector: string;
};

export const useDockEffect = ({
    minSize = 48,
    maxSize = 120,
    itemSelector = "[data-dock-item]",
}: DockEffectConfig) => {
    const dockRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const items = Array.from(dock.querySelectorAll(itemSelector)) as HTMLElement[];
        itemsRef.current = items;

        if (items.length === 0) return;

        const bound = minSize * Math.PI;
        const firstItem = items[0];

        gsap.set(items, {
            transformOrigin: "50% 120%",
        });

        const updateItems = (pointerX: number) => {
            const offset = dock.getBoundingClientRect().left + firstItem.offsetLeft;
            const pointer = pointerX - offset;

            items.forEach((item, i) => {
                const distance = i * minSize + minSize / 2 - pointer;
                let scale = 1;
                let x = 0;
            
                if (Math.abs(distance) < bound) {
                    const rad = (distance / minSize) * 0.5;
                    scale = 1 + (maxSize / minSize - 1) * Math.cos(rad);

                    // Spacing sutil: 0.5x no overlaps
                    x = 0.8 * (maxSize - minSize) * Math.sin(rad);
                }
            
                gsap.to(item, {
                    duration: 0.3,
                    x,
                    scale,
                    ease: "power2.out",
                });
            });
        };

        const handleMouseMove = (e: MouseEvent) => updateItems(e.clientX);

        const handleMouseLeave = () => {
            gsap.to(items, {
                duration: 0.3,
                scale: 1,
                x: 0,
                ease: "power2.out",
            });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [minSize, maxSize, itemSelector]);

    return dockRef;
};