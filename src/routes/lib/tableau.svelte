<script>
	let tete = ['', 'company', 'contact', 'country'];
	let side = ['title1', 'title2', 'title3'];
	let corp1 = ['Alfreds Futterkiste', 'Centro comercial Moctezuma', 'plus'];
	let corp2 = ['Maria Anders', 'Francisco Chang', 'plus'];
	let corp3 = ['Germany', 'Mexico', 'plus'];
</script>

<div class="container">
	<table>
		<tr class="row1">
			<th class="tet1">{tete[0]}</th>
			<th class="tet2">{tete[1]}</th>
			<th class="tet3">{tete[2]}</th>
			<th class="tet4">{tete[3]}</th>
		</tr>
		<tr class="row2">
			<td class="side">{side[0]}</td>
			<td class="corp1">{corp1[0]}</td>
			<td class="corp2">{corp2[0]}</td>
			<td class="corp3">{corp3[0]}</td>
			<th class="tete1">{tete[0]}</th>
			<th class="tete2">{tete[1]}</th>
			<th class="tete3">{tete[2]}</th>
			<th class="tete4">{tete[3]}</th>
		</tr>
		<tr class="row3">
			<td class="side">{side[1]}</td>
			<td class="corp1">{corp1[1]}</td>
			<td class="corp2">{corp2[1]}</td>
			<td class="corp3">{corp3[1]}</td>
			<th class="tete1">{tete[0]}</th>
			<th class="tete2">{tete[1]}</th>
			<th class="tete3">{tete[2]}</th>
			<th class="tete4">{tete[3]}</th>
		</tr>
		<tr class="row4">
			<td class="side">{side[2]}</td>
			<td class="corp1">{corp1[2]}</td>
			<td class="corp2">{corp2[2]}</td>
			<td class="corp3">{corp3[2]}</td>
			<th class="tete1">{tete[0]}</th>
			<th class="tete2">{tete[1]}</th>
			<th class="tete3">{tete[2]}</th>
			<th class="tete4">{tete[3]}</th>
		</tr>
	</table>
</div>

<style lang="scss">
	$break: 615px;
	table {
		background-color: burlywood;
		display: grid;
		grid-template-areas:
			'row1'
			'row2'
			'row3'
			'row4';
		grid-template-columns: 80vw;
		@media only screen and (max-width: $break) {
			grid-template-areas:
				'row2'
				'row3'
				'row4'
				'row1';
			grid-template-columns: 80vw;
		}
	}
	tr {
		display: grid;
		background-color: coral;
		grid-template-areas:
			'tete1 tete2 tete3 tete4'
			'side corp1 corp2 corp3';
		grid-template-columns: repeat(4, 20vw);
		@media only screen and (max-width: $break) {
			grid-template-areas:
				'side  side'
				'corp1 tete2'
				'corp2 tete3'
				'corp3 tete4';
			grid-template-columns: 60vw 20vw;
		}
	}
	.side {
		background-color: cadetblue;
		grid-area: side;
	}
	.corp1 {
		grid-area: corp1;
	}
	.corp2 {
		grid-area: corp2;
	}
	.corp3 {
		grid-area: corp3;
	}

	.row1 {
		grid-area: row1;
		display: grid;
		grid-template-areas: 'tet1 tet2 tet3 tet4';
		grid-template-columns: repeat(4, 20vw);
		@media only screen and (max-width: $break) {
			display: none;
		}
	}
	.tet1 {
		grid-area: tet1;
		@media only screen and (max-width: $break) {
			display: none;
		}
	}
	.tet2 {
		grid-area: tet2;
		@media only screen and (max-width: $break) {
			display: none;
		}
	}
	.tet3 {
		grid-area: tet3;
		@media only screen and (max-width: $break) {
			display: none;
		}
	}
	.tet4 {
		grid-area: tet4;
		@media only screen and (max-width: $break) {
			display: none;
		}
	}
	.tete1 {
		display: none;
		grid-area: tete1;
		@media only screen and (max-width: $break) {
			display: none;
		}
	}
	.tete2 {
		display: none;
		@media only screen and (max-width: $break) {
			display: grid;
			grid-area: tete2;
		}
	}
	.tete3 {
		display: none;
		@media only screen and (max-width: $break) {
			display: grid;
			grid-area: tete3;
		}
	}
	.tete4 {
		display: none;
		@media only screen and (max-width: $break) {
			display: grid;
			grid-area: tete4;
		}
	}
	.row2 {
		grid-area: row2;
	}
	.row3 {
		grid-area: row3;
	}
	.row4 {
		grid-area: row4;
	}
	th {
		display: grid;
		background-color: violet;
		padding: 3px;
	}
	td {
		display: grid;
		background-color: wheat;
		padding: 3px;
		justify-items: center;
	}
	.container {
		display: grid;
		grid-template-columns: auto;
		justify-items: center;
		padding: 10%;
	}
</style>
