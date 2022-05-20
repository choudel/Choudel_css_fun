<script>
	let array = [];
	function days(array) {
		for (let i = 0; i <= 30; i++) {
			array.push(i);
		}
		return array;
	}
	days(array);
</script>

<main>
	<div class="container">
		<header>
			<div class="header-bar" />
			<div class="header-title">
				<h1>Calendar</h1>
			</div>
			<div class="header-weekdays">
				<span></span>
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
			<h2 class="month1">December</h2>
			<form>
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="vacation" />
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="walk" />
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="fishing" />
				<input type="radio" name="calendar-label-bg" class="calendar-label-bg" id="weekend" />
				<input type="radio" name="calendar-label-bg" id="new" class="calendar-label-bg" />
				<div class="calendar1">
                    <div class="side"></div>
                    <div class="right">
					{#each array as day, i}
						<div class="days">
							<input type="checkbox" name={i+1} id={i+1} class="day previous-month" />
							<label for="day previous-month" class="view">{i+1}</label>
						</div>
					{/each}
                </div>
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
			<h2 class="month2">January</h2>
			<div class="calendar2 inactive">
                <div class="side"></div>
                    <div class="right">
				{#each array as day, i}
                <div class="days">
					<input type="checkbox" name={i+1} id={i+1} class="day next-month" />
					<label for="day previous-month">{i+1}</label>
                </div>    
				{/each}
            </div>
			</div>
		</section>
	</div>
</main>
<style lang="scss">
* {
  box-sizing: border-box;
  position: relative;
}
main{
    display:grid;
    grid-template-areas: "header"
                         "weekdays"
                         "section";
    grid-template-columns: 100vw;
    grid-template-rows: 30vh 15vh 70vh;
    background-color: burlywood;
    justify-items: center;
}
header{
    grid-area: header;
    background-color: chocolate;
}
.header-title{
    height: 15vh;
}
.header-weekdays{
    display: grid;
    grid-area: weekdays;
    background-color: cornflowerblue;
    grid-template-columns: repeat(8,10vw);
    grid-template-rows: 15vh;
}
section{
    grid-area: section;
    background-color: darkcyan;
    display:grid;
    grid-template-areas: "month1"
                         "cal1"
                         "month2"
                         "cal2"   ;
}
.month1{
    grid-area: month1;
}
.month2{
    grid-area: month2;
}

.calendar-label-bg{

}
.calendar1{
    grid-area: cal1;
    display:grid;
    grid-template-areas: "side right";
    grid-template-columns: 10vw 70vw;
    
}
.calendar2{
    grid-area: cal2;
    display:grid;
    grid-template-areas: "side right";
    grid-template-columns: 10vw 70vw;
    
}
.days{
    display:grid;
    height: 8vh;
    width: 10vw;
    position: relative;

}
.day {
  position: absolute;
  display: none;
  top: 0;
  left:0;
  z-index: 1;
}
.view {
  display:grid;
  position: absolute;
  top: 0;
  left:0;
  z-index: 0;
}
.side{
    grid-area: side;
}
.right{
    display: grid;
    grid-area: right;
    grid-template-columns:repeat(7,10vw);
    grid-template-rows: repeat(4,8vh);
}
.calendar-label-bg {
  display: block;
  position: absolute;
  outline: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
  
}
.calendar-labels {
  display: none;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
  pointer-events: none;
 
}
</style>