import type { Message } from "./message";
import type { User } from "./user";

enum ConvType  {
    Duo="duo",
    Multi="multi"
}

type ConvHeader = {
    members: string[],
    id: string,
    created: number,
    type: ConvType,
    name?: string
}

type Conv = ConvHeader & {
    messages: Message[],
}

export {
    ConvType,
    type Conv,
    type ConvHeader,
}