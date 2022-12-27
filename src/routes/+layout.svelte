<script lang="ts">
	import '../style/style.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<meta name="description" content="A website for the Petra Gurin discord fan server." />

	<meta property="og:url" content="https://petracord.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Petracord" />
	<meta property="og:description" content="A website for the Petra Gurin fan discord." />
	<meta name="theme-color" data-react-helmet="true" content="#FFAE42" />

	<meta name="twitter:card" content="summary" />
	<meta property="twitter:domain" content="" />
	<meta property="twitter:url" content="https://petracord.com/" />
	<meta name="twitter:title" content="Petracord" />
	<meta name="twitter:description" content="A website for the Petra Gurin fan discord." />
</svelte:head>

<div class="app">
	<script>
		const darkMode = sessionStorage.getItem('darkMode');
		if (null !== darkMode) {
			document.body.classList.add(darkMode === 'true' ? 'dark' : 'light');
		}
	</script>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="css">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
