 import { PrismaClient } from "@prisma/client";
 const PrismaClientSingleton = () =>{
    return new PrismaClient();
 }
 type PrismaClientSingleton = ReturnType < typeof PrismaClientSingleton>;

 const glonalForPrisma = globalThis as unknown as {
    prisma:PrismaClientSingleton | undefined;
 }
 const  prismadb = glonalForPrisma.prisma ?? PrismaClientSingleton();
 export default prismadb;

if (process.env.NODE_ENV !=="production") glonalForPrisma.prisma = prismadb;