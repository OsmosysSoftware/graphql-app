import prisma  from "../../utils/PrismaClient.js";
import builder from "../../utils/schemaBuilder.js";

const mutation=builder.mutationType({
    fields:t=>({
        addBook:t.prismaField({
            type:"Book",
            args:{
                name:t.arg.string({required:true}),
                authors:t.arg.stringList({required:true}),
                description:t.arg.string()
            },
            
            
            resolve:async (_,__,args)=>{
                return await prisma.book.create({
                   data:{
                    name:args.name,
                    description:args.description,
                    authors:{
                       create:args.authors.map(author=>{
                        return {
                            author:{
                                connectOrCreate:{
                                    where:{
                                        name:author
                                    },
                                    create:{
                                        name:author
                                    }
                                }
                            }
                        }

                       } )
                    }
                   }

                })
                

            }
        })
    })
})
export default mutation;