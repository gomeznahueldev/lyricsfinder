import { useState } from "react";
import { useTranslation } from "react-i18next";
import useLyrics from "../../hooks/useLyrics";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Formulario = () => {
  const { alert, setAlert, searchLyric } = useLyrics();
  const [t] = useTranslation("global");

  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.artist === "" || search.song === "") {
      setAlert(t("inputEmpty"));
      return;
    }
    searchLyric(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>{t("title")}</legend>
      <div className="form-grid">
        <div>
          <label>{t("labelArtist")}</label>
          <Input autoComplete="off" type="text" name="artist" placeholder={t("inputArtist")} onChange={(e) => setSearch({ ...search, artist: e.target.value })} />
        </div>
        <div>
          <label>{t("labelSong")}</label>
          <Input autoComplete="off" type="text" name="song" placeholder={t("inputSong")} onChange={(e) => setSearch({ ...search, song: e.target.value })} />
        </div>
        <Button type="submit" value={t("buttonSearch")} textButton={t("buttonSearch")} disabled={alert ? true : false} />
      </div>
    </form>
  );
};

export default Formulario;
