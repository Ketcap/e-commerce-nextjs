import { PrismaClient } from ".prisma/client";

export type Context = {
  prisma: PrismaClient
};

const prisma = new PrismaClient();
const createContext = ():Context=>{
  return {
    prisma
  }
}


export const context = createContext();