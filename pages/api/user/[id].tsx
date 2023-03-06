import { NextApiRequest, NextApiResponse } from "next";
import { users } from "@/mock/user";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id as string;

    const user = users.find((user) => user.id === id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: `User with id: ${id} not found.` });
    }
}