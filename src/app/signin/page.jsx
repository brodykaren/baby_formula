"use client";
import { useRef } from "react";

export default () => {
    const signinemailref = useRef(null);
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
        <div className="container">
            <div>
                <h2>Please Sign In Before Searching your Baby Formula</h2>
            </div>
            <div className="signin-images">
                <div className="signin-images-img">
                    <img src="/app-pics/signin-pic.jpeg" alt="" />
                </div>


            </div>
            <div>
                <div>
                    <div>
                        <label htmlFor="">email</label>
                        <input ref={signinemailref} type="text" />
                    </div>
                    <div>
                        <button onClick={handlesubmitsignin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>

    );
}