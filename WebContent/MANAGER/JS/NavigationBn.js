$(function() {
	$(".drop").hover(function() {
		$(this).addClass('open').trigger('show');

	}, function() {
		$(this).removeClass('open');
	});
	
	$("#bannerTitle button").click(function(e){
		e.preventDefault();
		var div1 = $("<div></div>");
		var div2 = $("<div></div>");
		var div3 = $("<div></div>");
		
		div2.append($("<input type = 'checkbox' name = 'banner1' />"));
		div2.append($("<div id = 'banner1'></div>"));
		
		var p1 = $("<p></p>");
		var p2 = $("<p></p>");
		var p3 = $("<p></p>");
		
		p1.append($("<span>배너 이미지</span>"));
		p1.append($("<input type = 'text' class = 'form-control' name = 'bannerAddress' />"));
		p1.append($("<button class = 'btn btn-default'>찾아보기</button>"));
		
		p2.append($("<span>링크 주소</span>"));
		p2.append($("<input type = 'text' class = 'form-control' name = 'linkAddress' />"));
		p2.append($("<input type = 'radio' name = 'bannerLink' id = 'blank' class = 'custom-control-input' />"));
		p2.append($("<label class = 'custom-control-label' for = 'blank'>새 창(Blank)</label>"));
		p2.append($("<input type = 'radio' name = 'bannerLink' id = 'self' class = 'custom-control-input' />"));
		p2.append($("<label class = 'custom-control-label' for = 'self'>본 창(Self)</label>"));
		
		p3.append($("<span>대체 텍스트</span>"));
		p3.append($("<input type = 'text' class = 'form-control' name = 'bannerAddress' />"));
		
		div3.append(p1);
		div3.append(p2);
		div3.append(p3);
		
		div1.append(div2);
		div1.append(div3);
		
		$(".bannerBody").append(div1);
		$(".bannerBody").append($("<hr>"));
	})
})