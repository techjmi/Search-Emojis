import React, { useState } from 'react';
import { Emoji } from '../data/data';
import { Box } from "@mui/material";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter emoji data based on search query
  const filteredEmojis = Emoji.filter(emoji =>
    emoji.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length >= 3
  );

  return (
    <Box>
      <input
        type="text"
        placeholder="Search Emoji by Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Box>
        {filteredEmojis.length === 0 && <p>No Emoji Found</p>}
        {filteredEmojis.map(emoji => (
          <span key={emoji.name} title={emoji.name}>{emoji.emoji}</span>
        ))}
      </Box>
    </Box>
  );
};

export default Search;
