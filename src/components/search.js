import React from "react";
import {FormControl} from "react-bootstrap";

function Search({searchByProductName}) {
  return <FormControl className={'mb-3'}
    placeholder="Пошук"
    aria-label="Search"
    onKeyUp={ e => searchByProductName( e.currentTarget.value.trim().toLowerCase())}
/>
}

export default Search;