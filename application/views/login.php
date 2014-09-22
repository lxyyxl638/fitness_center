
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="光彪楼健身房">
    <meta name="author" content="Carson">

    <title>光彪楼健身房排班系统</title>

    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <!-- <style type="text/css">
     /* body{
            background:url('../img/home.jpg');
            background-size:100% 100%;
            -moz-background-size:100% 100%; /* 老版本的 Firefox */
            background-repeat:no-repeat;
          }*/
    </style> -->
  </head>
<!-- NAVBAR
================================================== -->
  <body>
    <!-- Carousel
    ================================================== -->
    <div class="container">
        <div id="background" style="position:absolute;z-index:-1;width:100%;height:100%;top:0px;left:0px;">
            <img src="/img/home.jpg" width="100%" height="100%"/>
        </div>
        <div>
            <img src="/img/logo.png">
          
              <div style="position:fixed;top:30%;left:70%" id="box">
                <div class="row">
                  <div class="col-md-12">
                    <span style="color:#FFFFFF;">学号</span><input name="username" class="form-control" id="username" placeholder="输入学号" />
                  </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <span style="color:#FFFFFF;">密码</span><input type="password" class="form-control" id="password" placeholder="输入密码"/>
                    </div>
                </div>
                <p></p>
                <div>
                    <button type="button" id="login" class="btn btn-success btn-block">登陆</button>        
                    <button type="button" id="sign" class="btn btn-danger btn-block">注册</button>
                </div>
                <div class="panel panel-danger" id="output_login">
                  <div class="panel-heading" id="output_log"></div>
                </div>
              </div> 
             
              <div style="position:fixed;top:30%;left:70%" id="signup_box">
                <div class="row">
                  <div class="col-md-12">
                    <span style="color:#FFFFFF;">学号</span><input class="form-control"  id="username_signup" placeholder="输入学号" />
                  </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <span style="color:#FFFFFF;">密码</span><input type="password" class="form-control" id="password_signup" placeholder="输入密码"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <span style="color:#FFFFFF;">姓名</span><input type="text" class="form-control" id="realname" placeholder="输入姓名"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <span style="color:#FFFFFF;">邮箱</span><input type="text" class="form-control" id="email" placeholder="输入邮箱"/>
                    </div>
                </div>
                <div>
                  <p></p>
                  <select type="button" id="level" name="level" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <option value="0">选择职位</option>
                    <option value="1">女员工</option>
                    <option value="2">男员工</option>
                    <option value="3">经理</option>
                    <option value="4">教练</option>
                  </select>
                </div>
                <div>
                    <p></p>
                    <button type="button" id="signup" class="btn btn-success btn-block">注册</button>        
                    <button type="button" id="goback" class="btn btn-danger btn-block">返回</button>
                </div>    
                <div class="panel panel-danger" id="output_signup">                
                  <div class="panel-heading" id="output_sign"></div>
                </div>
                
              </div>
        </div>  
    </div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="/js/jquery-2.1.1.min.js"></script>
    <script src="/js/signup.js"></script>
    <script src="/js/bootstrap.min.js"></script>
  </body>
</html>
