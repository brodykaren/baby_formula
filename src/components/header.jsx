"use client"
import Link from "next/link";
import { useState, useRef } from "react"

export default () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      location.href = `/results?q=${encodeURIComponent(e.target.value)}`
    }
  }
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="homepage-header">
      <div>
        <button onClick={handleShowMenu}>menu</button>
      </div>
      <dialog open={showMenu}>
        <Link href="/">
          Home
        </Link>
        <Link href="/search">
          Shop
        </Link>
        <Link href="/signin">
          Signin
        </Link>
      </dialog>
      <div className="header-logo">
        <img src="/app-pics/logo-1.jpg" alt="" />
      </div>
      <div>
        <div>
          search
        </div>
        <div>
          <input
            onKeyDown={handleSearch}
            type="seach"
          />
        </div>
      </div>
    </header>
  )
}