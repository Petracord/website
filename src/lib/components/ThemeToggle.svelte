<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	function isDarkMode() {
		if (!browser) {
			return false;
		}

		const sessionData = window.sessionStorage.getItem('darkMode');

		if (sessionData) {
			return 'true' === sessionData;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function toggleColorScheme(enableDarkMode = false) {
		if (!browser) {
			return false;
		}

		const sessionData = window.sessionStorage.getItem('darkMode');

		if (sessionData && enableDarkMode === ('true' === sessionData)) {
			return;
		}

		if (enableDarkMode) {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}

		sessionStorage.setItem('darkMode', darkMode.toString());
	}

	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			darkMode = e.matches;
		});
	});

	let darkMode = isDarkMode();
	$: toggleColorScheme(darkMode);
</script>

<button on:click={() => (darkMode = !darkMode)}>
	<img loading="eager" src="/assets/moon.svg" alt="Enable Light Mode" class="icon-moon" />
	<img loading="eager" src="/assets/sun.svg" alt="Enable Dark Mode" class="icon-sun" />
</button>

<style lang="scss">
	button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		outline: 0;
	}

	img {
		height: 1.5rem;
		width: 1.5rem;
		display: none;
	}

	:global(.dark) .icon-moon {
		display: block;
	}

	:global(.light) .icon-sun {
		display: block;
	}
</style>
