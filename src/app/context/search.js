'use client';

import { createContext, useContext, useState } from "react";

//CREATE CONTEXT
export const SearchContext = createContext();

//Provider
export const SearchContextProvider = ({children}) => {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <SearchContext.Provider value={{searchActive, setSearchActive}}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => useContext(SearchContext);