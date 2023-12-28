import React, {useState} from 'react';

function SearchBar(){
    const[showSearch, SetShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
      };
    
}