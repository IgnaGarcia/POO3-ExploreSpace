import { Base } from "./base.model";

export interface Launchpad extends Base {
    timeline: string,
    rockets: string[]
}