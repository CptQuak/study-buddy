import { useStudents } from 'hooks/useStudents';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchInput,
  SearchInputWrapper,
  SearchContent,
  SearchResultsItem,
} from './SearchBar.styled';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();
  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchInputWrapper {...getComboboxProps()}>
        <SearchInput
          {...getInputProps()}
          name="Search"
          id="Search"
          placeholder="Search students"
        />
        <SearchContent
          isVisible={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
        >
          {isOpen &&
            matchingStudents.map((student, index) => (
              <SearchResultsItem
                isH
                ighlighted={highlightedIndex === index}
                {...getItemProps({ item: student, index })}
                key={student.id}
              >
                {student.name}
              </SearchResultsItem>
            ))}
        </SearchContent>
      </SearchInputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
