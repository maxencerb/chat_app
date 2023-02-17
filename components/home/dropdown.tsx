import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCaretDown } from 'react-icons/Rx'
import Button from '../utils/button';
import classNames from 'classnames';

type NavElement = {
    title: string,
    content?: string,
    link?: string
}

type NavParent = {
    title: string,
    className: string,
    childs: NavElement[]
}

type Nav = (NavElement | NavParent)[]

function isNavParent(el: NavElement | NavParent): el is NavParent {
    return 'childs' in el
}

const HOME_NAVIGATION: Nav = [
    {
        title: "Tech",
        className: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto",
        childs: [
            {
                title: 'Next.js 13',
                link: 'https://nextjs.org/',
                content: 'A react framework for SSR, ISR, serverless and more...'
            },
            {
                title: 'Vercel',
                link: 'https://vercel.com/home',
                content: 'For a headless CI perfectly fitted for Next.js'
            },
            {
                title: 'GitHub',
                link: 'https://github.com/maxencerb/chat_app',
                content: 'Find the code for this simple webapp on GitHub.'
            },
            {
                title: 'Radix UI',
                link: 'https://www.radix-ui.com/',
                content: "Because whe do it again if it's already perfect."
            },
            {
                title: 'TailwindCSS',
                link: 'https://tailwindcss.com/',
                content: 'I mean if you like going back and forth between your files, your choice...'
            },
            {
                title: 'Firebase',
                link: 'https://firebase.google.com',
                content: "You've gotta know the right things to use for your backend, sometimes not the best, but free..."
            },
        ]
    },
    {
        title: 'Contact me',
        className: "absolute top-0 left-0 w-full sm:w-auto",
        childs: [
            {
                title: 'My Portfolio',
                link: 'https://maxencerb.com',
                content: 'Currently not good at all, but why not ?'
            },
            {
                title: 'GitHub',
                link: 'https://github.com/maxencerb',
                content: 'You can take a look at some of my few public projects...'
            },
            {
                title: 'Twitter',
                link: 'https://twitter.com/_maxencerb',
                content: "If you want to pm, i'll try to answer."
            },
        ]
    },
    {
        title: 'Start Chatting',
        link: '/app'
    }
]

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

const ListItem = React.forwardRef(function ListItem({ className, children, title, ...props }: any, forwardedRef: any) {return (
    <li className='max-w-full overflow-hidden'>
        <NavigationMenu.Link asChild>
            <a
                className={classNames(
                    'focus:shadow-[0_0_0_2px] focus:bg-white/20 hover:bg-white/10 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
                    className
                )}
                {...props}
            ref={forwardedRef}
            >
                <div className="text-[#FF0080] mb-[5px] font-semibold leading-[1.2]">{title}</div>
                <p className="leading-[1.4]">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
)});

function DesktopNav() {
    return(
        <NavigationMenu.Root className="relative z-[1] hidden sm:flex">
            <NavigationMenu.List className="button-style m-0 flex list-none w-[350px] justify-between rounded-md p-1">

                {HOME_NAVIGATION.map((value) => {
                    if (isNavParent(value)) return (
                        <NavigationMenu.Item key={value.title}>
                            <NavigationMenu.Trigger className="hover:bg-white/10 focus:shadow-white/20 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                {value.title + ' '}
                                <RxCaretDown
                                    className="text-white/80 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                    aria-hidden
                                />
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className={value.className}>
                                <ul className="one m-0 px-2 py-4 grid list-none w-[350px]">
                                    {value.childs.map((child) => (
                                        <ListItem key={child.title} href={child.link} title={child.title}>
                                            {child.content}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                    )

                    return (
                        <NavigationMenu.Item key={value.title}>
                            <NavigationMenu.Link
                                className="hover:bg-white/10 focus:shadow-white/20 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                                href={value.link}
                            >
                                {value.title}
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    )
                })}

                <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                    <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white/50" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] border bg-black/80 border-white/50 backdrop-blur-md transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
        </NavigationMenu.Root>
    )
}


  
export default function Dropdown() {
    return <>
        <MobileNav/>
        <DesktopNav/>
    </>
}
