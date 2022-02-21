import style from './Home.module.scss'
import Contact from '../Contact/Contact';

export default function Home(): JSX.Element{
    return (
		<div className={style.body}>
			<h1>Hi, my name is Valentin!</h1>
			<h2>Welcome to my portfolio.</h2>
            <Contact/>
		</div>
	);
}