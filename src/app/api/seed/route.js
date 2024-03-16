import { NextResponse } from "next/server";
import { prisma } from "../mongo";

export async function GET(request) {
  await prisma.participante.deleteMany();

  const seedParticipantes = await prisma.participante.createMany({
    data: [
      { username: "test1", email: "test1@prisma.io", avatar: "132132s45d8err" },
      { username: "test2", email: "test2@prisma.io", avatar: "13232s45d8err" },
      { username: "test3", email: "test3@prisma.io", avatar: "1332s45d8err" },
      { username: "test4", email: "test4@prisma.io", avatar: "13212132s45d8err" },
      { username: "test5", email: "test5@prisma.io", avatar: "132s45d8err" },
      { username: "test6", email: "test6@prisma.io", avatar: "13592132s45d8err" },
      { username: "test7", email: "test7@prisma.io", avatar: "13215532s45d8err" },
      { username: "test8", email: "test8@prisma.io", avatar: "13213258s45d8err" },
      { username: "test9", email: "test9@prisma.io", avatar: "132132s4575d8err" },
      { username: "test10", email: "test10@prisma.io", avatar: "132132s4455d8err" },
      { username: "test11", email: "test11@prisma.io", avatar: "132132s45d18err" },
      { username: "test12", email: "test12@prisma.io", avatar: "132132s4500d8err" },
      { username: "test13", email: "test13@prisma.io", avatar: "132132s4501d8err" },
      { username: "test14", email: "test14@prisma.io", avatar: "132132s45d028err" },
      { username: "test15", email: "test15@prisma.io", avatar: "132132s45d803err" },
      { username: "test16", email: "test16@prisma.io", avatar: "132132s45d8e07rr" },
      { username: "test17", email: "test17@prisma.io", avatar: "132132s45d8er08r" },
      { username: "test18", email: "test18@prisma.io", avatar: "132132s45d8e09rr" },
      { username: "test19", email: "test19@prisma.io", avatar: "132132s45d8e100rr" },
      { username: "test20", email: "test20@prisma.io", avatar: "132132s45d8121err" },
      { username: "test21", email: "test21@prisma.io", avatar: "132132s45d8e212rr" },
      { username: "test22", email: "test22@prisma.io", avatar: "132132s45d8er222r" },
      { username: "test23", email: "test23@prisma.io", avatar: "132132s45d8er258r" },
      { username: "test24", email: "test24@prisma.io", avatar: "132132s45d8er279r" },
      { username: "test25", email: "test25@prisma.io", avatar: "132132s45d8er888r" },
    ],
  });
  return NextResponse.json({ message: "Seed ejecutado" });
}
