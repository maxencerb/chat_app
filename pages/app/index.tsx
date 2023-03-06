import NavBar from '@/components/home/navbar'
import { getConvsHeaderAndUsers } from '@/services/client'
import { ConvHeader, ConvType } from '@/types/conversation'
import { User } from '@/types/user'
import React, { useEffect, useMemo, useState } from 'react'

const USER_ID = "1"

export default function Index() {

    const [convs, setConvs] = useState<ConvHeader[]>([])
    const [users, setUsers] = useState<User[]>([])

    const convNames = useMemo(() => {
        return convs.map(conv => {
            if (conv.name) return conv.name
            if (conv.type === ConvType.Duo) return users.find(user => conv.members.filter(m => m !== USER_ID)[0] === user.id)?.name || 'undefined'
            return conv.members.map((m) => {
                return users.find(user => user.id === m)?.name || 'undefined'
            }).reduce((prev, curr) => {
                if (prev === '') return curr
                return prev + ', ' + curr
            }, '')
        })
    }, [convs, users])

    useEffect(() => {
        getConvsHeaderAndUsers(USER_ID).then(res => {
            setConvs(res.convs)
            setUsers(res.users)
        })
        
        return () => {
            
        }
    }, [])
    

    return (
        <div className='h-screen w-screen gradient-bg'>
            {convs.map((conv, idx) => {
                return (
                    <div key={conv.id}>
                        <p>{convNames[idx]}</p>
                    </div>
                )
            })}
        </div>
    )
}
