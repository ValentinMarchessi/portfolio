import style from './Contact.module.scss';
import github from '../../assets/icons/github.svg';
import gmail from '../../assets/icons/gmail.svg';
import linkedIn from '../../assets/icons/linkedin.svg';

const links = {
	github: 'https://github.com/ValentinMarchessi',
	linkedIn: 'https://www.linkedin.com/in/valent%C3%ADn-marchessi/',
	gmail: 'vmarchessi@gmail.com',
};

export default function Contact(): JSX.Element {
    return (
		<div className={style.contact}>
			<a href={links.github}>
				<img src={github} alt="GitHub" />
			</a>
			<a href={links.linkedIn}>
				<img src={linkedIn} alt="LinkedIn" />
			</a>
			<a href={`mailto:${links.gmail}`}>
				<img src={gmail} alt="Gmail" />
			</a>
		</div>
	);
}