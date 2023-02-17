import type { User } from "./user"

enum MessageContentType {
    Text = 'text',
    Image = 'image'
}

type MessageContent = {
    type: MessageContentType,
    content: string
}

enum MessageStatus {
    Sending = "sending",
    Sent = "sent",
    Error = "error",
    Delivered = "delivered",
    Read = "read"
}

type Message = {
    sender: User,
    utc_timestamp: number,
    content: MessageContent,
    status: MessageStatus,
    id: string
}

export {
    type Message,
    MessageContentType,
    type MessageContent,
    MessageStatus
}