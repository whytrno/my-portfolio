import {Badge} from "@/components/ui/badge";
import {Icon} from "@iconify/react";
import {motion} from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image"

const Modal: React.FC<ExperienceProjectType> = ({item, selectedModalId, setSelectedModalId}) => {
    return (
        <motion.div
            id={item.title}
            initial={{y: 800}}
            animate={{y: selectedModalId === item.id ? 0 : 1000}}
            transition={{duration: 0.8, stiffness: 120}}
            className="fixed bottom-0 right-0 z-50 p-10 bg-accent w-full rounded-t-3xl h-[90%] overflow-y-auto space-y-8"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="space-y-4 text-center">
                    {item.url !== "" && (
                        <Link href={item.url} className="flex gap-2 group justify-center cursor-pointer">
                            <h1 className="text-sm">Go to website</h1>
                            <Icon icon="mdi:arrow-top-right-thick"
                                  className="text-foreground group-hover:-translate-y-[5px] transition-all group-hover:text-primary"/>
                        </Link>
                    )}
                    <h1 className="text-3xl font-semibold">{item.title}</h1>
                    <p>{item.company}</p>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {item.skills.map((skill, index) => (
                            <Badge key={index}
                                   className="text-white bg-primary/50 hover:bg-primary/50">{skill}</Badge>
                        ))}
                    </div>
                </div>
                <p className="w-3/4 text-center">{item.description}</p>
            </div>

            {item.images.map((image, index) => (
                <div key={index} className="w-full relative h-full">
                    <Image src={`/images/${image}`} alt="hero" fill objectFit="contain"/>
                </div>
            ))}

            <div className="fixed bottom-5 w-full flex justify-center left-0">
                <div
                    onClick={() => setSelectedModalId(0)}
                    className="flex items-center justify-center bg-primary text-3xl cursor-pointer p-3 border-primary transition-all rounded-full text-primary hover:bg-gradient-to-bl from-red-400 via-blue-700 to-purple-900 text-white hover:border-0 transition-all">
                    <Icon icon="mdi:chevron-double-down"/>
                </div>
            </div>
        </motion.div>
    )
}

export default Modal