<div class="container">
    <main>
		<header>
			<div class="header-bar" />
			<div class="header-title">
				<h1>Calendar</h1>
			</div>
			<div class="header-weekdays">
				<span>sun</span>
				<span>mon</span>
				<span>tue</span>
				<span>wed</span>
				<span>thu</span>
				<span>fri</span>
				<span>sat</span>
			</div>
		</header>
		<section>
			<h2 class="month">December</h2>
			<form>
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="vacation" />
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="walk" />
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="fishing" />
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="weekend" />
				<input type="radio" name="calendar-label-bg" id="new" class="calendar-label-bg" />
				<div class="calendar">
					<input type="checkbox" name="" id="" class="day previous-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day current-month" />
					<input type="checkbox" name="" id="" class="day next-month" />
					<input type="checkbox" name="" id="" class="day next-month" />
					<input type="checkbox" name="" id="" class="day next-month" />
					<div class="calendar-labels">
						<label for="vacation"><span>vacation</span></label>
						<label for="walk"><span>walk</span></label>
						<label for="fishing"><span>fishing</span></label>
						<label for="weekend"><span>weekend</span></label>
						<label for="new" class="full"><input type="text" placeholder="Add new task" /></label>
						<label class="reset">
							<input type="reset" value="Reset" />
						</label>
					</div>
				</div>
			</form>
			<h2 class="month">January</h2>
			<div class="calendar inactive">
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
				<input type="checkbox" name="" id="" class="day next-month" />
			</div>
		</section>
</main>
</div>    



