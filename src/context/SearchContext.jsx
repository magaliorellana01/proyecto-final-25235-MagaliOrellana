import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const val = e.target.value || "";
        setQuery(val);
        if (val.trim().length >= 4) {
            setSearchTerm(val);
        } else {
            setSearchTerm("");
        }
    };

    const submitSearch = (value) => {
        const val = typeof value === 'string' ? value : query;
        if (val && val.trim().length >= 4) {
            setSearchTerm(val.trim());
            return true;
        }
        return false;
    };

    const clearSearch = () => {
        setQuery("");
        setSearchTerm("");
    };

    return (
        <SearchContext.Provider value={{ query, searchTerm, handleSearch, clearSearch, submitSearch }}>
            {children}
        </SearchContext.Provider>
    );
};