<script>
	import Toggle from './lib/toggle.svelte';
	let isToggled = false;
</script>

<h1>Welcome to compo_test</h1>
<Toggle bind:isToggled label="BEta" />
<Toggle bind:isToggled label="Sigma" style="--backgroudChecked: grey;" />
{#if isToggled}
	<h1>Immmm the best</h1>
{/if}
