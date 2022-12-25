<script lang="ts">
	import ThemeButton from './ThemeButton.svelte';
</script>

<header>
	<nav>
		<div>
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
		</div>
		<div>
			<ThemeButton />
		</div>
	</nav>
</header>

<style lang="css">
	header {
		background: var(--primary-color);
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom-width: 1px;
		border-color: black;
		padding: 0.5rem 1.5rem;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	a {
		padding: 0 1rem;
	}
</style>
