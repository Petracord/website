<header>
	<div class="corner">
		<a href="/" title="Home">
			<h1>Petracord</h1>
		</a>
	</div>

	<nav>
		<ul></ul>
	</nav>

	<div class="corner"></div>
</header>

<style>
	header {
		background: var(--secondary-color);
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 2rem;
		box-shadow: var(--shadow);
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

	h1 {
		color: var(--secondary-text-color);
	}

	nav {
		display: flex;
		justify-content: center;
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
	}
</style>
