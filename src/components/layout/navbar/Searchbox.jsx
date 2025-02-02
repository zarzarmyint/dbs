import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import './Searchbox.css';

const SearchBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleSearch = () => {
        if (isExpanded) {
            setSearchQuery('');
        }
        setIsExpanded(!isExpanded);
    };


    return <div className="search-container">
        <div className={`search-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <input
                type="text"
                className={`search-input ${isExpanded ? 'visible' : ''}`}
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}

                disabled={!isExpanded}
            />
            <button
                className="search-button"
                onClick={toggleSearch}
                aria-label={isExpanded ? 'Close search' : 'Open search'}
            >
                {isExpanded ? (
                    <IoClose size={20} color="#6b7280" />
                ) : (
                    <FaSearch size={20} color="#6b7280" />
                )}
            </button>
        </div>
        {isLoading && (
            <div className="loading-spinner">
                <div className="spinner" />
            </div>
        )}
    </div>
}
export default SearchBox;