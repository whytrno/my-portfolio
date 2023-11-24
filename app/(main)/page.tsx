'use client'

import ExperientsData from "@/data/experients";
import React, {useState} from "react";
import Modal from "@/components/modal";
import ExperienceProjects from "@/components/experience-projects";

const HomePage = () => {
    const [selectedModalId, setSelectedModalId] = useState(0);

    return (
        <div className="space-y-3 first:pt-20 last:pb-20">
            {ExperientsData.map((item, index) => (
                <div key={index}>
                    <ExperienceProjects item={item} selectedModalId={selectedModalId}
                                        setSelectedModalId={setSelectedModalId}/>

                    <Modal item={item} selectedModalId={selectedModalId} setSelectedModalId={setSelectedModalId}/>
                </div>
            ))}
        </div>
    )
}

export default HomePage