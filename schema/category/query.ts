import { list, queryField } from "nexus";

export const categories = queryField("categories",{
  type: list("Category"),
  resolve:async (_,args,ctx)=>{
    return ctx.prisma.category.findMany();
  }
})
