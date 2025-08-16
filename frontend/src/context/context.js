import { createContext } from "react";

export const counterContext = createContext([null, () => {}])
export const themeContext = createContext([true, () => {}])
export const codeContext = createContext([null, () => {}])
export const modeContext = createContext([true, () => {}])
