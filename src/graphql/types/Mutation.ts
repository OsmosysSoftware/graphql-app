import prisma  from "../../utils/PrismaClient.js";
import builder from "../../utils/schemaBuilder.js";
import { AuthorInput, BookInput, genreInput } from "./input.js";

const mutation=builder.mutationType({
    fields:t=>({
        addBook:t.prismaField({
            type:"Book",
            args:{
                book:t.arg({type:BookInput,required:true}),
                authors:t.arg({type:[AuthorInput],required:true}),
                genres:t.arg({type:[genreInput]}),
            },
            
            
            resolve:async (_,__,args)=>{
                const {name:bookName,description:bookDescription}=args.book;
                const {genres,authors}=args;
                
                return await prisma.book.create({
                   data:{
                    name:bookName,
                    description:bookDescription,
                    authors:{
                       create:authors.map(_author=>{
                        return {
                            author:{
                                connectOrCreate:{
                                    where:{
                                        name:_author.name
                                    },
                                    create:{
                                        name:_author.name,
                                        email:_author.email
                                    }
                                }
                            }
                        }

                       } )
                    },
                    genres:{
                        create:genres?.map(_genre=>{
                           return {
                            genre:{
                                connectOrCreate:{
                                    where:{
                                        name:_genre.name
                                    },
                                    create:{
                                        name:_genre.name
                                    }
                                }
                            }
                           }
                        })

                    }
                   }

                })
                

            }
        })
    })
})
export default mutation;