import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { action, autorun } from 'mobx'
import { useLocalObservable, observer } from 'mobx-react-lite';

import './searchbar.css'

const Searchbar = observer(() => {

    const search = useLocalObservable(() => ({ value: "" }));

    const clearInput = action(() => search.value = "");

    const handleChange = action((event) => search.value = event.target.value);

    return (
        <div className="searchbar">
            <input value={search.value} id="search-input"
                onChange={handleChange} />
            {
                (search.value !== "")
                    ?
                    <button className="cancel-button cancel" onClick={clearInput}>
                        <FontAwesomeIcon className="search-cancel-icon" icon={faTimes} color="black" />
                        <FontAwesomeIcon className="search-icon" icon={faSearch} color="black" />
                    </button>
                    :
                    <button className="search-button" disabled>
                        <FontAwesomeIcon  icon={faSearch} color="black" />
                    </button>
            }
        </div>
    );
});

export default Searchbar;