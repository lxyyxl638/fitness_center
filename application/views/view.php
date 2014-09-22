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
                        <a href="#">修改资料</a>
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
                  <th>下午</th>
                  <th>艾利达尔</th>
                  <th>蒋芮</th>
                  <th>孙行</th>
                  <th>郑安忻</th>
                  <th>林小阳</th>
                  <th>李尔玉</th>
                  <th>王慧曦</th>
                </tr>
                <tr id="manager_evening">
                  <th>晚上</th>
                  <th>温馨</th>
                  <th>孙行</th>
                  <th>麦尔哈巴</th>
                  <th>孜丽热巴</th>
                  <th>孙行</th>
                  <th>张治彬</th>
                  <th>洪树斌</th>
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
                  <th>下午</th>
                  <th>李玉</br>羊一鸣</th>
                  <th>揭秉天</br>郭士超</th>
                  <th>云虎</br>陈诗元</th>
                  <th>谢树钦</br>毛文华</th>
                  <th>张昆</br>刘畅</th>
                  <th>周涛</br>李杰</th>
                  <th>徐汝锐</br>吴晓昂</th>
                </tr>
                <tr id="boy_evening">
                  <th>晚上</th>
                  <th>刘书聪</th>
                  <th>阿迪力江</br>艾克拜尔</th>
                  <th>陈谭一</br>林嘉伟</th>
                  <th>徐永浩</br>黄韧</th>
                  <th>高超</br>卫宇杰</th>
                  <th>谭学田</br>林海阳</th>
                  <th>邱增城</br>李玉</th>
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
                  <th>下午</th>
                  <th>沙米拉</th>
                  <th>陆林芸</th>
                  <th>毛璐璐</th>
                  <th>马雅静</th>
                  <th>蒋妍</th>
                  <th>麦迪妮</th>
                  <th>杜岚</th>
                </tr>
                <tr id="girl_evening">
                  <th>晚上</th>
                  <th>於雪茵</th>
                  <th>阿衣则克然木·依明</th>
                  <th>再同古丽</th>
                  <th>翟晴盈</th>
                  <th>刘扬扬</th>
                  <th>张小霞</th>
                  <th>徐嘉懿</th>
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
                  <th>下午</th>
                  <th></th>
                  <th>梁恒岳</th>
                  <th>张安邦</th>
                  <th>刘昺轶</th>
                  <th>张安邦</th>
                  <th>蒋颖</th>
                  <th>付周望</th>
                </tr>
                <tr id="coach_evening">
                  <th>晚上</th>
                  <th>伊尔盼江</th>
                  <th>虞江鹏</th>
                  <th>向丕梁</th>
                  <th>何清越</th>
                  <th>向丕梁</th>
                  <th>梁恒岳</th>
                  <th>虞江鹏</th>
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
