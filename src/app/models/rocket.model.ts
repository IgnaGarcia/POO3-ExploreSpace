export interface Rocket {
    id: string,
    name: string,
    wikipedia: string | null,
    company: string,
    success_rate_pct: number,
    flickr_images: string[],

    cost_per_launch: number,
    active: boolean,

    description: string,
    first_flight: string,
    stages: number,
    type: string,
    boosters: number,

    country: string,
    height: Height,
    diameter: Diameter,
    mass: Mass,
    payload_weights: PayloadWeight[],
    engines: Engines,
    first_stage: Stage,
    second_stage: Stage,
}

interface Height {
    meters: number
}

interface Diameter {
    meters: number
}

interface Mass {
    kg: number
}

interface PayloadWeight {
    id: string,
    name: string,
    kb: number
}

interface Engines {
    number: number,
    type: string,
    version: string,
    engine_loss_max: number,
    thrust_to_weight: number
}

interface Stage {
    reusable: boolean,
    engines: number,
    fuel_amount_tons: number,
    burn_time_sec: number
}