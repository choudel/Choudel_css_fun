<script>
	import { fade } from 'svelte/transition';
	let timeline = [
		{ isOpen :false, date: '01/04/2022', h2: 'test left text', p: 'lorem20' },
		{ isOpen :false, date: '05/06/2022', h2: 'test right text', p: 'lorem20' },
		{ isOpen :false, date: '07/09/2022', h2: 'test left text', p: 'lorem20' },
		{ isOpen :false, date: '15/12/2022', h2: 'test right text', p: 'lorem20' }
	];
	
</script>

<div class="timeline">
	{#each timeline as event, i}
		{#if i % 2 === 0}
			<div class="container left">
				<div class="content">
					<div class="Ldate">{event.date}</div>
					<h2 class="h2"  on:click={() => (event.isOpen = !event.isOpen)}>{event.h2}</h2>
					{#if event.isOpen}
					<p class="p" in:fade out:fade>{event.p}</p>
					{/if}
				</div>
			</div>
		{:else}
			<div class="container right">
				<div class="content">
					<div class="Rdate">{event.date}</div>
					<h2 class="h2"  on:click={() => (event.isOpen = !event.isOpen)}>{event.h2}</h2>
					{#if event.isOpen}
					<p class="p" in:fade out:fade>{event.p}</p>
					{/if}
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	$break: 615px;
	
	.timeline {
		width: 100vw;
		background-color: rgb(162, 182, 143);
		display: grid;
		position: relative;
		@media only screen and (max-width: $break) {
			background-color: rgb(162, 152, 163);
		}
	}
	.timeline::after {
		content: '';
		position: absolute;
		width: 6px;
		background-color: white;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
		@media only screen and (max-width: $break) {
			left :10%
		}
	}
	.left {
		display: grid;
		grid-template-areas: 'content .';
		grid-template-columns: 50vw 50vw;
		grid-template-rows: 50vh;
		@media only screen and (max-width: $break) {
			grid-template-areas: 'content';
			grid-template-columns: 50vw;
			grid-template-rows: 50vh;
		}
	}

	.Ldate {
		display: grid;
		width: calc(15vw - 3px);
		position: absolute;
		top: -1vh;
		right: calc(-15vw - 6px);
		z-index: 1;
		background-color: beige;
		padding: 3px;
		border-radius: 10px;
		justify-items: center;
		@media only screen and (max-width: $break) {
			top: -1vh;
		    right: calc(80vw + 6px);
		}
	}
	.right {
		display: grid;
		grid-template-areas: '. content';
		grid-template-columns: 50vw 50vw;
		grid-template-rows: 50vh;
		@media only screen and (max-width: $break) {
			grid-template-areas: 'content';
			grid-template-columns: 50vw;
			grid-template-rows: 50vh;
		}
	}
	.Rdate {
		display: grid;
		width: calc(15vw - 3px);
		position: absolute;
		top: -1vh;
		left: calc(-15vw - 6px);
		justify-items: center;
		z-index: 1;
		background-color: beige;
		padding: 3px;
		border-radius: 10px;
	}
	.container {
		display: grid;
		grid-template-columns: 50vw 50vw;
		grid-template-rows: 50vh;
		background-color: cornflowerblue;
		justify-items: center;
		align-items: center;
		@media only screen and (max-width: $break) {
			grid-template-columns: 100vw;
			justify-items: end;
			
		}
	}
	.content {
		display: grid;
		width: 40vw;
		height: 25vmin;
		position: relative;
		grid-area: content;
		@media only screen and (max-width: $break) {
			width: 80vw;
			justify-items: end;
			
		}
		
		
	}
	.h2{
		display: grid;
		cursor: pointer;
		height: 10vh;
		align-items: center;
		background-color: white;
		padding-left:3px;
		border-radius: 10px;
		
		position:relative;
		z-index:1;
		transition: border-radius 4s;
		&:hover {
			border-radius:10px 10px 0 0;		
			}
		@media only screen and (max-width: $break) {
			width: 80vw;
		}
		
	}
	.p{
		display: grid;
		padding:3px;
		backdrop-filter: blur(16px) saturate(180%);
    	-webkit-backdrop-filter: blur(16px) saturate(180%);
    	background-color: rgba(17, 25, 40, 0.75);
    	border-radius: 12px;
    	border: 1px solid rgba(255, 255, 255, 0.125);
		align-items: center;
		height:15vmin;
		width:40vw;
		border-radius: 0 0 10px 10px ;
		color: white;
		position:absolute;
		bottom: 10px;
		left:0;
		@media only screen and (max-width: $break) {
			width: 80vw;
		}
	}
</style>
