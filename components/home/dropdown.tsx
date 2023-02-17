import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from '../utils/button';
import Link from 'next/link';


function MobileNav() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button aria-label='home menu' className='text-xl p-2 select-none outline-none sm:hidden'>
                    <GiHamburgerMenu />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className='z-20 w-52' sideOffset={5}>
                    <div className='w-full backdrop-blur-sm bg-black/30 rounded-md border border-white/70 flex flex-col'>
                        <DropdownMenu.Item asChild>
                            <a href='https://github.com/maxencerb/chat_app' target='_blank' rel='noopenner noreferrer' className='w-full border-b px-4 py-2 border-white/70'>Github</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item asChild>
                            <a href='https://maxencerb.com' target='_blank' rel='noopenner noreferrer' className='w-full border-b px-4 py-2 border-white/70'>maxencerb</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className='p-4 w-full flex justify-center'>
                            <Button href='/app'>
                                Start Chatting
                            </Button>
                        </DropdownMenu.Item>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

function DesktopNav() {
    return(
        <NavigationMenu.Root className='hidden sm:block'>
            <NavigationMenu.List className='button-style space-x-6  py-2 px-4 rounded-md flex'>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        Links
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='absolute top-0 left-0 w-full'>
                        hello
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link asChild>
                        <Link href="/app">Start Chatting</Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}

export default function Dropdown() {
    return <>
        <MobileNav/>
        <DesktopNav/>
    </>
}
