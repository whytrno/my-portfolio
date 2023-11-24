import {Icon} from "@iconify/react";
import {Badge} from "@/components/ui/badge";
import React from "react";
import Link from "next/link";

const ExperienceProjects: React.FC<ExperienceProjectType> = ({item, selectedModalId, setSelectedModalId}) => {
    return (
        <div
            onClick={item.images.length > 0 ? () => setSelectedModalId(item.id) : undefined}
            className="text-left w-full grid grid-cols-12 p-5 group hover:bg-foreground/5 rounded-lg cursor-pointer"
        >
            <div className="w-min whitespace-nowrap col-span-2 text-foreground/50">
                <p>{item.startDate}</p>
                <p>-</p>
                <p>{item.endDate}</p>
            </div>
            <div className="space-y-2 col-span-10 text-foreground/50">
                <div className="space-y-1">
                    <div className="flex gap-2 space-y-1">
                        <h1 className="font-semibold text-foreground">{item.company}</h1>
                        {item.images.length > 0 && (
                            <Icon icon="mdi:arrow-top-right-thick"
                                  className="text-foreground group-hover:-translate-y-[5px] transition-all group-hover:text-primary"/>
                        )}
                        {item.url !== "" && (
                            <Link href={item.url}>
                                <Icon icon="mdi:link-variant"
                                      className="text-foreground group-hover:-translate-y-[5px] transition-all group-hover:text-primary"/>
                            </Link>
                        )}
                    </div>
                    <p>({item.title})</p>
                </div>
                <p>{item.description}</p>
                <div className="flex gap-3 flex-wrap">
                    {item.skills.map((skill, index) => (
                        <Badge key={index}
                               className="text-white bg-primary/50 hover:bg-primary/50">{skill}</Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceProjects