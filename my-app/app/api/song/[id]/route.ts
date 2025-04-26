import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
   const id = parseInt(params.id, 10);

   const song = await prisma.song.findUnique({
      where: { id },
   });

   if (!song) {
      return NextResponse.json({ error: "Song not found" }, { status: 404 });
   }

   return NextResponse.json(song);
}
