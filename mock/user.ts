import type { User } from "@/types/user";

const users: User[] = [
    {
        id: '1',
        name: 'Maxence Raballand',
        handle: 'maxencerb',
        lastConnection: Date.UTC(2023, 1, 12),
        conv_ids: []
    },
    {
        id: '2',
        name: 'Ping Pong',
        handle: 'ping',
        lastConnection: Date.UTC(2023, 1, 20),
        conv_ids: []
    },
    {
        id: '3',
        name: 'Tik Tok',
        handle: 'tik',
        lastConnection: Date.UTC(2023, 2, 1),
        conv_ids: []
    },
]

export {
    users
}