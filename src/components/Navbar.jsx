import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/contacts">
					<span className="navbar-brand mb-0 h1">Contacts list</span>
				</Link>
				<div className="ml-auto">
					<Link to="/add-contact">
						<button className="btn btn-primary">Add contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};