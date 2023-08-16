import { NextResponse } from "next/server";
import {auth} from '@clerk/nextjs'
import prismadb from "@/lib/prismadb";
export async function POST(req:Request,) {
    try {
        const {userId} = auth();
        const body =  await req.json();
        const { name } = body;

        if(!name){
            return new NextResponse("Name is Required!", {status:400});
        }
        if(!userId){
            return new NextResponse("Unauthorized", {status: 403})
        }

        const store =  await prismadb.store.create({
            data:{
                name,
                userId
            }
        })

        return NextResponse.json(store);
    } catch (error) {
        return new NextResponse("Server Internal Error", {status: 500});
      }
}