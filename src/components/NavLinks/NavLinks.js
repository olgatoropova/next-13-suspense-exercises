import React from 'react';
import Link from 'next/link';

import { getCachedNavLinks } from '@/helpers/web-base-helpers';

async function NavLinks({ maxLinksCount, className }) {
	let navLinks = await getCachedNavLinks();
	if (maxLinksCount) {
		navLinks = navLinks.slice(0, 4);
	}
	return (
		<>
			{navLinks.map(({ slug, label, href, type }) => (
				<li key={slug}>
					<Link href={href} className={className ? `${className} ${type}` : ''}>
						{label}
					</Link>
				</li>
			))}
		</>
	);
}

export default NavLinks;
