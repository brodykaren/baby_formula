import { NextResponse } from "next/server"
import prisma from "@/confg/prisma"

export const GET = async () => {
try {
const user = await prisma.user.findMany({
    select:{
        id: true,
        email:true,
        searches:true,
        purchases:true,
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

export const POST = async () => {
    try {
    const user = await prisma.user.create({
        data: {
         email:'test@test.com'

        }, 
            select:{
            id: true,
            email:true
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