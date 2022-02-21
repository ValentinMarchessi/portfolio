import style from './ProjectCard.module.scss';
import { Project } from '../../interfaces';

export default function ProjectCard({ name, img, repository }: Project): JSX.Element{
    return (
        <div className={style.card}>
            <h1>{name}</h1>
            <a href={repository}>GitHub</a>
        </div>
    )
}