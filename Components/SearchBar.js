import React, {useState} from "react";

function SearchBar ({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = ( ) => {
        onSearch (searchTerm);
    }
}
