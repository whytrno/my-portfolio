'use client'

import React from "react";
import SocialItems from "@/components/sidebars/social-items";
import NavItems from "@/components/sidebars/nav-items";
import About from "@/components/sidebars/about";

const Sidebar = () => {
    return (
        <div className="h-screen w-1/2 fixed top-0 left-0 flex flex-col justify-between py-24 pl-20 pr-10">
            <About/>
            <NavItems/>
            <SocialItems/>
        </div>
    )
}

export default Sidebar