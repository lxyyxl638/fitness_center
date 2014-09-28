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

      <div class="panel panel-default">
        <div class="panel-heading"><h3>指南</h3></div>
          <div class="panel-body">
           <h4>排班系统将于<strong>每周六晚上11点</strong>到<strong>周日晚上12点</strong>开放，请大家在这段时间内排班并于周一系统关闭后及时查看自己的排班状态</h4>
           <h4><strong>排班表上的按钮分三种颜色</strong></h4></br>
            <button class="btn btn-success">张三</button>表示此班可以排。
            <button class="btn btn-warning">张三</button>表示此班你已排，你可以选择退班。
            <button disabled = "disabled" class="btn btn-default">张三</button>表示你不能排此班。</br>   
          </div>
        <div class="panel-heading"><h3>排班规则</h3></div>
          <div class="panel-body">
            <h4><strong>下面规则按执行顺序排序</strong></h4></br>
            <strong>规则一</strong>：优先级原则。（比如张三依次排了周一下午，周一晚上，周二下午的班，那么三个班的优先级为1,2,3。之后李四来排他的第一个班（这个班优先级为1），那么他就可以替换掉张三优先级为2,3的班）</br>
            <strong>规则二</strong>：在优先级一样的情况下，先到先得（比如上面李四就不能抢张三优先级为1的班）</br>
            <strong>因此</strong>，大家排班的时候要按照自己的意愿合理安排你排班的先后点击顺序。
          </div>  
      </div>

      <div id = "scheme">
        <div class="row clearfix">
        <div class="col-md-12 column">
          <table class="table table-bordered">
            <thead id = "arrange_head">
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
              <tr class="success" id="afternoon">
              </tr>
              <tr class="success" id="evening">
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
