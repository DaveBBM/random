$('.ChampionStatsBox .tabItems .tabItem').each(function(){
	var gamesPlayed = 0;
	$(this).find('.WinRatioGraph').each(function(){
	    gamesPlayed += parseInt($(this).find('.Text.Left').html()) || 0;
	    gamesPlayed += parseInt($(this).find('.Text.Right').html()) || 0;
	});
	console.log($(this).attr('class') + " - " + gamesPlayed + " Ranked games played.");
});
