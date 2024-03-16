import { prisma } from "@/app/api/mongo";
import { NextResponse, NextRequest } from "next/server";


  export async function DELETE(request,segments) {
    const {id}=await segments.params;
    if(!id) return NextResponse.json({ error:'no colocaste un id valido' },{status:400});

    try {

        const registroDelete=await prisma.usuario.delete({
            where:{
                id:id
            }
        })
        const {password,...rest}=registroDelete;
        return NextResponse.json({ res:'Usuario eliminado correctamente',rest });

    } catch (error) {
        console.log(error);
        return NextResponse.json({error:'El usuario no existe' },{status:500});
    }
    
  }
  