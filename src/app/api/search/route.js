import { NextResponse } from "next/server"
import prisma from "@/confg/prisma"

export const GET = async () => {
try {
const user = await prisma.search.findMany({
    select:{
        id:true,
        text:true,
        createdAt:true,
    }
})
return NextResponse.json ({
    success: true,
    data: user
})
} catch (error) { 
    console.log (error)
    return NextResponse.json({
        success: false, 
        data: null
    })
} 

}

export const POST = async (req) => {
    try { 
        const placesapiurl = "https://places.googleapis.com/v1/places:searchText"
        const placesapikey = process.env.GOOGLE_PLACES_API_KEY
        const placesfieldmask = "*"
        
        const body = await req.json ()
    const search = await prisma.search.create({

        data: {
        
            text: body.search.text,
            user: {
                connect:{
                    id: body.user.id
                }
            }

        }, 
            select:{
            id: true,
            text:true, 
            createdAt: true,
        }
    })
    return NextResponse.json ({
        success: true,
        data: search,
    })
    } catch (error) { 
        console.log (error)
        return NextResponse.json({
            success: false, 
            data: null
        })
    } 
    
    }