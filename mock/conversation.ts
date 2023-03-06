import { type Conv, ConvType } from "@/types/conversation";
import { type Message, MessageStatus, MessageContentType } from "@/types/message";

let mid = 0
let cid = 0
let date = Date.UTC(2022, 1, 1)

function getMID() {
    mid += 1
    return mid
}

function getCID() {
    cid += 1
    return cid
}

function getDate() {
    date = date + 60 * 1000
    return date
}

const fakeMessages = [
    "Hello world",
    "my name is maxence",
    "how are you",
    "this is me talking",
    "I'm writing fake messages",
    "What a prototype this is going to be",
    "How are you ?",
    "I am running out of inspiration",
    "I can speak french",
    "and you ?",
    "Do you want a break ?",
    "This is the worst feeling 😂",
    "love you ❤️",
    "Feel the pain... 😭"
]

function generateMessage(ids: string[]): Message {
    const sender = ids[Math.round(Math.random() * (ids.length - 1))]
    const content = fakeMessages[Math.round(Math.random() * (fakeMessages.length - 1))]
    return ({
        sender,
        utc_timestamp: getDate(),
        content: {
            content,
            type: MessageContentType.Text
        },
        status: MessageStatus.Read,
        id: getMID().toString()
    })
}

function generateConv(ids: string[], type: ConvType = ConvType.Duo): Conv {
    const created = getDate()

    return {
        id: getCID().toString(),
        members: ids,
        type,
        created,
        messages: Array(Math.round(Math.random() * 50)).map(() => generateMessage(ids))
    }
}


const convs: Conv[] = [
    generateConv(['1', '2']),
    generateConv(['2', '3']),
    generateConv(['1', '3']),
    generateConv(['1', '2', '3'], ConvType.Multi),
]

export {
    convs
}