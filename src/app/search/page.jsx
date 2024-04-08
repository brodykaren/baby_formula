"use client"
import { useRef, useState } from "react"

export default () => {
  const searchref = useRef(null)
  const handlessearchresults = async () => {
    const search = searchref.current.value
    location.href = `/results?q=${encodeURIComponent(search)}`
  }
  return (
    <div>
      <div>
\ 
      <div>
        <h1 className="homepage-title"></h1>
      </div>
        <div>
          <h1 className="search-title">Locating your Baby Formula Easily</h1>
        </div>
        <div>
          {/* <div className="search-intro">
            <h2 className="search-page"></h2>
          </div> */}
        </div>
      </div>
      <div className="searchpage-main">

      <div className="searchpage-search">
        <div>
          <h2>Select Your Baby Formula</h2>
        </div>
      <textarea
        placeholder="search your baby formula"
        ref={searchref}
      />
      <div>
        <button onClick={handlessearchresults} className="click">Here</button>

      </div>
      </div>

      <div className="searchpage-images">
        <div className="searchpage-images-img">
          <img src="/app-pics/search-img.jpeg" alt="" />
        </div>

        <div>
          <p></p>

        </div>

      </div>
      </div>
    </div>
  )
}
