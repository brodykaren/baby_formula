import { NextResponse } from "next/server"
import prisma from "@/confg/prisma"


export const POST = async (req) => {
    try {
        const body=await req.json ()
        const founduser = await prisma.user.findFirst ({
            where: {
                email: body.email

            },
            select:
            {
                id:true,
                email: true,
                searches:true,
                purchases:true,

            }
        })
        if (founduser){
            return NextResponse.json ({
                success: true,
                data: founduser
            })   
        }
    const user = await prisma.user.create({
        data: {
       email:body.email

        }, 
            select:{
                id:true,
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