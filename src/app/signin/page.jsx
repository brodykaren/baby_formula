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
        <div className="container-signin">
            <div className="signin-title">
                <h2>Before you begin searching for your baby formula, please "Sign in"</h2>
            </div>
            <div className="signin-images">
                <div className="signin-img">
                    <img src="" alt="" />
                </div>


            </div>
            <div>
                <div>
                    <div className="signin-box">
                        <label htmlFor="">Email</label>
                        <input ref={signinemailref} type="text" />
                    </div>
                    <div className="singin-box">
                        <button onClick={handlesubmitsignin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>

    );
}