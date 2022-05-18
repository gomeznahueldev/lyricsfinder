import { LyricsProvider } from "./context/LyricsProvider";
import LyricsApp from "./components/LyricsApp/LyricsApp";
import "./App.css";

function App() {
  return (
    <LyricsProvider>
      <LyricsApp />;
    </LyricsProvider>
  );
}

export default App;
