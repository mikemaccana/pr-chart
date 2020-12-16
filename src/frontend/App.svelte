<script lang="ts">
	import type ObjectLiteral from "./object-literal"
	import Total from './Total.svelte';
	import Chart from 'svelte-frappe-charts';

	import { http } from "./modern-http";

	const log = console.log.bind(console);

	let labels: string[]
	let createdValues: string[] 

	(async function () {
		let response = await http.get("/api/v1/pull-request-summary");
		if (response.status !== "OK") {
			throw new Error(`Error GETting /api/v1/pull-request-summary`);
		}
		let prData = response.body as ObjectLiteral;

		labels = Object.keys(prData.created);
		createdValues = Object.values(prData.created);
		log(Object.keys(prData.created));
		log(Object.values(prData.created));
	})();

  const data = {
    // labels,
    labels: ["201911", "201912", "202001", "202002", "202003", "202004", "202005", "202006", "202007", "202008", "202009", "202010", "202011", "202012"],
    datasets: [
      {
        name: "Created",
        // values: createdValues,
        values: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 2, 2],
        chartType: "bar",
			},
			{
        name: "Updated",
        // values: createdValues,
        values: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 2, 2],
        chartType: "bar",
      },
      // {
      //   name: "Dataset 2",
      //   values: [30, 50, -10, 15, 18, 32, 27, 14],
      //   chartType: "bar",
      // },
    ],
		
	}

	enum palette {
		brown = 'E8AA00',
		green = '3BFF00'
	}

	let colors = [`#${palette.brown}`, `#${palette.green}`]

	let barOptions = {
		stacked: 1    // default 0, i.e. adjacent
	}

</script>

<main>
	<div class="key">
		<Total color="{palette.brown}" name="PRs opened" count="12,123"/>
		<Total color="{palette.green}" name="PRs closed" count="12,123"/>
	</div>

	<!-- Compiler produces odd warning here: https://github.com/sveltejs/language-tools/issues/718 -->
	<!-- See demo at https://codesandbox.io/s/frappe-charts-demo-viqud?from-embed=&file=/src/index.js for badly named 'data' variable -->
	<Chart {data} type="axis-mixed" {colors} {barOptions}/>
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