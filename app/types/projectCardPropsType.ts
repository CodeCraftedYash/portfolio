export interface ProjectCardProps {
    project: {
        title: string;
        picture?: string;
        alt?: string;
        description: string;
        technologies: string[];
        link: string;
        github: string;
    };
}