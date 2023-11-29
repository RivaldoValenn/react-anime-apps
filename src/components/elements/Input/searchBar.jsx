import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import { searchData } from "../../../services/data";
import Results from "../../results";

const SearchBar = ({ onInputChange, placeholder }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearch = async () => {
    const q = inputValue;
    try {
      const query = await searchData(q);
      setSearchResults(query);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setSearchResults([]); 
    }
  };

  const onClear = () => {
    inputRef.current.value = "";
    setInputValue("");
    setSearchResults([]); // Clear search results
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <>
      <div className="search relative right-0 w-[90%]">
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>
          <i className="ph ph-magnifying-glass absolute left-3 top-2 text-white text-xl opacity-50"></i>
        </button>
        {inputValue && (
          <button onClick={onClear}>
            <i className="ph ph-x absolute right-3 top-2 text-white text-xl opacity-50"></i>
          </button>
        )}
      </div>
      {Array.isArray(searchResults) && searchResults.map((result) => (
        <Results key={result.mal_id} results={result} />
      ))}
    </>
  );
};

export default SearchBar;

