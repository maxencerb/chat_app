// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { convs } from '../../mock/conversation'
import type { Conv } from '@/types/conversation'
import { User } from '@/types/user'
import { users } from '@/mock/user'


type Data = {
    convs: Conv[],
    users: User[],
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const userID = req.query.userID as string

    const currConvs = convs.filter(conv => conv.members.includes(userID))
    const currUsers = currConvs.reduce((acc, conv) => {
        for (const member of conv.members) {
            if (!acc.includes(member)) {
                acc.push(member)
            }
        }
        return acc
    }, [] as string[])
        .map(id => users.find(user => user.id === id))
        .filter(user => user !== undefined) as User[]

    res.status(200).json({
        convs: currConvs,
        users: currUsers
    })
}
