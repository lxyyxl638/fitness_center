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
      <div class="row clearfix">
        <div class="col-md-12 column">
          <nav class="navbar navbar-default navbar-inverse" role="navigation">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> 
               <a class="navbar-brand" href="#">光彪楼健身房</a>
            </div>          
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li>
                   <a id="nav_scheme" href="nav_scheme">排班</a>
                </li>
                <li>
                   <a id="nav_view" href="nav_view">查看排班表</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">查看资料<strong class="caret"></strong></a>
                    <ul class="dropdown-menu">
                      <li>
                         <a href="nav_directory">通讯录</a>
                      </li>
                      <li>
                         <a href="#">工资表</a>
                      </li>
                    </ul>
                 </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown">个人中心<strong class="caret"></strong></a>
                   <ul class="dropdown-menu">
                     <li>
                        <a href="profile">修改资料</a>
                     </li>
                     <li>
                        <a href="logout">注销登陆</a>
                     </li>
                   </ul>
                </li>
              </ul>         
            </div>     
          </nav>

            <h1>主副管</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>联系方式</th>
                </tr>
              </thead>
              <tbody id = "dir_leader">
                
              </tbody>
            </table>

            <h1>经理</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>联系方式</th>
                </tr>
              </thead>
              <tbody id = "dir_manager">                
              </tbody>
            </table>

            <h1>教练</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>联系方式</th>
                </tr>
              </thead>
              <tbody id = "dir_coach">                
              </tbody>
            </table>

            <h1>老员工</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>联系方式</th>
                </tr>
              </thead>
              <tbody id = "dir_old_worker">                
              </tbody>
            </table>

            <h1>新员工</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>联系方式</th>
                </tr>
              </thead>
              <tbody id = "dir_new_worker">               
              </tbody>
            </table>
        </div>
      </div>
    </div>


    <footer class="footer">
      <div class="row footer-bottom">
        <ul class="list-inline text-center">
          <li>Powered By 林小阳</li>
        </ul>
      </div>
    </footer>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="/js/jquery-2.1.1.min.js"></script>
    <script src="/js/directory.js"></script>
    <script src="/js/bootstrap.min.js"></script>
  </body>
</html>
