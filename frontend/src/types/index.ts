export interface ICity {
    _id: string
    id: number
    name: string
    data: string
}
interface IGroup {
    type: string
    name: string
}

export interface IResident {
    _id: string
    id: number
    name: string
    city_id: number
    groups: IGroup[]
}

export interface IConfig {
    hierarchy: string[]
}