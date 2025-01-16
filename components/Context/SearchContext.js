"use client";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedQuery = localStorage.getItem("searchQuery");
    if (savedQuery) {
      setSearchQuery(savedQuery);
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);

    // Clear localStorage right away if you want to remove it immediately
    setTimeout(()=>{
      localStorage.removeItem(searchQuery);
    },2000)
   
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
