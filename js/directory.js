var Base_url = "http://jianshenfang.duapp.com/index.php/";
$(function(){
	$.get(Base_url + "scheme/directory",function(data){
		for (i = 0;i < data['5']['sum'];i++)
		{
			$("#dir_leader").append("<tr><th>" + data['5'][i]['name']+"</th><th>" + data['5'][i]['phone'] + "</th></tr>");
		}
		for (i = 0;i < data['4']['sum'];i++)
		{
			$("#dir_coach").append("<tr><th>" + data['4'][i]['name']+"</th><th>" + data['4'][i]['phone'] + "</th></tr>");
		}
		for (i = 0;i < data['3']['sum'];i++)
		{
			$("#dir_manager").append("<tr><th>" + data['3'][i]['name']+"</th><th>" + data['3'][i]['phone'] + "</th></tr>");
		}
		for (i = 0;i < data['2']['sum'];i++)
		{
			$("#dir_new_worker").append("<tr><th>" + data['2'][i]['name']+"</th><th>" + data['2'][i]['phone'] + "</th></tr>");
		}
		for (i = 0;i < data['1']['sum'];i++)
		{
			$("#dir_old_worker").append("<tr><th>" + data['1'][i]['name']+"</th><th>" + data['1'][i]['phone'] + "</th></tr>");
		}
	});
});