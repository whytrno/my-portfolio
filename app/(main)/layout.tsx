import React from "react";
import Sidebar from "@/components/sidebar";
import {ThemeSwitcher} from "@/components/themes/theme-switcher";

const Layout = ({children}: { children: React.ReactNode }) => {
    // const [loading, setLoading] = useState(true)
    // // after 1.5 seconds, set loading to false
    // setTimeout(() => {
    //     setLoading(false)
    // }, 1500)

    return (
        <div className="h-screen w-full relative flex justify-end px-20 text-foreground">
            <Sidebar/>
            <div className="w-1/2 h-full">
                {children}
            </div>
            <ThemeSwitcher/>
        </div>
    )
}

export default Layout