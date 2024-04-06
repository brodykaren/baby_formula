import { NextResponse } from "next/server"
import prisma from "@/confg/prisma"

export const GET = async () => {
    try {
        const user = await prisma.search.findMany({
            select: {
                id: true,
                text: true,
                createdAt: true,
            }
        })
        return NextResponse.json({
            success: true,
            data: user
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            data: null
        })
    }

}

export const POST = async (req) => {
    try {
        const body = await req.json()
        const placesapiurl = "https://places.googleapis.com/v1/places:searchText"
        const placesapikey = process.env.GOOGLE_PLACES_API_KEY
        const placesfieldmask = "*"

        const placesresults = await fetch(placesapiurl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-Goog-Api-Key": "AIzaSyC85U5e3XdMBUfNQ_993Lh8v7cw8jDXk2A",
                "X-Goog-FieldMask": "*",
            },
            body: JSON.stringify({
                "textQuery": body.search.text,
                "languageCode": "en"
            })
        })

        const placeResultsJSON = await placesresults.json();

        console.log("Body: ", body);

        console.log("Place results: ", placeResultsJSON);

        if(placeResultsJSON.error) {
            throw new Error("Error with places API")
        }

        const search = await prisma.search.create({

            data: {

                text: body.search.text,
                user: {
                    connect: {
                        id: body.user.id
                    }
                }

            },
            select: {
                id: true,
                text: true,
                createdAt: true,
            }
        })
        return NextResponse.json({
            success: true,
            data: placeResultsJSON,
        })
    } catch (error) {
        console.log("Eerror with search API: ", error)
        return NextResponse.json({
            success: false,
            data: []
        })
    }

}