import React from 'react';
import { Nav, NavItem, NavLink } from 'shards-react';

export default function NavExample() {
	return (
		<Nav>
			<NavItem>
				<NavLink href="/pantry">Pantry</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/favorites">Favorites</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/user">Home</NavLink>
			</NavItem>
		</Nav>
	);
}
