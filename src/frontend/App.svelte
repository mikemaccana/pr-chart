<script lang="ts">
	import type ObjectLiteral from "./object-literal"
	export let name: string;
	export let datasets: ObjectLiteral[];
	import Chart from 'svelte-frappe-charts';

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets,
		barOptions: {
			stacked: 1    // default 0, i.e. adjacent
		}
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<!-- Compiler produces odd warning here: https://github.com/sveltejs/language-tools/issues/718 -->
	<Chart data={data} type="axis-mixed" />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>