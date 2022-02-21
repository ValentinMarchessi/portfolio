import { Link } from "react-router-dom"
import style from './Navbar.module.scss';

export default function Navbar(): JSX.Element{
    return (
		<nav id={style.nav}>
			<div id={style.links}>
				<Link to="/">Home</Link>
				<Link to="about">About</Link>
				<Link to="contact">Contact</Link>
			</div>
		</nav>
	);
}