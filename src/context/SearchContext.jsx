import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const val = e.target.value || "";
        // Only apply search when user typed at least 4 characters.
        // If fewer than 4, clear the search to show all products.
        if (val.trim().length >= 4) {
            setSearchTerm(val);
        } else {
            setSearchTerm("");
        }
    };

    return (
        <SearchContext.Provider value={{ searchTerm, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};