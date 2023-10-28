<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:url" content="https://petracord.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Petracord Invite" />
	<meta property="og:description" content="Join the Petra Gurin fan Discord!" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#FFAE42" />

	{#if data.banner}
		<meta property="og:image" content={data.banner} />
	{/if}
</svelte:head>
