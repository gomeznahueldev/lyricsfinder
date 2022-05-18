import { useTranslation } from "react-i18next";
import Alert from "../Alert/Alert";
import Form from "../Form/Form";
import useLyrics from "../../hooks/useLyrics";
import Lyric from "../Lyric/Lyric";
import ar from "../../assets/images/argentina.png";
import us from "../../assets/images/reino-unido.png";

const AppLetras = () => {
  const { alert, lyric, loading } = useLyrics();
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <header>
        <h1>{t("appName")}</h1>
        <p>{t("description")}</p>
        <div className="btn-lang">
          <img src={us} alt="ingles" onClick={() => i18n.changeLanguage("en")} className="btn-lang__img" />
          <img src={ar} alt="español" onClick={() => i18n.changeLanguage("es")} className="btn-lang__img" />
        </div>
      </header>
      <Form />
      <main>
        {alert ? (<Alert>{alert}</Alert>) : 
        lyric ? (<Lyric />) : 
        loading ? <div className="loading">Loading...</div> :
        (<p className="text-center">{t("songNotFound")}</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
