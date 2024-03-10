import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { action, computed } from 'mobx'
import { useLocalObservable, observer } from 'mobx-react-lite';

import './searchbar.styl'

const Searchbar = observer(() => {

    const search = useLocalObservable(() => ({ value: "" }));

    const clearInput = action(() => search.value = "");

    const handleChange = action((event) => {
        if (search.value.length <= 30)
            search.value = event.target.value;
    });

    const isInputing = computed(() => search.value !== "");

    return (
        <div className="searchbar">
            <input value={search.value} id="search-input"
                onChange={handleChange} />
            {
                (isInputing.get())
                    ?
                    <button className="cancel-button cancel" onClick={clearInput}>
                        <FontAwesomeIcon className="search-cancel-icon" icon={faTimes} color="black" />
                        <FontAwesomeIcon className="search-icon" icon={faSearch} color="black" />
                    </button>
                    :
                    <button className="search-button" disabled>
                        <FontAwesomeIcon icon={faSearch} color="black" />
                    </button>
            }
        </div>
    );
});

export default Searchbar;