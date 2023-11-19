import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req : NextRequest) {
    const body = await req.json();

    if (body.message !== '') {
        const addChat = await prisma.chats.create({
            data : {
                message : body.message,
                user : body.user
            },
        })
        if (addChat.message !== '') return NextResponse.json({data : addChat}, {status : 200});
        else return NextResponse.json({data : addChat},{status : 404});
    }
    return NextResponse.json({data : []},{status : 404});
        
}