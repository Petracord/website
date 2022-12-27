<script lang="ts">
	import { theme } from '../stores';
	import Icon from 'svelte-awesome';
	import { moonO, sunO } from 'svelte-awesome/icons';

	let themeIcon =
		$theme === 'dark' //
			? sunO
			: moonO;
	let gitlabIcon =
		$theme === 'dark' //
			? '/images/gitlab-light.svg'
			: '/images/gitlab-dark.svg';

	function toggleTheme() {
		if ($theme === 'dark') {
			$theme = 'light';
			themeIcon = moonO;
			gitlabIcon = '/images/gitlab-dark.svg';
		} else {
			$theme = 'dark';
			themeIcon = sunO;
			gitlabIcon = '/images/gitlab-light.svg';
		}
	}
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/themes/${$theme}.css`} />
</svelte:head>

<header>
	<div class="corner">
		<a href="/">
			<img src="/images/placeholder.png" alt="GitHub" />
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
		<button on:click={toggleTheme} class="hover-darken">
			<Icon data={themeIcon} scale={1.5} />
		</button>
		<a href="https://gitlab.com/petracord-productions/website" target="_blank" rel="noreferrer">
			<img src={gitlabIcon} alt="GitLab" class="hover-darken" />
		</a>
	</div>
</header>

<style lang="css">
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

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: transparent;
		border: none;
		border-radius: 4px;
		height: 2em;
		width: 2em;
		transition: 0.2s;
	}

	.corner img {
		width: 2em;
		height: 2em;
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
</style>
