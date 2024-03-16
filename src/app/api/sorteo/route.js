
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../mongo/index";


export async function GET(request) {

  const sorteoData = await prisma.sorteo.findMany();

  return NextResponse.json({ sorteoData });

}

export async function POST(request) {
    const {name,description,startDate,image, winner} = await request.json();

    const sorteoData={
        name,
        description,
        startDate,
        image,
        winner
    }

    try {
        const sorteoPost = await prisma.sorteo.create({
            data:sorteoData
        });
        
        return NextResponse.json({ post:true,sorteoPost });
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:'Error al crear el sorteo'},{status:400});
    }
  }

