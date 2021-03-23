$(function(){
	
	$('#profilecardname').text(Cookies.get('name'));
	$('#profilecarduid').text('@'+Cookies.get('uid'));
	
	$statslistitemcount = $('#statslistitemcount');
	
	$totalchars = $('#totalchars');
	
	$postmessage = $('#postmessage');
	
	$tweetscontainer = $('#tweetscontainer');
	
	$postmessage.keypress(function(e){
		if (e.keyCode == 13 && !e.shiftKey)
		{
		  e.preventDefault();
		  return false;
		}
		
	});
	
	$postmessage.keyup(function(e){
		$totchars = $(this).val().length;
		if($totchars <= 300)
			$totalchars.text($totchars);
		else
		{
			$totalchars.text('300');
			$(this).val($(this).val().substring(0, 300));
		}
	});
	
	$('#postbutton').click(function(){
		if(($taval = $.trim($postmessage.val())).length > 0)
		{
			$tweetscontainer.prepend(messageitem($taval));
			$postmessage.val('');	
			$statslistitemcount.text(parseInt($statslistitemcount.text()) + 1);	
		}
	});
	
	$tweetscontainer.on('click', 'span.like', function(){
		$poststatscount = $(this).children('.poststatscount');
		if($(this).hasClass('red'))
		{
			$(this).removeClass('red');
			$poststatscount.text(parseInt($poststatscount.text()) - 1);
		}
		else
		{
			$(this).addClass('red');
			$poststatscount.text(parseInt($poststatscount.text()) + 1);
		}
	});
	
	function messageitem($taval)
	{
		return '<li class="tweetcontainer">'+
					'<img class="profileimg" src="https://www.gannett-cdn.com/presto/2020/11/11/USAT/b7b61a20-f598-49c7-ae3b-e300c35f7f39-Sanders_1.jpg">'+
					'<div class="ml58px">'+
						'<p style="margin: 0px;">'+$taval+'</p>'+
						'<div class="mt10px">'+		
								'<i class="fa fa-heart-o"></i>'+
								'<span class="poststatscount">0</span>'+
							'</span>'+
						'</div>'+
					'</div>'+
				'</li>';
	}
});