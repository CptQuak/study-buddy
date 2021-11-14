import { useStudents } from 'hooks/useStudents';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchInput,
  SearchInputWrapper,
  SearchContent,
} from './SearchBar.styled';
import debounce from 'lodash.debounce';
const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);
  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
    console.log(matchingStudents);
  }, [searchPhrase]);

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
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
          name="Search"
          id="Search"
        />
        {searchPhrase && matchingStudents.length ? (
          <SearchContent>
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchContent>
        ) : null}
      </SearchInputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
