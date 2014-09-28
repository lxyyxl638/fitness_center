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
        </div>
      </div>

      <div id = "view">
        <div class="btn-group">
          <select type="button" id="year" class="btn btn-default dropdown-toggle">
              <option value="0">年份</option>
              <?php
                for ($i = 2014;$i<=2024;$i++)
                {
                  $j = $i + 1;
                  echo "<option value=$i>$i - $j</option>";
                }
              ?>
          </select>
          <select type="button" id="season" class="btn btn-default dropdown-toggle">
              <option value = "0">学期</option>
              <option value = "1">春季学期</option>
              <option value = "2">秋季学期</option>
              <option value = "3">小学期</option>
          </select>
          <select type="button" id="week" class="btn btn-default dropdown-toggle">
              <option value="0">周</option>
              <?php
                for ($i = 1;$i<=24;$i++)
                {
                  echo "<option value=$i>第 $i 周</option>";
                }
              ?>
          </select>
        </div>
  
  
        <div class="row clearfix">
          <div class="col-md-12 column">
            <table id="manager" class="table table-bordered">
              <thead>
                <h1>经理</h1>
                <tr class="success">
                  <th></th>
                  <th>周一</th>
                  <th>周二</th>
                  <th>周三</th>
                  <th>周四</th>
                  <th>周五</th>
                  <th>周六</th>
                  <th>周日</th>
                </tr>
              </thead>
              <tbody>
                <tr id="manager_afternoon">
                </tr>
                <tr id="manager_evening">
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <table id="boy" class="table table-bordered">
              <h1>男员工</h1>
              <thead>
                <tr class="success">
                  <th></th>
                  <th>周一</th>
                  <th>周二</th>
                  <th>周三</th>
                  <th>周四</th>
                  <th>周五</th>
                  <th>周六</th>
                  <th>周日</th>
                </tr>
              </thead>
              <tbody>
                <tr id="boy_afternoon">
                </tr>
                <tr id="boy_evening">
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <table id="girl" class="table table-bordered">
              <h1>女员工</h1>
              <thead>
                <tr class="success">
                  <th></th>
                  <th>周一</th>
                  <th>周二</th>
                  <th>周三</th>
                  <th>周四</th>
                  <th>周五</th>
                  <th>周六</th>
                  <th>周日</th>
                </tr>
              </thead>
              <tbody>
                <tr id="girl_afternoon">
                </tr>
                <tr id="girl_evening">
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <table id="coach" class="table table-bordered">
              <h1>教练</h1>
              <thead>
                <tr class="success">
                  <th></th>
                  <th>周一</th>
                  <th>周二</th>
                  <th>周三</th>
                  <th>周四</th>
                  <th>周五</th>
                  <th>周六</th>
                  <th>周日</th>
                </tr>
              </thead>
              <tbody>
                <tr id="coach_afternoon">
                </tr>
                <tr id="coach_evening">
                </tr>
              </tbody>
            </table>
          </div>
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
    <script src="/js/home.js"></script>
    <script src="/js/bootstrap.min.js"></script>
  </body>
</html>
