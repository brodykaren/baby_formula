"use client"
import { useState,useRef } from "react"

export default () => {
    return (
        <header className="homepage-header">
        <div>
          <button>menu</button>
        </div>
        <div>
          logo
        </div>
        <div>
          <div>
            search
          </div>
          <div>
            <input type="seach" />
          </div>
        </div>
      </header>  
    )
}