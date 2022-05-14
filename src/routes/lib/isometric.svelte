<body>
	<div class="highscraper">
		<div class="wall-one">
			<div />
		</div>
		<div class="wall-two">
			<div />
		</div>
		<div class="roof">
			<div>
				<div />
				<div />
			</div>
			<div>
				<div />
				<div />
			</div>
			<div />
		</div>
	</div>

	<div class="brickhouse">
		<div class="wall-one">
			<div />
		</div>
		<div class="wall-two">
			<div />
		</div>
		<div class="roof">
			<div>
				<div />
				<div />
			</div>
			<div>
				<div />
				<div />
			</div>
		</div>
	</div>

	<div class="leaves">
		<div />
	</div>
	<div class="wood" />

	<div class="ground-cropped">
		<div class="shadow-brickhouse" />
		<div class="shadow-highscraper" />

		<div class="car-one red" />
		<div class="car-one blue" />
		<div class="car-two black" />
	</div>

	<div class="water" />
	<div class="fontain">
		<div />
	</div>
	<div class="water-drops">
		<div />
		<div />
		<div />
		<div />
	</div>

	<div class="road" />
	<div class="ground">
		<div />
		<div />
		<div />
		<div />
	</div>
</body>

<style lang="scss">
	body {
		position: fixed;
		background-color: #fae1cb;
		top: 50%;
		left: 50%;
		margin-left: -10vw;
		margin-top: -8vw;
	}
	.ground {
		position: absolute;
		display: block;
		background-color: #cac4ae;
		width: 30vw;
		height: 30vw;
		transform: rotateZ(45deg);
		z-index: -999;
	}
	.ground div:first-child {
		position: absolute;
		display: block;
		background-color: #83a75f;
		width: 10vw;
		height: 12vw;
		bottom: 0px;
		right: 0px;
		z-index: -998;
	}
	.ground div:nth-child(2) {
		position: absolute;
		display: block;
		background-color: transparent;
		width: 10vw;
		height: 12vw;
		top: 0px;
		right: 0px;
		z-index: -998;
	}
	.ground div:nth-child(3) {
		position: absolute;
		display: block;
		background-color: #b2ab93;
		width: 2vw;
		height: 30vw;
		top: 1vw;
		right: -2vw;
		z-index: -998;
		transform: skewY(45deg);
	}
	.ground div:nth-child(4) {
		position: absolute;
		display: block;
		background-color: #d5cfba;
		width: 30vw;
		height: 2vw;
		top: 30vw;
		right: -1vw;
		z-index: -998;
		transform: skewX(45deg);
	}
	.road {
		position: absolute;
		display: block;
		background-color: #989899;
		width: 6vw;
		height: 30vw;
		transform: rotateZ(45deg);
		top: 0px;
		left: 12vw;
		z-index: -998;
	}
	.road:after {
		position: absolute;
		display: block;
		content: '';
		background-color: #989899;
		width: 6vw;
		height: 30vw;
		transform: rotateZ(90deg);
		top: -2vw;
		left: 1px;
		z-index: -998;
	}
	.highscraper {
		position: absolute;
		display: block;
		background-color: black;
		width: 10vw;
		height: 12vw;
		transform: rotateZ(45deg);
		top: 8vw;
		left: -3vw;
		z-index: 999;
	}
	.highscraper .wall-one {
		position: absolute;
		display: block;
		background-color: #7da1bf;
		width: 10vw;
		height: 25vw;
		transform: skewX(45deg);
		top: -13vw;
		left: -12.5vw;
	}
</style>
