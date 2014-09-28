var Base_url = "http://jianshenfang.duapp.com/index.php/";
$(function(){
	$.get(Base_url + "log/check_session",function(data){
		if (data['state'] == "success")
		{
			location.href = Base_url + "load/nav_scheme";
		}
	});
	$("#signup_box").hide();
	$("#password_reset").hide();
	$("#output_login").hide();
	$("#output_signup").hide();
	$("#output_reset").hide();

	$("#sign").click(function(){
		$("#signup_box").show();
		$("#box").hide();
		$("#output_signup").hide();
	});

	$("#goback").click(function(){
		$("#signup_box").hide();
		$("#box").show();
	});

	$("#info_goback").click(function(){
		$("#signup_box").hide();
		$("#password_reset").hide();
		$("#output_login").hide();
		$("#box").show();
	})

	$("#output_login").on("click","#forget_pwd",function(){
		$("#signup_box").hide();
		$("#box").hide();
		$("#password_reset").show();
	});

	$("#login").click(function(){
		$.post(Base_url + "log/login",{
                'username':$("#username").val(),
                'password':$("#password").val()
              },function(data){
              	if ($.trim(data['state'])=="fail")
              	{
              		if ($.trim(data["detail"])=="usernameNotExist")
              		{
              			message="用户名或密码错误<button id=\"forget_pwd\">忘记密码？</button>";
              		}
              		if ($.trim(data["detail"])=="passwordWrong")
              		{
              			message="用户名或密码错误<button id=\"forget_pwd\">忘记密码？</button>";
              		}
              		$("#output_log").html(message);
                	$("#output_login").show();
              	}
                else
                {
                	location.href = Base_url + "load/nav_scheme";
                }
          	})
	});

	$("#signup").click(function(){
		$.post(Base_url + "log/signup",{
			'username':$("#username_signup").val(),
			'password':$("#password_signup").val(),
			'realname':$("#realname").val(),
			'email':$("#email").val(),
			'level':$("#level").val()
		},function(data){
			if ($.trim(data['state'])=='fail')
			{
				if ($.trim(data['detail'])=="emailInvalid")
				{
					message="请输入正确的邮箱地址";
				}
				if ($.trim(data['detail'])=="emailOccupied")
				{
					message="此邮箱已存在";
				}
				if ($.trim(data['detail'])=="passwordInvalid")
				{
					message="请输入6-16位由英文字母和数字组成的密码";
				}
				if ($.trim(data['detail'])=="usernameOccupied")
				{
					message="用户名已存在";
				}
				if ($.trim(data['detail'])=="usernameRequire")
				{
					message="请输入用户名";
				}
				if ($.trim(data['detail'])=="usernameNotExist")
				{
					message="此学号不属于健身房";
				}
				if ($.trim(data['detail'])=="realnameInvalid")
				{
					message="请输入真实姓名";
				}
				if ($.trim(data['detail'])=="levelInvalid")
				{
					message="请选择你的职位";
				}
				$("#output_sign").html(message);
				$("#output_signup").show();
			}
			else
			{
				location.href = Base_url + "load/nav_scheme";
			}
		})
	});
	
	$("#info_submit").click(function(){
		$.post(Base_url + "log/password_reset",{
			'username':$("#username_rst").val(),
			'email':$("#email_rst").val()
		},function(data){
			if (data['state'] == "success")
			{
				alert("邮件已发送，请查收");
			}
			else
			{
				message = "学号或者邮箱不正确";
				$("#output_rst").html(message);
				$("#output_reset").show();
			}
		});
	});
});