import style from './Projects.module.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Project } from '../../interfaces';

export default function Projects({ projects }: { projects: Project[] }): JSX.Element {
    return (
        <div className={style.body}>
            <h2>Some of my projects...</h2>
            {projects.map(proyect => {
                <ProjectCard {...proyect}/>
            })}
        </div>
    )
}