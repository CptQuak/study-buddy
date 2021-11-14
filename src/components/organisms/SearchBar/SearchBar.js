import React from 'react';
import { useState } from 'react/cjs/react.development';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchInput,
  SearchInputWrapper,
  SearchContent,
} from './SearchBar.styled';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchInputWrapper>
        <SearchInput
          onChange={handleInputChange}
          value={query}
          active={query.length > 2 ? true : false}
        />
        {query.length > 2 && <SearchContent>asd</SearchContent>}
      </SearchInputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
