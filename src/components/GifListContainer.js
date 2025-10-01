import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleSearch(term) {
    setLoading(true);
    fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(term)}&api_key=1B8Mt0eZdnesPC2dWbYsIrMwN02ggSf7&rating=g`)
      .then(r => r.json())
      .then(data => {
        setGifs(data.data.slice(0, 3));
        setLoading(false);
      });
  }

  useEffect(() => {
    handleSearch("dolphin");
  }, []);

  return (
    <>
      <GifSearch onSearch={handleSearch} />
      {loading ? <div>Loading gifs…</div> : <GifList gifs={gifs} />}
    </>
  );
}

export default GifListContainer;

