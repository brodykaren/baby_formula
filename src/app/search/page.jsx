"use client"
import { useRef, useState } from "react"

export default () => {
    const searchref = useRef (null)
    const handlessearchresults = async () => { 
        const search = searchref.current.value
        alert(search)
    }
    return (
   <div>
   <div> 

<div>
        <h1 className="confirmation-title">Baby Formula Application</h1>
      </div>
      <div>
        <div className="search-intro">
          <h2 class="search-page">Confirmation</h2>
        </div>
        </div>
     
</div>
     
     <textarea 
     placeholder="search your baby formula"
     ref={searchref}
     /> 
     <div>
        <button onClick={handlessearchresults} className="click">Click</button>

      </div>
      
        <div>
    </div>
      <div className="homepage-images">
        <div className="homepage-images-img">
         <img src="formulapic1.jpeg" alt="" /> 
        </div>

        <div>
          <p></p>

        </div> 

</div> 
</div>
    )
}
