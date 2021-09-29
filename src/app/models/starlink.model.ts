export interface StarLink {
    docs: Doc[],
    totalDocs: number,
}

interface Doc {
    id: string,
    launch: string
}