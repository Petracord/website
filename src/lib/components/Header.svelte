<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src="/images/placeholder.png" alt="GitHub" class="main-icon" />
		</a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<ThemeToggle />
		<a
			href="https://gitlab.com/petracord-productions/website"
			target="_blank"
			rel="noreferrer"
			class="gitlab-icons"
		>
			<img loading="eager" src="/assets/gitlab-light.svg" alt="Gitlab" class="icon-gitlab-dark" />
			<img loading="eager" src="/assets/gitlab-dark.svg" alt="Gitlab" class="icon-gitlab-light" />
		</a>
	</div>
</header>

<style lang="scss">
	header {
		background: var(--primary-color);
		display: flex;
		justify-content: space-between;
		padding-left: 0.5em;
		padding-right: 0.5em;
	}

	.corner {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2.5em;
		height: 2.5em;
		object-fit: contain;
		border-radius: 4px;
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
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--primary-text-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: background 0.1s linear;
	}

	nav a:hover {
		color: var(--accent-text-color);
		background: var(--accent-color);
	}

	.gitlab-icons img {
		display: none;
	}

	:global(.dark) .icon-gitlab-dark {
		display: block;
	}

	:global(.light) .icon-gitlab-light {
		display: block;
	}
</style>
