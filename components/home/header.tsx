import React from 'react'
import Container from '../container'
import Button from '../utils/button'

export default function Header() {
    return ( 
        <header>
            <Container>
                <div className='w-full flex flex-col p-4 custom-height justify-around'>
                    <div className='w-full flex flex-col space-y-6'>
                        <h2 className='text-7xl font-bold sm:text-8xl'>Simply <br /> <span className='text-gradient'>Chat.</span></h2>
                        <h3 className='w-full opacity-80 max-w-md sm:text-lg'>Discover this simple chat app just to text. Read more about the project on this page or on GitHub.</h3>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <Button href='app' className='mx-auto font-semibold text-lg hover:opacity-90 md:text-xl md:px-6 md:py-3'>
                            Start Chatting
                        </Button>
                        {/* <h3 className='mx-auto opacity-70 font-light text-sm'>Scoll to Discover.</h3> */}
                    </div>
                </div>
            </Container>
        </header>
    )
}
