import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Observer, useLocalObservable } from 'mobx-react';
import { action } from 'mobx'

import './header.css'

export default function Searchbar() {

    const search = useLocalObservable(() => ({ value: "" }));

    function handleChange(event) {
        search.value = event.target.value;
    }

    return (
        <Observer>
            {
                () => (
                    <div className="searchbar"
                        onMouseLeave={action(() => search.value = "")}>
                        <input value={search.value} id="search-input"
                            onChange={action(handleChange)} />
                        <button id="search-button">
                            <FontAwesomeIcon icon={faSearch} color="black" />
                        </button>
                    </div>
                )
            }
        </Observer>
    );
}