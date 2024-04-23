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
          <h2>Select Your Baby Formula with Location</h2>
        </div>
        <div className="search-placeholder">
      <textarea
        placeholder="search your baby formula"
        ref={searchref}
      />
      <div className="button-search">
        <button onClick={handlessearchresults} className="click">Here</button>

        </div>

      </div>
      </div>

      <div className="searchpage-images">
        <div className="searchpage-images-img">
          <img src="/app-pics/search-img.jpeg" alt="" />
        </div>

        <div className="nutritional-info">
          <h3> Nutritional Information</h3>
          <p>The way you decide to feed your baby will have an impact on you both. The human milk that nature has designed for newborns is breast milk. 
            It remains the best option when compared to all other infant formulas ever created. If you are unable to obtain it, 
            your child can still get enough nutrients from commercial formulas that have been fortified with iron. 
            Infant formulas have enough protein, calories, fat, vitamins, and minerals to support the healthy growth of your beautiful baby.</p>

        </div>

      </div>
      </div>
    </div>
  )
}
