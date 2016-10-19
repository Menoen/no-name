$(document).ready(function(){

	// 小球动画
	
	$(".ball").one("click",showIn);
	function showIn(){
		$(".ball").animate({left:"-=410px"},1000);
		$(".shuff").fadeIn(1200);
	}

	// 右边窗动画

	$(".blanket").click(function(){
		$(this).next("dd").slideToggle();
		$(this).toggleClass("blanket_change");
	})
//	$(document).click(function(event){
//		$(".ki").fadeIn(200);
//		$(".ki").fadeOut(600);
//	})
	
	$(".outside").css("height",$("dl").height()+60);


//add sheet
	var i = 1;
	

	$(".page-title>button").click(function(){
		
		//新增表格颜色

		setTimeout(function(){

			$(".body-atable>tr:even").addClass("table-attend-even");

			$('.body-atable>tr:odd').addClass("table-attend-odd");


		},20)


		// 判断是否写名字了
		
		var name = ($("input").val()=="")?name():$("input").val();
		function name(){
			alert("虽然签到成功了，可是能再仔细找找吗~");
			return "John Doe";
		}

		// 获取处理本机时间 
		
		var time = new Date();
		var year = time.getYear()+1900;
		var month = time.getMonth()+1;
		var date = time.getDate()
		var hour = time.getHours();
		var minute = time.getMinutes();

		// 处理时间格式

		var arrDate = [month,date,hour,minute];
		for (var m = 0; m < arrDate.length; m++) {
			if (arrDate[m] < 10) {
				arrDate[m] = '0' + arrDate[m];
			}
		}
		// console.log(arrDate);
		// if (month < 10) {
		// 	month = '0' + month;
		// }
		// if (date < 10) {
		// 	date = '0' + date;
		// }
		// if (hour < 10) {
		// 	hour = '0' + hour;
		// }
		// if(minute < 10){
		// 	minute = '0' + minute;
		// }
		var clock = " " + arrDate[2] + ":" + arrDate[3];

		var time1 = year + "." + arrDate[0] + "." + arrDate[1] + clock;
		if (i == 1) {
			$(".signPic").css("background-image","url(img/sign_in_pic.gif)");
			i = 0;
			var ihtml = "<tr><td>" + time1 + "</td><td>" + name + "</td></tr>"
				// attend table
	
			$('.body-atable').append(ihtml);
		}
		else if (i == 0) {
			if(confirm("Cancel?")){
				$(".signPic").css("background-image","url(img/sign_pic.gif)");
				i = 1;
				$('.body-atable tr:last').remove();
			}

		}
	})
		// attend table

	$(".body-atable>tr:even").addClass("table-attend-even");

	$('.body-atable>tr:odd').addClass("table-attend-odd");

	
})

