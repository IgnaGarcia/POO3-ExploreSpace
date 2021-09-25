export interface Company {
    id: string,
    summary: string,
    name: string,
    valuation: number,
    cto_propulsion: string,
    coo: string,
    cto: string,
    ceo: string,
    founder: string,
    employees: number,
    founded: number,
    links: CompanyLinks
}

interface CompanyLinks {
    website: string,
    flickr: string,
    twitter: string,
    elon_twitter: string
}