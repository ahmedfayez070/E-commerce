"use client";

import { SearchContext } from "@/context/SearchContext";
import { useContext } from "react";

const SearchBar = () => {
  const { setSearchName } = useContext(SearchContext);

  const handleSubmit = (formData) => {
    const searchName = formData.get("searchName");
    setSearchName(searchName);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <form
        className="bg-gray-100 p-5 flex gap-5 rounded-lg"
        action={handleSubmit}
      >
        <input
          type="text"
          className="border p-2 rounded-lg focus:outline-none w-2/3 sm:w-1/4"
          placeholder="Search By Name"
          name="searchName"
        />
        <button
          type="submit"
          className="bg-secondary py-2 px-5 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
