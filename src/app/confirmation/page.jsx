"use client";

import { nanoid } from "nanoid";
import { useSearchParams } from "next/navigation"
import Link from "next/link";

export const dynamic = "force-dynamic";

export default () => {
  const searchParams = useSearchParams();

  if(!searchParams.get("name")) {
    return (
      <div>
        <header>
          <h2>You must select a product to check out.</h2>
        </header>
        <div>
          <Link href="/search">Search for Products</Link>
        </div>
      </div>
    )
  }
    return (
     <div>
        <div>
        <h1 className="confirmation-title">Order Confirmation</h1>
      </div>
      <div>
        <div className="confirmation-intro">
          <h2 class="confirmation-page">We appreciate you using the Baby Formula App! You can pick up the order at the address listed below.</h2>
        </div>
        </div>
     

      <div className="homepage-images">
        <div className="homepage-images-img">
         <img src="formulapic1.jpeg" alt="" /> 
        </div>

        <div className="confirmation-number">
          <h3>You Purchased from {searchParams.get("name")}</h3>
          <p>Confirmation Number: {nanoid()}</p>

        </div>  
        </div>
        </div>
        )
}
