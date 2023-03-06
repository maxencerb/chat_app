import { NextApiRequest, NextApiResponse } from 'next'
import { convs } from '@/mock/conversation'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id as string

    const conv = convs.find(conv => conv.id === id)

    if (conv) {
        res.status(200).json(conv)
    } else {
        res.status(404).json({ message: `Conversation with id: ${id} not found.` })
    }
}