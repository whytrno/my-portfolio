type ExperienceProject = {
    id: number;
    title: string;
    company: string;
    description: string;
    skills: string[];
    images: string[];
    url: string;
    startDate: string;
    endDate: string;
}

type ExperienceProjectType = {
    item: ExperienceProject;
    selectedModalId: number;
    setSelectedModalId: (id: number) => void;
}