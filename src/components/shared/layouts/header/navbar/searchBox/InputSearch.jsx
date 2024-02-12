import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchIcon } from "../../../../../shared/UI/Icons";
import { showDropDown } from "../../../../../../redux/searchDropDown/DropDownIndex";

const InputSearch = ({ classes }) => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-start w-full">
      <SearchIcon className="absolute w-5 h-5 mr-4 text-neutral-500" />
      <input
        type="text"
        className={`bg-neutral-100 rounded-lg border-2 border-neutral-100  text-sm font-light outline-none w-full px-10 py-3 ${classes}`}
        placeholder="جستجو"
        onClick={() => dispatch(showDropDown())}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default InputSearch;
