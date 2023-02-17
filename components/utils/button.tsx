import React from 'react'
import Link from 'next/link'

type Props = {
    children: React.ReactNode,
    href: string,
    className?: string
}

export default function Button({ children, href, className }: Props) {
    return (
        <Link href={href} className={`button-style w-fit py-2 px-4 rounded-md ${className || ''}`}>
            { children }
        </Link>
    )
}
