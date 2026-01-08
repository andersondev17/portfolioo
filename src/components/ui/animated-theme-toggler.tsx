"use client"

import type React from "react"

import { ToggleButton, useTheme } from "@once-ui-system/core"
import { Moon } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({ className, duration = 400, ...props }: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<string>("light")
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light")
  }, [])

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light")
  }, [theme])

  const isDark = currentTheme === "dark"

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const newTheme = isDark ? "light" : "dark"

    if (!document.startViewTransition) {
      setTheme(newTheme)
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    }).ready

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(Math.max(left, window.innerWidth - left), Math.max(top, window.innerHeight - top))

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    )
  }, [isDark, duration, setTheme])

  if (!mounted) {
    return (
      <button ref={buttonRef} className={cn(className)} aria-label="Toggle theme" {...props}>
        <Moon />
      </button>
    )
  }
  const icon = currentTheme === 'dark' ? 'light' : 'dark';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      {...props}
    >
      <ToggleButton
        prefixIcon={icon}
        aria-label={`Switch to ${nextTheme} mode`}
      />
    </button>
  )
}
