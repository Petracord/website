<script lang="ts">
	export let title: string;
	export let href: string;
	export let external = false;
</script>

<li>
	<a
		{href}
		rel={external ? 'noopener noreferrer' : undefined}
		target={external ? '_blank' : undefined}
	>
		<div>
			<h3>{title}</h3>
			<hr />
			<p>
				<slot />
			</p>
		</div>
	</a>
</li>

<style>
	li {
		position: relative;
		top: 0px;
		background-color: transparent;
		color: var(--primary-text-color);
		border-radius: var(--border-radius);
		overflow: hidden;
		transition: all 0.3s ease-out;
	}

	li:hover {
		background-color: rgba(136, 136, 136, 0.067);
	}

	a {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	hr {
		border-bottom: 1px solid var(--primary-text-color);
		margin: 0.5rem 0 0.5rem 0;
	}
</style>
