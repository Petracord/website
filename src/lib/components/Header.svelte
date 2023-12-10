<header>
	<nav>
		<div class="corner">
			<ul>
				<a href="/" title="Home">
					<h1>Petracord</h1>
				</a>
			</ul>
		</div>
		<div class="corner">
			<ul>
				<a href="/projects">
					<li>Projects</li>
				</a>
			</ul>
		</div>
	</nav>
</header>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 2rem;
	}

	.corner {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	li,
	h1 {
		color: var(--primary-text-color);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 1.2rem;
	}
</style>
