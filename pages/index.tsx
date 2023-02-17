import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/home/header'
import NavBar from '@/components/home/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Chat App - maxencerb</title>
                <meta name="description" content="This is a chat app just to test out some components and tech ideas" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full homepage'>
                <NavBar />
                <Header />

                {/* <div className='w-full h-screen'></div> */}
            </div>
        </>
    )
}