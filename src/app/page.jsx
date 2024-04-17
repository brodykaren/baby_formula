"use client"
import Link from "next/link";
import React, { useState, useRef } from "react";

export default function Home() {
  const signinemailref = useRef(null)
  const [showsignin, setshowsignin] = useState(false)
  const handlesubmitsignin = async () => {
    try {
      const res = await fetch("/api/user/sign-in", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          email: signinemailref.current.value
        })

      })
      const data = await res.json()
      localStorage.setItem("user", JSON.stringify(data.data))
      location.href = "/search"
    }
    catch (error) {
      console.log(error)
      alert("error please try again")
    }
  }
  return (
    <div>

      <div>
        <h1 className="homepage-title"></h1>
      </div>
      <div>
        <div className="homepage-introduction">
          <h2>Buy Baby Formula Should be Easy!</h2>
        </div>
        <div className="homepage-p">
          <p>The Baby Formula App will help you conduct the necessary searches, and with just one click, you'll be able to control the necessary searches and enable you to make a timely purchase.
            Parents who have struggled to get their baby's formula in the past won't have to worry about driving to another supermarket in hopes of finding it.
            You may find and purchase the infant formula that our babies require by using our App.Purchasing your baby's formula will be easy when you have our help.</p>
        </div>
      </div>

      <div className="homepage-images">
        <div className="homepage-images-img">
          <img src="/app-pics/apic-2.png" alt="" />
        </div>
        <div className="homepage-images-img">
          <img src="/app-pics/apic-3.png" alt="" />
        </div>
        <div className="homepage-images-img">
          <img src="/app-pics/apic-4.png" alt="" />
        </div>
        <div className="homepage-images-img">
          <img src="/app-pics/apic-5.png" alt="" />
        </div>
        <div className="homepage-images-img">
          <img src="/app-pics/apic-6.png" alt="" />
        </div>
        <div className="homepage-images-img">
          <img src="/app-pics/apic-7.png" alt="" />
        </div>
      </div>

      <div className="homepage-signin">
        <Link href="/signin" className="sign-in">Sign In</Link>
      </div>
      <dialog open={showsignin}>
        <div>

          <label htmlFor="">email</label>
          <input ref={signinemailref} type="text" />
        </div>
        <div>
          <button onClick={handlesubmitsignin}>submit</button>
        </div>
      </dialog>
    </div>
  );
}
