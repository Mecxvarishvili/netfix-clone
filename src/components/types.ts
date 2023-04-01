export type MatchType = string | boolean;

export type MaturityType = string;


export interface MovieData {
    id: string,
    name: string,
    describe: string,
    release: string,
    pegi: MaturityType,
    match: MatchType,
    time: string,
    special: ("trending now" | "only on netflix" | "award-winning shows" | "top searches" | "animation" | "award-winning movies" | "released in the past")[],
    creator: string[],
    cast: string[],
    genre: string[],
    category: string[]
    img: string[],
    trailer: string,
}
export interface FocusCardState {
    data: MovieData
    rect: {
        top: number,
        left: number,
        right: number,
        width: number,
        height: number
    }
    isFocused: boolean
}

export namespace Type {
}

export default Type