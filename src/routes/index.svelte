<script>
	import Toggle from './lib/toggle.svelte';
	let isToggled = false;
</script>

<div class="container">
	<h1>Welcome to my components' dump</h1>
	<h1>
		<ul>
			<li><a href="/accordion">Normal Accordion</a></li>
			<li><a href="/accordion_js">JS Accordion</a></li>
			<li><a href="/trampoline">Trampoline</a></li>
			<li><a href="/card">A card</a></li>
		</ul>
	</h1>
	<Toggle bind:isToggled label="Toggle A" />
	<Toggle bind:isToggled label="Toggle B" style="--backgroudChecked: grey;" />
	{#if isToggled}
		<h1>I'm the best</h1>
	{/if}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: auto;
		justify-items: center;
	}
</style>
