import React, { useState } from "react";

function GifSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Search for gifs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;