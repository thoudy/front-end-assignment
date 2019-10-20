export interface Article { 
    id: number,
    date: {
        origin: string,
        transformed: string
    },
    image: string,
    category: string,
    title: string,
    preamble: string
}