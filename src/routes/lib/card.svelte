<div class="card">
	<div class="profil-pic">
		<img src="static/oumayma21.svg" alt="face" />
		<div class="circle" />
		<div class="circle1" />
		<div class="circle2" />
		<div class="circle3" />
		<div class="circle4" />
		<div class="circle5" />
		<div class="circle6" />
		<div class="circle7" />
		<div class="circle8" />
		<div class="circle9" />
	</div>
	<div class="description">
		<h1>Javascript, React, Vue, NodeJS</h1>
		<p>Technologies I know</p>
	</div>
</div>

<style>
	.card {
		display: grid;
		width: 250px;
		height: 250px;
		padding: 20px 10px;
		grid-template-areas:
			'pic'
			'desc';
		box-shadow: 10px 10px 15px 5px rgba(51, 51, 51, 0.3);
		border-radius: 10%;
	}
	.profil-pic {
		display: grid;
		position: relative;
		grid-area: pic;
		justify-content: center;
		align-content: center;
	}
	.profil-pic > img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 5px solid #ffff;
		box-shadow: 10px 10px 15px 5px rgba(51, 51, 51, 0.3);
	}
	.circle {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: coral;
		position: absolute;
		top: 49%;
		left: 10%;
	}
	.circle1 {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: blueviolet;
		position: absolute;
		top: 15%;
		left: 35%;
	}
	.circle2 {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: blueviolet;
		position: absolute;
		top: 25%;
		left: 74%;
	}
	.circle3 {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: palevioletred;
		position: absolute;
		top: 30%;
		left: 85%;
	}
	.circle4 {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: blueviolet;
		position: absolute;
		top: 10%;
		left: 9%;
	}
	.circle5 {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: palevioletred;
		position: absolute;
		top: 6%;
		left: 78%;
	}
	.circle6 {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: blueviolet;
		position: absolute;
		top: 65%;
		left: 15%;
	}
	.circle7 {
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background-color: palevioletred;
		position: absolute;
		top: 10%;
		left: 85%;
	}
	.circle8 {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: blueviolet;
		position: absolute;
		top: 52%;
		left: 82%;
	}
	.circle9 {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: palevioletred;
		position: absolute;
		top: 36%;
		left: 17%;
	}
	.description {
		display: grid;
		grid-area: desc;
		justify-content: center;
		align-content: start;
		padding: 0px 25px;
	}
	.description > h1 {
		font-size: 12pt;
		text-align: center;
	}
	.description > p {
		font-size: 8pt;
		text-align: center;
	}
</style>
