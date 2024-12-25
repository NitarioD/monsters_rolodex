import React, { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onSearchChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => (
  <form className="search-box">
    <div className="form-group">
      <label htmlFor="name" hidden>
        Monster`&apos;`s Name
      </label>
      <input
        type="search"
        className={className}
        id="name"
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
    </div>
  </form>
);

export default SearchBox;
