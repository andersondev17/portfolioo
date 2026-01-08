"use client";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { useDockEffect } from "@/components/animations/header/useDockEffect";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { about, display, gallery, person, routes, work } from "@/resources";
import styles from "./Header.module.scss";


type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat(locale, options).format(now));
    };

    updateTime();
    intervalRef.current = setInterval(updateTime, 1000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  // 🎯 DOCK EFFECT INTEGRATION
  const dockRef = useDockEffect({
    minSize: 48,
    maxSize: 68, // Reducido de 80 para efecto más sutil
    itemSelector: "[data-dock-item]",
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
    
    if (scrollDelta < 10) return; // Debounce threshold
    
    const scrollingDown = currentScrollY > lastScrollY.current;
    const shouldCompact = scrollingDown && currentScrollY > 150;
    
    setIsCompact(shouldCompact);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    const throttledScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* 📍 LOCATION - Hide when compact */}
        <Flex 
          paddingLeft="12" 
          fillWidth 
          vertical="center" 
          textVariant="body-default-s"
          className={`transition-opacity duration-300 ${isCompact ? 'opacity-0' : 'opacity-100'}`}
        >
          {display.location && <Flex hide="s" onBackground="info-strong">{person.location}</Flex>}
        </Flex>

        {/* 🧭 MAIN NAV - Enhanced */}
        <Flex fillWidth horizontal="center">
          <Flex
            ref={dockRef}
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding={isCompact ? "2" : "4"}
            horizontal="center"
            zIndex={1}
            className={`${styles.dock} transition-all duration-300`}
          >
            <Flex 
              gap={isCompact ? "2" : "4"}
              vertical="center" 
              textVariant="body-default-s" 
              suppressHydrationWarning
            >
              {routes["/"] && (
                <div data-dock-item>
                  <ToggleButton 
                    prefixIcon="home" 
                    href="/" 
                    selected={pathname === "/"} 
                  />
                </div>
              )}
              
              {!isCompact && <Line background="neutral-alpha-medium" vert maxHeight="24" />}
              
              {routes["/about"] && (
                <>
                  <div data-dock-item className="s-flex-hide">
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={isCompact ? undefined : about.label}
                      selected={pathname === "/about"}
                    />
                  </div>
                  <div data-dock-item className="s-flex-show">
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </div>
                </>
              )}
              
              {routes["/work"] && (
                <>
                  <div data-dock-item className="s-flex-hide">
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      label={isCompact ? undefined : work.label}
                      selected={pathname.startsWith("/work")}
                    />
                  </div>
                  <div data-dock-item className="s-flex-show">
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      selected={pathname.startsWith("/work")}
                    />
                  </div>
                </>
              )}
              
              {routes["/gallery"] && (
                <>
                  <div data-dock-item className="s-flex-hide">
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      label={isCompact ? undefined : gallery.label}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </div>
                  <div data-dock-item className="s-flex-show">
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      selected={pathname.startsWith("/gallery")}
                    />
                  </div>
                </>
              )}
              
              {display.themeSwitcher && (
                <>
                  {!isCompact && <Line background="neutral-alpha-medium" vert maxHeight="24" />}
                  <div data-dock-item>
                    <AnimatedThemeToggler className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" />
                  </div>
                </>
              )}
            </Flex>
          </Flex>
        </Flex>

        {/* ⏰ TIME - Hide when compact */}
        <Flex 
          fillWidth 
          horizontal="end" 
          vertical="center"
          className={`transition-opacity duration-300 ${isCompact ? 'opacity-0' : 'opacity-100'}`}
        >
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s" onBackground="info-strong">
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};