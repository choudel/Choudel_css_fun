<script>
	let timeline = [
		{ date: '01/04/2022', h2: 'test left text', p: 'lorem20' },
		{ date: '05/06/2022', h2: 'test right text', p: 'lorem20' },
		{ date: '07/09/2022', h2: 'test left text', p: 'lorem20' },
		{ date: '15/12/2022', h2: 'test right text', p: 'lorem20' }
	];
</script>

<div class="timeline">
	
		{#each timeline as event, i}
			{#if i % 2 === 0}
				<div class="container left">
					<div class="content">
						<div class="Ldate">{event.date}</div>
						<h2>{event.h2}</h2>
						<p>{event.p}</p>
					</div>
				</div>
			{:else}
				<div class="container right">
					<div class="content">
						<div class="Rdate">{event.date}</div>
						<h2>{event.h2}</h2>
						<p>{event.p}</p>
					</div>
				</div>
			{/if}
		{/each}
	
</div>

<style lang="scss">
	.timeline {
		width: 100vw;
		background-color: rgb(162, 182, 143);
        display: grid;
	}
	.left {
		display: grid;
		grid-template-areas: 'content .';
        grid-template-columns: 50vw 50vw;
		grid-template-rows: 50vh;
	}
	.Ldate {
		position: absolute;
		top: -1vh;
		right: -10vw;
		
	}
	.right {
		display: grid;
		grid-template-areas: '. content';
        grid-template-columns: 50vw 50vw;
		grid-template-rows: 50vh;
	}
	.Rdate {
		position: absolute;
		top: -1vh;
		left: -10vw;
		
	}
	.container {
		display: grid;
        grid-template-columns: 50vw 50vw;
		grid-template-rows: 50vh;
        background-color: cornflowerblue;
		justify-items: center;
		align-items: center;
	}
	.content {
		display: grid;
        width: 40vw;
        height:25vmin;
        position: relative;
        grid-area: content;
		background-color: darkcyan;
    }
</style>
