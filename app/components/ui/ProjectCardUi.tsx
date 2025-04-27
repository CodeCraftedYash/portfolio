import React from "react";
import { type ProjectCardProps } from "@/app/types/projectCardPropsType";
import Title from "./Title";

const ProjectCardUi: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-[var(--secondary-background)] shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow m-4">
            <div><Title text={project.title} variant="secondary" /></div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
                <h3 className=" text-green-500"><Title text="technologies" variant="tertiary" /></h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                        <li
                            key={index}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between items-center">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                >
                    Live Demo
                </a>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:underline text-sm"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};
export default ProjectCardUi;