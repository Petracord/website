<footer>
	<div>
		<div class="footer-list">
			<h2>Socials</h2>
			<ul>
				<li>
					<a href="/invite" target="_blank" rel="noreferrer">
						<span>Discord</span>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/PentomoClub" target="_blank" rel="noreferrer">
						<span>Twitter</span>
					</a>
				</li>
				<li>
					<a href="https://www.twitch.tv/pentomoclub" target="_blank" rel="noreferrer">
						<span>Twitch</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="footer-list">
			<h2>Links</h2>
			<ul>
				<li>
					<a href="https://github.com/Petracord" target="_blank" rel="noreferrer">
						<span>GitHub Org</span>
					</a>
				</li>
				<li>
					<a href="https://github.com/Petracord/website" target="_blank" rel="noreferrer">
						<span>Source code</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--brand-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2rem 0;
	}

	footer > div {
		display: flex;
		flex-direction: row;
		width: 60%;
	}

	span {
		color: var(--brand-text-color);
	}

	span:hover {
		text-decoration: underline;
	}

	.footer-list {
		margin-left: auto;
		margin-right: auto;
	}

	h2 {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		list-style: none;
	}
</style>
