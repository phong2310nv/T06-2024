import { useContext } from "react";
import { ScreenWidthContext } from "./screenWith";

export const useScreenWidth = () => useContext(ScreenWidthContext);
