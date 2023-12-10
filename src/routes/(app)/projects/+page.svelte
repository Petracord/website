<script>
	import ProjectEntry from '$components/ProjectEntry.svelte';
</script>

<svelte:head>
	<title>Projects | Petracord</title>
</svelte:head>

<section>
	<h1>Projects</h1>

	<h2>In progress</h2>
	<ul>
		<ProjectEntry title="Visual Novel" href="https://pentomoclub.itch.io/petracord-vn" external>
			A visual novel for Petra's birthday
		</ProjectEntry>
	</ul>

	<h2>Completed</h2>
	<ul></ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 70vh;
		gap: 1rem;
		max-width: 960px;
		margin: 3rem auto 1.5rem;
	}

	h2 {
		margin-top: 2rem;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		list-style: none;
		gap: 1rem;
	}

	@media only screen and (max-width: 960px) {
		ul {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media only screen and (max-width: 720px) {
		ul {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	}
</style>
