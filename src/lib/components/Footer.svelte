<script lang="ts"></script>

<footer>
	<div class="footer-content">
		<div class="footer-categories">
			<img src="/images/placeholder.png" alt="Server icon" />
		</div>

		<div class="footer-categories">
			<h2>Links</h2>
			<ul>
				<li>
					<a href="/projects">Projects</a>
				</li>
			</ul>
		</div>

		<div class="footer-categories">
			<h2>Social</h2>
			<ul>
				<li>
					<a href="/invite" target="_blank" rel="noreferrer">Discord</a>
				</li>
				<li>
					<a href="https://twitter.com/PentomoClub" target="_blank" rel="noreferrer">Twitter</a>
				</li>
				<li>
					<a href="https://www.twitch.tv/pentomoclub" target="_blank" rel="noreferrer">Twitch</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style lang="css">
	footer {
		background: var(--accent-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2rem 0;
	}

	footer a {
		color: var(--accent-text-color);
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		text-decoration: underline;
	}

	h2 {
		color: var(--accent-text-color);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
	}

	.footer-content {
		display: flex;
		flex-direction: row;
		width: 60%;
	}

	.footer-categories {
		margin-left: auto;
		margin-right: auto;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	li {
		margin-bottom: 12px;
	}

	img {
		width: 125px;
	}
</style>
