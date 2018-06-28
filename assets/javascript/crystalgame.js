//Determining function//
$(document).ready(function(){
	var random=Math.floor(Math.random()*101+19)

	$('#yourNumber').text(random);
//Variables//
	var blue= Math.floor(Math.random()*11+1)
	var green= Math.floor(Math.random()*11+1)
	var red= Math.floor(Math.random()*11+1)
	var yellow= Math.floor(Math.random()*11+1)

	var userTotal=0;
	var wins= 0;
	var losses= 0

	$('#numberWins').text(wins)
	$('#numberLosses').text(losses)

function reset(){
	random=Math.floor(Math.random()*101+19)
	console.log(random)
	$('#yourNumber').text(random);
	blue= Math.floor(Math.random()*11+1)
	green= Math.floor(Math.random()*11+1)
	red= Math.floor(Math.random()*11+1)
	yellow= Math.floor(Math.random()*11+1)
	userTotal= 0
	$("finalTotal").text(userTotal)

}	

function win(){
	alert("You collected all the stones before Thanos! Good job")
	wins++
	$('#numberWins').text(wins)
	reset()
}

function lose(){
	alert("Thanos got the stones and wiped half the universe")
	losses++
	$('#numberLosses').text(losses)
	reset()
}

$('#blue').on('click', function(){
	userTotal=userTotal + blue
	console.log("New user total" + userTotal)
	$('#userTotal').html(blue);
	$('#finalTotal').text(userTotal)
	if (userTotal === random)
		{
			win ()
		}
		else if (userTotal > random){
			lose()
		}
})

$('#green').on('click', function(){
	userTotal=userTotal + green
	console.log("New user total" + userTotal)
	$('#userTotal').html(green);
	$('#finalTotal').text(userTotal)
	if (userTotal === random)
		{
			win ()
		}
		else if (userTotal > random){
			lose()
		}
})

$('#red').on('click', function(){
	userTotal=userTotal + red
	console.log("New user total" + userTotal)
	$('#userTotal').html(red);
	$('#finalTotal').text(userTotal)
	if (userTotal === random)
		{
			win ()
		}
		else if (userTotal > random){
			lose()
		}
})

$('#yellow').on('click', function(){
	userTotal=userTotal + yellow
	console.log("New user total" + userTotal)
	$('#userTotal').html(yellow);
	$('#finalTotal').text(userTotal)
	if (userTotal === random)
		{
			win ()
		}
		else if (userTotal > random){
			lose()
		}
})

}); 
