import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../mongo";


export async function GET(request,segments) {

    const {id}=await segments.params;
    if(!id) return NextResponse.json({ error:'no enviaste un id' },{status:400});

    try {
        const sorteoGetOne = await prisma.sorteo.findUnique({
        where: {
            id: id,
        },
        });
        return NextResponse.json({ sorteoGetOne });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error:'error al buscar el id' },{status:500});
    }
}


export async function PATCH(request,segments) {

    const {id}=await segments.params;
    if(!id) return NextResponse.json({ error:'no enviaste un id' },{status:400});

    const {name,description,startDate,status,image}=await request.json();
    const sorteoBody={
        name,
        description,
        startDate,
        status,
        image
    }

    try {

        const sorteoPatch=await prisma.sorteo.update({
            where:{
                id:id
            },
            data:sorteoBody
        })
        return NextResponse.json({sorteoPatch });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:'ocurrio un error al momento de actualizar' },{status:500});
    }


  }

  export async function DELETE(request,segments) {
    const {id}=await segments.params;
    if(!id) return NextResponse.json({ error:'no enviaste un id' },{status:400});

    try {

        const sorteoDelete=await prisma.sorteo.delete({
            where:{
                id:id
            }
        })
        return NextResponse.json({ sorteoDelete});

    } catch (error) {
        console.log(error);
        return NextResponse.json({error:'ocurrio un error al momento de eliminar de bd' },{status:500});
    }
    
  }
  