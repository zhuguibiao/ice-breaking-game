/*global FB*/
import "tailwindcss/dist/base.min.css"

// polyfill
import "intersection-observer"
import smoothscroll from "smoothscroll-polyfill"

import React, { useState, useEffect, useCallback } from "react"
import ThemeContext from "./src/lib/context/ThemContext"

// kick off the polyfill!
smoothscroll.polyfill()

export const onInitialClientRender = () => {
  
}

const Wrapper = ({ element }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleThemMode = () => {
    setDarkMode(!isDarkMode)
    if (!isDarkMode) {
      localStorage.setItem("isDarkMode", "true")
    } else {
      localStorage.setItem("isDarkMode", "false")
    }
  }

  const printCopyright = useCallback(() => {
    console.log(
      "%c%s",
      `
      background: linear-gradient(
        90deg,
        #7f7fd5, #86a8e7
      );
      padding: 0.5rem;
      border-radius: 0.25rem;
      color: #FFFFFF;
      font-size: 2.25rem;
      `,
      "ice-breaking-game"
    )
    console.log(
      "%c%s",
      `
      padding: 0.25rem;
      border-radius: 0.25rem;
      background-color: #edf2f7;
      color: #3737B9;
      font-size: 1.5rem;
      `,
      "©zhuguibiao"
    )
    console.log(
      "%c%s",
      `
      font-size: 1.25rem;
      `,
      "https://github.com/zhuguibiao"
    )
  }, [])

  useEffect(() => {
    if (window) {
      try {
        const mode = localStorage.getItem("isDarkMode")
        if (mode === "true") {
          setDarkMode(true)
        } else {
          setDarkMode(false)
        }
      } catch (error) {
        localStorage.setItem("isDarkMode", "false")
      }
      printCopyright()
    }
  }, [printCopyright])
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleThemMode }}>
      {element}
    </ThemeContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => <Wrapper element={element} />
