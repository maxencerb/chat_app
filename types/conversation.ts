import type { Message } from "./message";
import type { User } from "./user";

enum ConvType  {
    Duo="duo",
    Multi="multi"
}

type Conv = {
    members: [],
    id: string,
    created: number,
    messages: Message[],
    type: ConvType
}

export {
    ConvType,
    type Conv
}