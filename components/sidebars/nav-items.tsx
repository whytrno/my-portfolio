'use client'

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

const NavItems = () => {
    const pathname = usePathname()
    const navItems = [
        {
            name: 'Experiences',
            href: '/'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'Achievements',
            href: '/achievements'
        },
        {
            name: 'Curriculum Vitae',
            href: 'https://drive.google.com/file/d/1QfTgTNj00m69dFA1UAF9HDG1FI_0OmlI/view?usp=sharing'
        }
    ]

    return (
        <div className="space-y-5">
            {navItems.map((item, index) => (
                <Link href={item.href} key={index}
                      className={`flex gap-7 items-center w-min whitespace-nowrap ${item.href === pathname ? 'text-foreground' : 'text-foreground/50 hover:text-foreground group'}`}>
                    <div
                        className={`h-px ${item.href === pathname ? 'bg-foreground w-20' : 'bg-foreground/50 group-hover:w-20 group-hover:bg-foreground transition-all w-10'}`}></div>
                    <p>{item.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default NavItems