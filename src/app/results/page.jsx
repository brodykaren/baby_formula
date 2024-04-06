"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default () => {
    const searchParams = useSearchParams();
    const [results, setResults] = useState([])
    const [hasAuth, setHasAuth] = useState(true)
    useEffect(() => {
        const getresults = async () => {
            const storedUser = localStorage.getItem("user");
            if(!storedUser) {
                setHasAuth(false)
                return;
            }
            const submitData = {
                user: JSON.parse(storedUser),
                search: {
                    text: searchParams.get("q")
                }
            }
            const res = await fetch(`api/search`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(submitData)
            })

            console.log("Res: ", res)

            const resJSON = await res.json();
            console.log(resJSON)
            setResults(resJSON?.data?.places || []);
        }
        getresults()
    }, [])

    const handleConfirmation = (result) => {
        const resultsData = {
            name: result.displayName.text
        }
        location.href = `/confirmation?name=${result.displayName.text}`
    }

    const renderResults = () => {
        console.log("Results: ", results);

        return results.map((result) => {
            return (
                <div key={result.name} className="results-data">
                    <div>
                        <h4>{result.displayName.text}</h4>
                    </div>
                    <div>
                        <h5>Location: {result.formattedAddress}</h5>
                    </div>
                    <div>
                        {result?.photos?.length > 0 &&
                        <div>
                            <img src={`https:${result?.photos[0]?.authorAttributions[0]?.photoUri}`} alt="" />
                        </div>
                        }
                    </div>
                    <div>
                        <button onClick={() => handleConfirmation(result)}>Order</button>
                    </div>
                </div>
            )
        })
       
    }
    if(!hasAuth) {
        return (
            <div>
                <header>
                    <h2>Please Sign In</h2>
                </header>
                <div>
                    <Link href="/">Go Back</Link>
                </div>
            </div>
        )
    }
    // if(!searchParams.get("q")) {
    //     return (
    //         <div>
    //             <header>
    //                 <h2>No Search Term Found</h2>
    //             </header>
    //             <div>
    //                 <Link href="/search">Back To Search</Link>
    //             </div>
    //         </div>
    //     )
    // }
     return (
        <div>
            <header>
                <h2>
                    Results
                </h2>
            </header>

            <div>
                {renderResults()}

            </div>
        </div>
    )
}
