<script lang="ts">
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

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="css">
	:global(:root) {
		font-family: Inter, sans-serif;
	}

	:global(body) {
		box-sizing: border-box;
		margin: 0;
		overflow-x: hidden;
	}

	main {
		flex: 1;
		overflow-y: auto;
		display: flex;
		padding: 1rem;
		min-height: 100vh;
	}
</style>
