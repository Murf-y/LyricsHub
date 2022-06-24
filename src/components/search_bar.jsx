import React from 'react'
import Icon from './icon'
import "../styles/search_bar.css"

function SearchBar({onChange, onSubmit}) {
  return (
    <div className="search-bar">
          <form className="inner-search-bar" onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a Song / Artist name" className="search-bar-input" onChange={(e)=> onChange(e)}/>
            <Icon 
              src="https://cdn.lordicon.com/msoeawqm.json"
              trigger="hover"
              delay="0"
              colors="primary:#3080e8,secondary:#104891"
              stroke="100"
              className="search-bar-icon"
              onclick={onSubmit}
            />
          </form>
      </div>
  )
}

export default SearchBar