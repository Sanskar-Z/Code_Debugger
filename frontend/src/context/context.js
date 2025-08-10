import { createContext } from "react";

export const counterContext = createContext([null, () => {}])
export const snippetContext = createContext([null, () => {}])
export const themeContext = createContext()