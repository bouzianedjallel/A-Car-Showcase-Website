'use client'

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {

  const handleSearch = () => {
    console.log("hello")
  }

  const [manufacturer, setManufacturer] = useState("")
  return (
    <form onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
