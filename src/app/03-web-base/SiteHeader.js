import React from 'react';
import Link from 'next/link';
import NavLinks from '@/components/NavLinks';

function SiteHeader() {
	return (
		<header className="site-header">
			<Link href="" className="logo">
				WebBase
			</Link>

			<nav>
				<ol className="header-nav-links">
					<React.Suspense>
						<NavLinks maxLinksCount={4} className="header-nav-link" />
					</React.Suspense>
				</ol>
			</nav>
		</header>
	);
}

export default SiteHeader;
