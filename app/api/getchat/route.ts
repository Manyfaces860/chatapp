import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req : NextRequest) {
    const chats = await prisma.chats.findMany();
    return NextResponse.json({data : chats}, {status : 200});
}