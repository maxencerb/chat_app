import React, { useEffect, useState } from 'react'
import { BsFillChatFill } from 'react-icons/bs'
import Container from '../container'
import Dropdown from './dropdown'


const THRESHOLD = 50

export default function NavBar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            console.log(window.scrollY)
            setScrolled(window.scrollY > THRESHOLD)
        }

        window.addEventListener('scroll', onScroll)
    
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    

    return (
        <nav className={`sticky flex top-0 left-0 w-full backdrop-blur-md border-b border-gray-700 transition-all z-10 ${scrolled ? 'border-opacity-100' : 'border-opacity-0'}`}>
            <Container>
                <div className='p-4 w-full flex justify-between items-center'>
                    <div className='text-3xl flex space-x-3'>
                        <BsFillChatFill />
                        <h1 className='font-semibold'>Chat.</h1>
                    </div>
                    <Dropdown/>
                </div>
            </Container>
        </nav>
    )
}
