import React, {useState} from 'react';

function SearchBar(){
    const[showSearch, SetShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
      };
      return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleSearchClick} style={{ fontSize: '24px' }}>
            🔍
          </button>
          {showSearch && (
            <div style={{ marginTop: '20px' }}>
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: '8px',
                  fontSize: '16px',
                  width: '200px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
          )}
        </div>
      );
    }
    
    export default SearchBar;
