export interface Crew {
    id: string;
    name: string;
    agency: string;
    image: string;
    wikipedia: string | null;
    status: 'active' | 'retired',
    launches: string[]
}
