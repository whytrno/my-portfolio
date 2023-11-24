'use client'

import {useState} from "react";
import Modal from "@/components/modal";
import ExperienceProjects from "@/components/experience-projects";
import AchievementsData from "@/data/achievements";

const ProjectPage = () => {
    const [selectedModalId, setSelectedModalId] = useState(0);

    return (
        <div className="space-y-3 first:pt-20 last:pb-20">
            {AchievementsData.map((item, index) => (
                <div key={index}>
                    <ExperienceProjects item={item} selectedModalId={selectedModalId}
                                        setSelectedModalId={setSelectedModalId}/>

                    <Modal item={item} selectedModalId={selectedModalId} setSelectedModalId={setSelectedModalId}/>
                </div>
            ))}
        </div>
    )
}

export default ProjectPage