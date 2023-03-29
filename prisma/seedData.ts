export const books=[{
    name:"Book 1",
    description:"Book 1 description",
},
{
    name:"Book 2",
    
},
{
    name:"Book 3",
    description:"Book 3 description"
},
{
    name:"Book 4",
    description:"Book 4 description"
},
{
    name:"Book 5",
    description:"Book 5 description"
},
{
    name:"Book 6",
    
},
{
    name:"Book 7",
    description:"Book 7 description"
}
]
export const authors=[{
    name:"Author A",
    email:"authorA@example.com",


},
{
    name:"Author B",
    email:"authorB@example.com",
},
{
    name:"Author C",
    email:"authorC@example.com",
},
{
    name:"Author D",
    email:"authorD@example.com",
},
{
    name:"Author E",
    
},
{
    name:"Author F",
    email:"authorF@example.com",
}

]
export const genres=[{
    name:"FICTION",
   
},
{
    name:"FANTASY",
},
{
    name:"ROMANCE",
},
{
    name:"ACTION",
}

]

export const booksAndAuthors=[
    {
        book:{
            connect:{
                name:"Book 1"
            }
        },
        author:{
            connect:{
                name:"Author A"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 1"
            }
        },
        author:{
            connect:{
                name:"Author F"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 1"
            }
        },
        author:{
            connect:{
                name:"Author B"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 2"
            }
        },
        author:{
            connect:{
                name:"Author B"
            }
        }
    },
    
    {
        book:{
            connect:{
                name:"Book 3"
            }
        },
        author:{
            connect:{
                name:"Author B"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 3"
            }
        },
        author:{
            connect:{
                name:"Author F"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 4"
            }
        },
        author:{
            connect:{
                name:"Author C"
            }
        }
    }
    ,
    {
        book:{
            connect:{
                name:"Book 5"
            }
        },
        author:{
            connect:{
                name:"Author D"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 6"
            }
        },
        author:{
            connect:{
                name:"Author A"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 7"
            }
        },
        author:{
            connect:{
                name:"Author A"
            }
        }
    }
]
export const booksAndGenres=[
    {
        book:{
            connect:{
                name:"Book 1"
            }
        },
        genre:{
            connect:{
                name:"FICTION"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 2"
            }
        },
        genre:{
            connect:{
                name:"FICTION"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 3"
            }
        },
        genre:{
            connect:{
                name:"FANTASY"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 3"
            }
        },
        genre:{
            connect:{
                name:"ACTION"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 4"
            }
        },
        genre:{
            connect:{
                name:"ACTION"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 4"
            }
        },
        genre:{
            connect:{
                name:"FANTASY"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 5"
            }
        },
        genre:{
            connect:{
                name:"FICTION"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 6"
            }
        },
        genre:{
            connect:{
                name:"ACTION"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 6"
            }
        },
        genre:{
            connect:{
                name:"ROMANCE"
            }
        }
    },
    {
        book:{
            connect:{
                name:"Book 7"
            }
        },
        genre:{
            connect:{
                name:"ROMANCE"
            }
        }
    },
]