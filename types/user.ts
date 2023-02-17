type User = {
    id: string,
    name: string,
    handle: string,
    imgUrl?: string,
    lastConnection?: number,
    conv_ids: string[]
}

export type {
    User
}