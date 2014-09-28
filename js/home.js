var Base_url = "http://jianshenfang.duapp.com/index.php/";
$(function(){
	$.get(Base_url + "scheme/arrange",function(data){
		$("#arrange_head").prepend("<h1>"+data['table']+"</h1>");
		create_table(data);
	});


	$("table").on("click",".btn-success",function(){
		$.post(Base_url + "scheme/arrange",{
			"id":$(this).attr("id")
		},function(data){
			create_table(data);
		});
	});

    $("table").on("click",".btn-warning",function(){
   	 	if (confirm("确定退班吗?"))
   	 	{
   	 		$.post(Base_url + "scheme/arrange",{
			"id":$(this).attr("id")
			},function(data){
				create_table(data);
			});
   	 	}
    });	

    $("#year,#season,#week").change(function(){
    	$.post(Base_url + "scheme/view",{
    		"year":$("#year").val(),
    		"season":$("#season").val(),
    		"week":$("#week").val()
    	},function(data){
    		if (data['1']['state'] == "success")
    		{
    			create_view(data['1'],"#manager_afternoon","#manager_evening");
    		}
    		if (data['2']['state'] == "success")
    		{
    			create_view(data['2'],"#boy_afternoon","#boy_evening");
    		}
    		if (data['3']['state'] == "success")
    		{
    			create_view(data['3'],"#girl_afternoon","#girl_evening");
    		}
    		if (data['4']['state'] == "success")
    		{
    			create_view(data['4'],"#coach_afternoon","#coach_evening");
    		}
    	});
    });

    function create_view(data,afternoon,evening)
	{
		$(afternoon).empty();
		$(evening).empty();
		$(afternoon).append("<td>下午</td>");
		$(evening).append("<td>晚上</td>");
		/*加载表格*/
		for (var i = 1;i <= 7;i++)
		{
			/*生成下午的表格*/
			message = "<td><button disabled=\"disabled\" class=\"btn btn-default btn-block\" id="+data[i]['1']['0']['id']+">"+data[i]['1']['0']['realname'];
			
			if (typeof(data[i]['1']['1'])!='undefined')
			{
				message = message + "</br>" + data[i]['1']['1']['realname'];		
			}
			if (data[i]['1']['0']['realname'] == "")
			{
				message = message + "&nbsp&nbsp&nbsp</button></td>";
			}
			else
			{
				message = message + "</button></td>";
			}
			$(afternoon).append(message);

			/*生成晚上的表格*/
			message = "<td><button disabled=\"disabled\" class=\"btn btn-default btn-block\" id="+data[i]['2']['0']['id']+">"+data[i]['2']['0']['realname'];
			
			if (typeof(data[i]['2']['1'])!='undefined')
			{
				message = message + "</br>" + data[i]['2']['1']['realname'];		
			}
			if (data[i]['2']['0']['realname'] == "")
			{
				message = message + "&nbsp&nbsp&nbsp</button></td>";
			}
			else
			{
				message = message + "</button></td>";
			}
			$(evening).append(message);
		}
	}

	function create_table(data)
	{

		$("#afternoon").empty();
		$("#evening").empty();
		$("#afternoon").append("<td>下午</td>");
		$("#evening").append("<td>晚上</td>");
		/*加载表格*/
		for (var i = 1;i <= 7;i++)
		{
				/*生成下午的表格*/
				switch (data[i]['1']['0']['validable'])
				{
					case 1:message = "<td><button class=\"btn btn-success btn-block\" id="+data[i]['1']['0']['id']+">"+data[i]['1']['0']['realname'];break;
					case 2:message = "<td><button class=\"btn btn-warning btn-block\" id="+data[i]['1']['0']['id']+">"+data[i]['1']['0']['realname'];break;
					case 3:message = "<td><button disabled=\"disabled\" class=\"btn btn-default btn-block\" id="+data[i]['1']['0']['id']+">"+data[i]['1']['0']['realname'];break;
				}
	
				if (typeof(data[i]['1']['1'])!='undefined')
				{
					message = message + "</br>" + data[i]['1']['1']['realname'];		
				}
				if (data[i]['1']['0']['realname'] == "")
				{
					message = message + "&nbsp&nbsp&nbsp</button></td>";
				}
				else
				{
					message = message + "</button></td>";
				}
				$("#afternoon").append(message);
	
				/*生成晚上的表格*/
				switch (data[i]['2']['0']['validable'])
				{
					case 1:message = "<td><button class=\"btn btn-success btn-block\" id="+data[i]['2']['0']['id']+">"+data[i]['2']['0']['realname'];break;
					case 2:message = "<td><button class=\"btn btn-warning btn-block\" id="+data[i]['2']['0']['id']+">"+data[i]['2']['0']['realname'];break;
					case 3:message = "<td><button disabled=\"disabled\" class=\"btn btn-default btn-block\" id="+data[i]['2']['0']['id']+">"+data[i]['2']['0']['realname'];break;
				}
	
				if (typeof(data[i]['2']['1'])!='undefined')
				{
					message = message + "</br>" + data[i]['2']['1']['realname'];		
				}
				if (data[i]['2']['0']['realname'] == "")
				{
					message = message + "&nbsp&nbsp&nbsp</button></td>";
				}
				else
				{
					message = message + "</button></td>";
				}
				$("#evening").append(message);
		}
	}
});







