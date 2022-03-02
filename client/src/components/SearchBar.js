// import React from 'react'

import {Button,Form} from "react-bootstrap"
function SearchBar () {
    return(
        <div className="d-flex justify-content-around">
      <Form.Control type="text" placeholder="Search for movies"/>
      <Button variant="primary">Search</Button>
      <Button variant="success">Refresh</Button>
        </div>
    )
}

export default SearchBar