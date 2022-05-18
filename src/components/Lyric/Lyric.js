import useLyrics from "../../hooks/useLyrics";

const Letra = () => {
  const { lyric, loading } = useLyrics();
  return loading ? "Loading..." : <div className="lyric">{lyric}</div>;
};

export default Letra;
