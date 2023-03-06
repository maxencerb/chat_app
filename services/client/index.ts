import type { Conv, ConvHeader } from '@/types/conversation'
import { User } from '@/types/user'

export function getConvsHeaderAndUsers(userID: string): Promise<{ convs: ConvHeader[], users: User[] }> {
    return fetch(`/api/convs?userID=${userID}`).then(res => res.json() as Promise<{ convs: ConvHeader[], users: User[] }>)
}

export function getUser(userID: string): Promise<User> {
    return fetch(`/api/user/${userID}`).then(res => res.json() as Promise<User>)
}