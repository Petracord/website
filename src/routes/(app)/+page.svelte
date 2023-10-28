<script lang="ts">
	import { PUBLIC_DISCORD_INVITE } from '$env/static/public';
</script>

<svelte:head>
	<title>Petracord</title>
</svelte:head>

<section>
	<h1>Join the Discord!</h1>
	<a href={PUBLIC_DISCORD_INVITE} class="button" target="_blank" rel="noreferrer">
		<span>Click here</span>
	</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 70vh;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	a {
		background-color: var(--secondary-color);
		color: var(--secondary-text-color);
		box-shadow: var(--shadow);
	}
</style>
