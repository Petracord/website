<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';

	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
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

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="css">
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-left: 2rem;
		margin-right: 2rem;
	}
</style>