<style lang="scss">
	@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

	
	$color-bg: #4075b7;
	$color-app: white;
	$color-header: #58b2a4;
	

	$color-text-dark: #333;
	$color-text-light: white;

	$color-noncurrent-month: rgba($color-text-dark, 0.3);
	$color-check: rgba(white, 0.7);

	$color-vacation: #d3738b;
	$color-fishing: #8f658a;
	$color-walk: #7186db;
	$color-weekend: #f7c187;
	$color-new: $color-header;

	$colors: (
		vacation: $color-vacation,
		fishing: $color-fishing,
		walk: $color-walk,
		weekend: $color-weekend,
		new: $color-new
	);

	$day-height: 3rem;

	$day-labels: (vacation, fishing, walk, weekend, new);

	$animation-easing: cubic-bezier(0.77, 0, 0.175, 1);

	$label-speed: 1s;
	$day-speed: 0.6s;
	$bg-speed: 1s;

	$header-height: $day-height * 2;

	@mixin range($min, $max) {
		&:nth-child(n + #{$min}):nth-child(-n + #{$max}) {
			@content;
		}
	}

	@mixin clearfix {
		&:before,
		&:after {
			content: ' ';
			display: table;
		}
		&:after {
			clear: both;
		}
	}

	@function day-span($days) {
		@return percentage($days / 7);
	}

	* {
		box-sizing: border-box;
		position: relative;
	}

	
    .container {
		display: grid;
		grid-template-columns: auto;
		justify-items: center;
		padding: 10%;
	}
	main {
        display: grid;
        background-color: $color-bg;
		width: 70%;
		height: 80vh;
		float: left;
		padding: 0 2rem;
		margin: 2rem 0;
        justify-items: center;
	}

	header {
		color: $color-text-light;
	}

	.header-bar {
		height: 1rem;
	}

	.header-title {
		padding: 1rem;

		h1 {
            color:#333;
			font-weight: 300;
			font-size: 1rem;
			margin: 0;
			padding: 0;
			text-align: center;
			text-transform: uppercase;
			letter-spacing: 3px;
		}
	}

	.header-weekdays {
		height: 2rem;
		span {
            color:#333;
			font-size: 0.8rem;
			display: block;
			float: left;
			width: percentage(1/7);
			padding: 0.5rem 0;
			text-align: center;
			text-transform: uppercase;
		}
	}

	.calendar {
		@include clearfix();

		&.inactive {
			pointer-events: none;
		}
	}

	form {
		@include clearfix();
		background: rgba($color-header, 0.9);
	}

	.month {
		padding: 1rem;
		font-size: 1rem;
		color: $color-text-dark;
		margin: 0;
	}

	.day {
		float: left;
		width: percentage(1/7);
		text-align: center;
		padding: 1rem 0;
		margin: 0;
		font-size: 1rem;
		line-height: 1;
		-webkit-appearance: none;
		appearance: none;
		outline: none;
		transition-property: background, color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		transition-delay: 0s;

        &:after {
			display: block;
			transition-property: transform, opacity;
			transition-duration: $day-speed;
			transition-timing-function: $animation-easing;
		}

		&.current-month:after {
			content: counter(current-month);
			counter-increment: current-month;
		}

		&.next-month:after {
			content: counter(next-month);
			counter-increment: next-month;
		}

		&.previous-month:after {
			content: counter(previous-month);
			counter-increment: previous-month;
		}

		&.previous-month,
		&.next-month {
			color: $color-noncurrent-month;
		}

		&:last-of-type:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 100%;
			width: 700%;
			height: 100%;
			background: $color-app;
		}

		&:checked {
			&,
			& ~ .day {
				color: $color-text-light;
			}

			& ~ .day {
				background-color: transparent;
			}
		}

		&:hover,
		&:checked,
		& ~ .day:hover,
		& ~ .day:checked {
			background-color: rgba(0, 0, 0, 0.1);
			color: $color-text-light;
		}

		&,
		&:checked ~ .day:checked ~ .day,
		&:checked ~ .day:hover ~ .day,
		&:checked:hover ~ .day {
			background-color: $color-app;
			color: $color-text-dark;

			&.next-month {
				color: $color-noncurrent-month;
			}
		}

		@for $day from 1 through 7 {
			&:nth-child(7n + #{$day}):after {
				transition-delay: (1/7) * ($day - 1) * $day-speed;
				animation-delay: (1/7) * ($day - 1) * $day-speed;
			}
		}
	}

	.calendar-label-bg {
		display: block;
		position: absolute;
		outline: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 5 * $day-height;
		margin: 0;
		-webkit-appearance: none;
		appearance: none;
		transform: translateX(-100%);
		animation: bg-inactive $bg-speed $animation-easing;

		&:checked {
			animation: bg-active $bg-speed $animation-easing forwards;

			~ .calendar .day:checked {
				&:after,
				& ~ .day:after {
					animation-name: day-active;
					animation-duration: $day-speed;
					animation-timing-function: $animation-easing;
				}

				& ~ .day:checked ~ .day:after {
					animation: none;
				}
			}
		}
	}

	@each $label in $day-labels {
		$label-color: map-get($colors, $label);

		##{$label} {
			background-color: $label-color;
		}

		##{$label}:checked {
			~ .calendar {
				@for $weekday from 1 through 7 {
					.day {
						&:nth-child(7n + #{$weekday}) {
							z-index: (8 - $weekday) * 10;
						}
					}
				}

				.calendar-labels label[for='#{$label}'] {
					&:not(.full):before {
						visibility: visible;
						animation: check-active 0.1s 0.2s ease-out both;
					}

					&.full {
						input {
							font-weight: 700;
						}

						&:before {
							color: $color-text-light;
							border-color: $color-text-light;
						}
					}

					> span {
						transform: translateX(2rem);
					}
				}
			}
		}
	}

	.calendar-labels {
		display: none;
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 100;
		pointer-events: none;

		transition: all 0s ease-in-out;
		transition-delay: $label-speed;
		transform: translateY(0);
		opacity: 0;

		&:before {
			content: '';
			display: block;
			position: absolute;
			bottom: 100%;
			height: 5 * $day-height;
			width: 100%;
			pointer-events: auto;
		}

		> label {
			display: block;
			float: left;
			width: day-span(4);
			font-size: 1rem;
			padding: 1rem;
			color: $color-text-light;
			font-weight: 700;
			white-space: nowrap;
			overflow: hidden;

			&:before {
				display: block;
				position: absolute;
				left: 0.75rem;
				height: 1rem;
				visibility: hidden;
			}

			&.full {
				width: 100%;
				font-weight: 700;

				&:before {
					transition-property: color, border-color;
					transition-duration: 0.3s;
					transition-timing-function: ease-in-out;
					content: '+';
					top: calc(50% - 0.75rem);
					font-size: 1rem;
					font-weight: 700;
					width: 1rem;
					border: 4px solid $color-check;
					color: $color-check;
					border-radius: 50%;
					text-align: center;
					visibility: visible;
				}

				> input {
					display: block;
					margin-left: 2rem;
					width: calc(100% - 2rem);
					font-size: 1rem;
					background-image: none;
					background-color: transparent;
					outline: none;
					border: none;
					color: $color-text-light;
					line-height: 1;
					padding: 0;

					&::placeholder {
						color: $color-check;
					}
				}
			}

			&.reset {
				width: 100%;
				background: $color-app;
				float: left;
				padding: 0;
				height: 3rem;

				> input {
					display: block;
					padding: 1rem;
					line-height: 1;
					font-size: 0.8rem;
					width: 100%;
					height: 100%;
					-webkit-appearance: none;
					border: none;
					background: transparent;
					outline: none;
					text-transform: uppercase;
					color: $color-noncurrent-month;
					letter-spacing: 3px;
				}
			}

			&:not(.full):before {
				content: '';
				top: 50%;
				width: 0.5rem;
				transform: scaleX(-1) rotate(135deg);
				transform-origin: left top;
				border-right: 5px solid $color-check;
				border-top: 5px solid $color-check;
				animation: check-inactive 0.3s 0 $animation-easing both;
			}

			> * {
				transition: transform 0.3s $animation-easing;
				display: inline-block;
			}

			@each $label in $day-labels {
				&[for='#{$label}'] {
					background: map-get($colors, $label);
				}
			}

			@include range(2, 3) {
				width: day-span(3);
			}

			animation-duration: $label-speed;
			animation-timing-function: $animation-easing;
			animation-fill-mode: both;

			&:nth-child(2n - 1) {
				z-index: 20;
				animation-name: leftLabel-inactive;
			}
			&:nth-child(2n) {
				z-index: 10;
				animation-name: rightLabel-inactive;
			}
		}
	}

	.day:checked ~ .day:checked {
		~ .calendar-labels {
			transition-delay: 0s;
			display: block;
			opacity: 1;
		}

		@for $week from 1 through 5 {
			@include range(($week - 1) * 7 + 1, $week * 7) {
				~ .calendar-labels {
					transform: translateY($week * $day-height);
					pointer-events: auto;
				}
			}
		}

		~ .day:nth-child(7n) ~ .day,
		&:nth-child(7n) ~ .day {
			&:after {
				transform: translateY(5 * $day-height);
				opacity: 0;
			}
		}

		~ .calendar-labels {
			label:nth-child(2n - 1) {
				z-index: 20;
				animation: leftLabel-active $label-speed $animation-easing both;
			}
			label:nth-child(2n) {
				z-index: 10;
				animation: rightLabel-active $label-speed $animation-easing both;
			}
		}
	}

	@keyframes check-active {
		0% {
			width: 0;
			height: 0;
			opacity: 0;
		}
		50% {
			opacity: 1;
			width: 0.5rem;
			height: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes check-inactive {
		50% {
			opacity: 1;
			width: 0.5rem;
			height: 0;
		}
		100% {
			width: 0;
			height: 0;
			opacity: 0;
		}
	}

	@keyframes labels-inactive {
		to {
			transform: translateY(0);
		}
	}

	@keyframes leftLabel-active {
		from {
			transform: translateX(-100%);
		}
	}

	@keyframes leftLabel-inactive {
		to {
			transform: translateX(-100%);
		}
	}

	@keyframes rightLabel-active {
		from {
			transform: translateX(-300%);
		}
	}

	@keyframes rightLabel-inactive {
		to {
			transform: translateX(-300%);
		}
	}

	@keyframes bg-active {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes bg-inactive {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}

	@keyframes day-active {
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}

	

	
</style>
