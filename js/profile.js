var Base_url = "http://jianshenfang.duapp.com/index.php/";
$(function(){
	// $.get(Base_url + "profile/cur_name",function(data)
	// {
	// 	$("#cur_name").text("林小阳");
	// });

	$("#output_password").hide();

	$("#password_submit").click(function(){
		$.post(Base_url + "profile/change_password",{
			'oldpassword':$("#oldpassword").val(),
			'newpassword':$("#newpassword").val(),
			'passwordconf':$("#passwordconf").val()
		},function(data){
			if (data['state'] == "success")
			{
				alert("密码修改成功");
			}
			else
			{
				if (data['detail'] == "newpasswordInvalid")
				{
					message = "请输入6-16位由英文字母和数字组成的密码";
				}
				if (data['detail'] == "inconformity")
				{
					message = "两次输入密码不一致";
				}
				if (data['detail'] == "passwordWrong")
				{
					message = "密码不正确";
				}
				$("#output_pass").html(message);
				$("#output_password").show();
			}
		})
	});

	// $("#realname_submit").click(function(){
		
	// });
})