'use client'

import {Icon} from "@iconify/react";
import React from "react";

const SocialItems = () => {
    const socialItems = [
        {
            href: 'https://github.com/whytrno',
            icon: 'mdi:github'
        },
        {
            href: 'https://www.linkedin.com/in/wahyu-triono22/',
            icon: 'mdi:linkedin'
        },
        {
            href: 'https://www.instagram.com/whytrno/',
            icon: 'mdi:instagram'
        },
        {
            href: 'https://www.facebook.com/profile.php?id=100082023286085',
            icon: 'mdi:facebook'
        },
        {
            href: 'https://dev.to/whytrno',
            icon: 'mdi:dev-to'
        }
    ]

    return (
        <div className="text-4xl flex gap-4 text-foreground">
            {socialItems.map((item, index) => (
                <a target="_blank" href={item.href} key={index}
                   className="hover:text-primary/50 transition-all">
                    <Icon icon={item.icon}/>
                </a>
            ))}
        </div>
    )
}

export default SocialItems