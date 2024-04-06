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
        <div>
            <div>
                <div>
                    <label htmlFor="">email</label>
                    <input ref={signinemailref} type="text" />
                </div>
                <div>
                    <button onClick={handlesubmitsignin}>submit</button>
                </div>
            </div>
        </div>
    )
}