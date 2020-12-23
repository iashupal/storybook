import React from "react";
import searchIcon from "../../assets/images/icons/search.png";
import "./styles.css";

function Search({
  placeholder,
  variants,
  value,
  onChange,
  name,
}: {
  type: string;
  placeholder: string;
  variants: string;
  value?: string;
  onChange: (text: any) => void;
  name: string;
}) {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder={placeholder}
        className={`search ${variants}`}
        defaultValue={value}
        onChange={onChange}
        name={name}
      />
      <img src={searchIcon} alt="search" />
    </div>
  );
}
export default Search;
