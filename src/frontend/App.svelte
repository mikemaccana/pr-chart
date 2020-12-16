<script lang="ts">
	import type ObjectLiteral from "./object-literal"
	export let datasets: ObjectLiteral[];
	import Total from './Total.svelte';
	import Chart from 'svelte-frappe-charts';

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets,
		barOptions: {
			stacked: 1    // default 0, i.e. adjacent
		}
	}

	enum colors {
		brown = 'E8AA00',
		green = '3BFF00'
	}
</script>

<main>
	<div class="key">
		<Total color="{colors.brown}" name="PRs opened" count="12,123"/>
		<Total color="{colors.green}" name="PRs closed" count="12,123"/>
	</div>

	<!-- Compiler produces odd warning here: https://github.com/sveltejs/language-tools/issues/718 -->
	<Chart {data} type="axis-mixed" />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 200px auto;
		max-width: 1000px;
	}

	.key {
		width: 200px;
		height: 100px;
	}


</style>