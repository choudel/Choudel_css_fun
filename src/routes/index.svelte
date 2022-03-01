<script>
	import Baccordion from './lib/baccordion.svelte';
	import Accordion from './lib/accordion.svelte';
	import Toggle from './lib/toggle.svelte';
	let isToggled = false;
</script>



<h1>Welcome to compo_test</h1>
<Accordion isOpen ={false} buttonText="acoordion">
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam fugit veritatis voluptate sunt rerum totam ex vero eveniet iste ducimus, eos, facilis laborum sit non cumque nam, est minus neque?</p>
</Accordion>
<Baccordion isOpen ={true} buttonText="beta accordion">
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam fugit veritatis voluptate sunt rerum totam ex vero eveniet iste ducimus, eos, facilis laborum sit non cumque nam, est minus neque?</p>
</Baccordion>


<Toggle bind:isToggled label="BEta" />
<Toggle bind:isToggled label="Sigma" style="--backgroudChecked: grey;" />
{#if isToggled}
	<h1>Immmm the best</h1>
{/if}
