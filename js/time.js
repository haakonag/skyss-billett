$(document).ready(function(){

	var count = 5000;
	var counter = setInterval(timer, 1000); // Oppdateres hvert sekund
	document.getElementById("gyldig").innerHTML = gTime();
	$('html').css('display', 'inline-block');

	belt();

	function timer() {
		count = count - 1;
		if (count == -1) {
			clearInterval(counter);
			return;
		}
		
		var seconds = count % 60;
		var minutes = Math.floor(count / 60);
		var hours = Math.floor(minutes / 60);
		
		minutes %= 60;
		hours %= 60;
		
		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;
		
		document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
	}

	function gTime() {
		var dt = new Date();
		var minutes = dt.getMinutes();
		var hours = dt.getHours();

		minutes += 20;
		hours += 1;

		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;

		return "Gyldig til kl " + hours + ":" + minutes;
	}

	function belt() {
		$('.button').click(function() {
			$('.belt').css('left', '-100%');
			$('body').css('margin', '0px')
		})

		$('.menu-return').click(function() {
			$('.belt').css('left', '0%');
			$('body').css('margin', '8px')
		})
	}


	$("#select-type").change(function() {
		$('#type-billett').html($( "#select-antall option:selected" ).text() + "&nbsp;&nbsp;" + $('option:selected', this).text());
	});
	
	$("#select-antall").change(function() {
		$('#type-billett').html($('option:selected', this).text() + "&nbsp;&nbsp;" + $( "#select-type option:selected" ).text());
	});
	
});







