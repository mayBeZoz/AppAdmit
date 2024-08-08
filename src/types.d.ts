type RootLayout = {
    readonly children : React.ReactNode,
}

type Children = {
    readonly children : React.ReactNode,
}


type TArticle = {
    heading:string,
    imageURL:string,
    mainSection:{
        heading:string,
        texts:string[]
    },
    sections:{
        heading:string,
        texts:string[]
    }[],
    author:{
        name:string
    },
    id:string
}