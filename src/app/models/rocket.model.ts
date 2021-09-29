export interface Rocket {
    id: string,
    description: string,
    wikipedia: string,
    company: string,
    country: string,
    first_floght: string,
    success_rate_pct: number,
    cost_per_launch: number,
    stages: number,
    active: boolean,
    type: string,
    name: string,
    boosters: number,
    flickr_images: string[],
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
    engines: number:
    fuel_amount_tons: number,
    burn_time_sec: number
}