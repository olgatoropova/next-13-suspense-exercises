import React from 'react';

import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCard from '@/components/LibraryGameCard';

export const dynamic = 'force-dynamic';

async function VaporExercise() {
	const games = await getGamesInLibrary();

	return (
		<section className="max-width-wrapper">
			<header className="library-header">
				<h1>My games</h1>
				<p>
					<span className="num-of-games">{games.length}</span> games in library
				</p>
			</header>
			<div className="game-grid">
				<React.Suspense fallback={<h1>Loading</h1>}>
					{games.map((game) => (
						<LibraryGameCard key={game.slug} game={game} />
					))}
				</React.Suspense>
			</div>
		</section>
	);
}

export default VaporExercise;
