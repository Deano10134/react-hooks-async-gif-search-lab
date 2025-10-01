import React from "react";

function GifList({ gifs = [] }) {
  if (!Array.isArray(gifs) || gifs.length === 0) {
    return <div>No gifs</div>;
  }

  return (
    <ul>
      {gifs.map((gif) => {
        const url =
          gif?.images?.fixed_width?.url ||
          gif?.images?.original?.url ||
          gif?.url ||
          "";
        return (
          <li key={gif.id}>
            <img src={url} alt={gif.title || "gif"} />
          </li>
        );
      })}
    </ul>
  );
}

export default GifList;
