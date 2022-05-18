import { useContext } from "react";
import LyricsProvider from "../context/LyricsProvider";

const useLyrics = () => {
  return useContext(LyricsProvider);
};

export default useLyrics;
