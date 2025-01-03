import Main from "../../components/Main";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../utilities/AuthContext";
import { searchTrack } from "../../services/SearchService";

const SearchTrack = () => {
  const { userData } = useContext(AuthContext);

  const [trackData, setTrackData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    type: "",
    message: "",
    visible: false,
  });

  const handleSearch = async (values) => {
    setLoading(true);
    try {
      const isrc = values.isrc;
      const accessToken = userData ? userData.accessToken : null;
      const result = await searchTrack(isrc, accessToken);
      setTrackData(result);
    } catch (err) {

      setAlert({
        type: "error",
        message: err.message,
        visible: true,
      });

    } finally {
      setLoading(false);
    }
  };
  const images = trackData && trackData.images ? trackData.images : [];
  return (
    <>
      <Main
        title={"Metadata Search"}
        buttonText={"Buscar"}
        onFinish={handleSearch}
        trackData={trackData}
        images={images}
        loading={loading}
        alert={alert}
        setAlert={setAlert}
      />
    </>
  );
};

export default SearchTrack;
