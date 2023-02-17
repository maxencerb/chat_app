import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Container({children}: Props) {
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-4xl xl:max-w-6xl w-full'>{children}</div>
        </div>
    )
}
