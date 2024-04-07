"use client"
import { useState, useRef } from "react";

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
  const handleshowsignin = () => {
    setshowsignin(true)
  }
  return (
    <div>

      <div>
        <h1 className="homepage-title">Baby Formula Application</h1>
      </div>
      <div>
        <div className="homepage-introduction">
          <h2>Introduction</h2>
        </div>
        <div>
          <p>information about the app, add later</p>
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

      <div>
        <button onClick={handleshowsignin} className="sign-in">Sign In</button>
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
