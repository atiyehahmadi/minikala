import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputSearch from "./InputSearch";
import LastSearchItems from "./SearchItem/LastSearchItems";
import PopularSearchItems from "././SearchItem/PopularSearchItems";
import searchBoxImg from "../../../../../../assets/images/searchbox/1.webp";
import { hiddenDropDown } from "../../../../../../redux/searchDropDown/DropDownIndex";

export const SearchValueContext = React.createContext();
const SearchDropDown = () => {
  const [showLastsearches, setShowLastsearches] = useState(true);
  const [searchItemBoxText, setSearchItemBoxText] = useState("هودی صورتی");
  const toggleDropDown = useSelector((state) => state.toggleDropDown);
  const dispatch = useDispatch();
  const SearchDropDownRef = useRef();
  const checkIfClickedOutside = (event) => {
    if (
      toggleDropDown.dropDownState &&
      SearchDropDownRef.current &&
      !SearchDropDownRef.current.contains(event.target)
    ) {
      dispatch(hiddenDropDown());
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleDropDown.dropDownState]);
  return (
    <SearchValueContext.Provider
      value={{ searchItemBoxText, setSearchItemBoxText }}
    >
      <div
        className="absolute z-10 w-full bg-white border rounded-lg shadow-md border-neutral-200"
        ref={SearchDropDownRef}
      >
        <InputSearch classes="rounded-b-none bg-white border-none" />
        <div className="mx-4">
          <div className="py-4 border-t border-t-blue-400">
            <img src={searchBoxImg} alt="" className="w-full rounded-lg" />
          </div>
          {showLastsearches && (
            <LastSearchItems
              textvalue={searchItemBoxText}
              setShowLastsearches={setShowLastsearches}
            />
          )}
          <PopularSearchItems setShowLastsearches={setShowLastsearches} />
        </div>
      </div>
    </SearchValueContext.Provider>
  );
};

export default SearchDropDown;
