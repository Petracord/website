<script>
	import { theme } from '../stores';
	import Moon from '../icons/Sun.svelte';

	function toggleTheme() {
		if ($theme === 'dark') {
			$theme = 'light';
		} else {
			$theme = 'dark';
		}
	}
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/themes/${$theme}.css`} />
</svelte:head>

<div>
	<button on:click={toggleTheme} />
	<Moon />
</div>

<style lang="css">
	div {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px black solid;
		border-radius: 0.5rem;
		height: 3rem;
		width: 3rem;
	}

	button {
		opacity: 0;
		cursor: pointer;
		position: absolute;
		height: 100%;
		width: 100%;
	}
</style>
