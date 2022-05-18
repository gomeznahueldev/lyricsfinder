import { createContext, useEffect, useState } from "react";
import axios from "axios";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [lyric, setLyric] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert("");
        setLyric("");
      }, 3000);
    }
  }, [alert]);

  const searchLyric = async (search) => {
    setLoading(true);
    try {
      const { artist, song } = search;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const { data } = await axios(url);
      setLyric(data.lyrics);
      setAlert("");
    } catch (error) {
      setAlert("Song not found");
    }
    setLoading(false);
  };

  return (
    <LyricsContext.Provider value={{ alert, setAlert, searchLyric, lyric, loading }}>
      {children}
    </LyricsContext.Provider>
  );
};

export { LyricsProvider };

export default LyricsContext;
