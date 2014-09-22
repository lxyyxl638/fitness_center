(function(){
var _1={AD_PREFIX:"ad",AD1_PREFIX:"ad1",ADBOX_PREFIX:"adbox",CUPID_PREFIX:"cupid",ID:"id",JOINCHAR:"_",WIDGET_STEP_DEFAULT:"0",JEBE_JSON:"jebe_json",JEBE_TEMPLATE:"jebe_template",AD_WIDGETDATA_NOTSET:"notset",TEMP_DIV_ID:"jebe_ad_prepare",NEXTLOADTIME_DEFAULT:900000,ENDLESS_REFRESH_COUNT:-1,JOINCHAR_QUERY_REGEXP:/_/gm,JS_VERSION:jebe_json.ad_js_version};
var _2="";
var _3={RESOURCE_DOMAIN:"http://jebe.xnimg.cn/",WIDGETBOX_DOMAIN:"http://jebe.xnimg.cn/widgetbox/main/content/",PREVIEW_AD_URL:"http://bolt.jebe.renren.com/bolt/creative/widgetCreativeJson.htm?creativeID="};
if(!XN.jebe){
XN.jebe={};
}
var _4=XN.jebe;
XN.jebe.timestamp=(new Date).getTime();
XN.jebe.addRefreshButtonForNoTitle=function(_5,_6,_7){
if(!_5.isFirstAd||!_5.isShowButtonAdzone){
return;
}
var _8="has-flash";
var _9=_5.adzoneId+"_widgetRefresh_"+_5.time;
if(!_6||!_7[_6]){
var _a=$(_9);
if(_a&&_a.parentNode.className.indexOf(_8)==-1){
_a.parentNode.className+=" "+_8;
_a.style.zIndex="9999";
}
}
};
XN.jebe.addWidgetBoxCss=function(){
var _b=document.createElement("style"),h=document.getElementsByTagName("head")[0],_c=".Widget .side-item{padding-top:10px;border-top:1px solid #CEE1EE}\t\t\t\t\t.Widget .share-sidebar .side-item-body,.Widget .side-item-body,#ad100000000001{padding:0 0 10px}\t\t\t\t\t.Widget .side-item-header{position:relative;margin:0;padding:0 0 8px;text-align:right}\t\t\t\t\t.Widget .side-item-header h4{float:left;color:#333;font-weight:bold}\t\t\t\t\t.Widget .side-item-header h4 .title{display:inline-block;width:180px}\t\t\t\t\t.Widget .side-item-header h4 .long_title{display:inline-block;width:100%;text-align:left}\t\t\t\t\t.Widget .side-item-header h4 span,.selfHelp .self-big h4.commonchar,.selfHelp .self-text h4.commonchar,.selfHelp .under h4.commonchar{font-weight:normal}\t\t\t\t\t.Widget .side-item-body .from-sponsor{color:#AAA}\t\t\t\t\t.Widget .side-item-body .btnspace{float:right;margin:10px 0 15px}\t\t\t\t\t.side-item .info p{overflow:hidden;word-wrap:break-word;word-break:break-all}\t\t\t\t\t.side-item-body .fans{margin:0 0 5px;line-height:18px;word-break:break-all;word-wrap:break-word}\t\t\t\t\t.side-item-body .fansapp{height:78px;margin:0 0 5px;line-height:18px;word-break:break-all;word-wrap:break-word}\t\t\t\t\t.side-item-body .infoapp{height:83px;margin:0 0 5px;line-height:18px;word-break:break-all;word-wrap:break-word}\t\t\t\t\t.side-item .footer a,.template .footer a img,.sponsors .footer a img,.wide-sponsors .footer a{text-decoration:none;outline:none;blr:expression(this.onFocus=this.blur())}\t\t\t\t\t.template .side-item-body p,.imgtemplate .side-item-body p,.sponsors .side-item-body p,.wide-sponsors .side-item-body p,.commend-page .side-item-body p,.selected .side-item-body p,.s4-preview-holder .sponsors .side-item-body p,.s4-preview-holder .wide-sponsors .side-item-body p{margin-bottom:.5ex}\t\t\t\t\t.template .figure,.selected .figure,.commend-page .figure,.sponsors .figure,.wide-sponsors .figure,.s4-preview-holder .template .figure,.s4-preview-holder  .sponsors .figure{float:left;margin-bottom:10px}\t\t\t\t\t.template .info{margin:0 0 10px 73px;color:#333}\t\t\t\t\t.sponsors .info{float:left;width:120px;height:83px;color:#333;font-size:12px}\t\t\t\t\t.wide-sponsors .info,.s4-preview-holder .sponsors .info{margin-left:108px;color:#333}\t\t\t\t\t.sponsors .side-item-header a,.wide-sponsors .side-item-header a,.sw_button_area .link,.selfHelp a,.nuomi-ad a{outline:none;blr:expression(this.onFocus=this.blur())}\t\t\t\t\t.commend-page .info{margin-left:85px;color:#333}\t\t\t\t\t.template .footer,.sponsors .footer,.wide-sponsors .footer,.s4-preview-holder .wide-sponsors .footer,.s4-preview-holder .sponsors .footer,.s4-preview-holder .template .footer,.wide-sponsors .side-item-header,.sponsors .side-item-body{clear:both}\t\t\t\t\t.wide-sponsors .footer a img{zoom:1}\t\t\t\t\t.template .info ul li a{display:inline-block}\t\t\t\t\t.sponsors .figure,.figure{position:relative;*zoom:1}\t\t\t\t\t.sponsors .figure{position:inherit;margin-right:8px}\t\t\t\t\t.template .play,.sponsors .play,.wide-sponsors .play{display:block;position:absolute;left:0;top:0;width:100px;height:80px;background:url(http://jebe.xnimg.cn/default/img/play2_1.gif) no-repeat center center;text-indent:-9999px;outline:0;opacity:.9;*filter:alpha(opacity=90)}\t\t\t\t\t.template .play:hover,.sponsors .play:hover,.wide-sponsors .play:hover{background:url(http://jebe.xnimg.cn/default/img/play2_2.gif) no-repeat center center}\t\t\t\t\t.template .play{width:64px;height:64px;background:url(http://jebe.xnimg.cn/default/img/play_a.png) no-repeat center center}\t\t\t\t\t.template .play:hover{background:url(http://jebe.xnimg.cn/default/img/play_b.png) no-repeat center center}\t\t\t\t\t.sponsors .play:hover{background-image:url(http://jebe.xnimg.cn/default/img/play21.gif)}\t\t\t\t\t.wide-sponsors .play{width:220px;height:120px}\t\t\t\t\t#sponsorsWidget a.link img{*position:relative;zoom:1}\t\t\t\t\ta.text,.s4-preview-holder a.text{color:#333;text-decoration:none}\t\t\t\t\ta.text:hover{color:#333;text-decoration:none}\t\t\t\t\t#send-gift-form{margin-bottom:10px;padding-left:20px;background:url(http://jebe.xnimg.cn/default/img/gift.gif) no-repeat left 3px}\t\t\t\t\t#send-gift-form p.submit{text-align:right}\t\t\t\t\t#send-gift-form .input-text,#send-gift-form textarea{width:190px}\t\t\t\t\t.sent-gift:after{display:block;clear:both;height:0;content:'.';visibility:hidden}\t\t\t\t\t.sent-gift{margin-bottom:5px;padding:5px;background-color:#F0F5F8;*zoom:1}\t\t\t\t\t.sent-gift .avatar{float:left;margin-right:5px}\t\t\t\t\t.sent-gift .gift,.nuomi-ad .nuomi-city{float:right}\t\t\t\t\t.sent-gift p{word-wrap:break-word}\t\t\t\t\t.wide-sponsors .footer .link:hover,.sponsors .footer .link:hover{text-decoration:underline}\t\t\t\t\t#sponsorsAdFlash,#sponsorsComments .publisher .section,.widget-ad-for-56 .avatar,.ad-show-box .img img{float:left}\t\t\t\t\t#sponsorsComments{float:right;width:350px;height:360px;background:#FFF}\t\t\t\t\t#sponsorsComments .diggs{margin-bottom:1px;padding:5px 10px 0;border-bottom:1px solid #F0F5F8;background:#F0F5F8}\t\t\t\t\t#sponsorsComments .diggers:after{display:block;clear:both;content:'.'}\t\t\t\t\t#sponsorsComments .diggs p,.sw_operate_area,.sw_vote_item,.widget-ad-for-56 .detail h4{margin-bottom:5px}\t\t\t\t\t#sponsorsComments .diggers{margin-left:20px;*zoom:1}\t\t\t\t\t#sponsorsComments .diggers li{float:left;width:50px;height:69px;margin-right:10px;text-align:center;overflow:hidden}\t\t\t\t\t#sponsorsComments .diggers li .name{*margin-top:5px}\t\t\t\t\t#sponsorsComments .publisher{height:59px;margin:0 0 1px;padding:10px 15px;border-bottom:1px solid #F0F5F8;background:#F0F5F8;*zoom:1;*overflow:hidden}\t\t\t\t\t#sponsorsComments .publisher:after{display:block;clear:both;content:'.'}\t\t\t\t\t#sponsorsComments .publisher .figure,#sponsorsComments .comment .figure{_display:inline;float:left;margin-right:5px}\t\t\t\t\t#sponsorsComments .publisher textarea{width:276px;height:22px;margin-top:0;margin-bottom:5px;resize:none}\t\t\t\t\t#sponsorsComments .publisher .text-count{float:right;color:#AAA}\t\t\t\t\t#sponsorsComments .comments{height:227px;border-bottom:1px solid #C2D8E7;background:#FFF url(http://a.xnimg.cn/imgpro/homeAd/ex/renren-bg.png) no-repeat center top;overflow:auto;word-wrap:break-word}\t\t\t\t\t#sponsorsComments.diggers-showed .comments{height:158px}\t\t\t\t\t#sponsorsComments .more-comments{height:24px;_height:22px;padding-right:20px;background:#F0F5F8;line-height:24px;text-align:right;_overflow:hidden}\t\t\t\t\t#sponsorsComments .more-comments a{line-height:24px}\t\t\t\t\t#sponsorsComments .more-comments .count{float:left;margin-left:10px;color:#888}\t\t\t\t\t#sponsorsComments .comment{padding:5px 10px;border-bottom:2px solid #FFF;background:#F0F5F8}\t\t\t\t\t#sponsorsComments .comment .section p{line-height:15px}\t\t\t\t\t#sponsorsComments .comment .x-to-hide{float:right;text-indent:-9999px;outline:0}\t\t\t\t\t#sponsorsComments .comment .reply,.loadMask .maskView span,.loadMask-small .maskView span{margin-left:10px}\t\t\t\t\t.sw_mobile_num_input{width:120px;height:15px;padding:2px;color:#AAA;vertical-align:middle}\t\t\t\t\t.sw_button_img{margin-right:5px;vertical-align:middle}\t\t\t\t\t.ad_btn{position:absolute;left:0;bottom:0;padding:5px 0 7px 10px;text-align:left;z-index:1}\t\t\t\t\t.btn_bg,.btn_bg1{position:absolute;left:0;bottom:0;width:100%}\t\t\t\t\t.btn_bg_gray{background:#000;opacity:.50;filter:Alpha(Opacity=50)}.ad_btn a{display:inline-block;width:86px;height:21px;margin-bottom:2px;margin-top:5px;margin-left:1px;border:1px solid #8B8B8B;vertical-align:top;1margin-left:10px}\t\t\t\t\t.ad_btn a:hover{margin-bottom:0;margin-top:5px;border:1px solid #333;border-bottom:3px solid #333}\t\t\t\t\t#aShare{width:54px}\t\t\t\t\t.ad_join_btn{background:url(http://jebe.xnimg.cn/default/img/i-want-join-button.png) -1px -1px no-repeat}\t\t\t\t\t.ad_buy_btn{background:url(http://jebe.xnimg.cn/20100624/1755/a_main_L3gO_57_040250.png) -1px -1px no-repeat}\t\t\t\t\t.ad_download_btn{background:url(http://jebe.xnimg.cn/20100305/2006/a_main_hatH_ac_073157.png) -1px -1px no-repeat}\t\t\t\t\t.ad_share_btn{background:url(http://jebe.xnimg.cn/default/img/sw_share_button.png) -1px -1px no-repeat}\t\t\t\t\t.ad_like_btn{background:url(http://jebe.xnimg.cn/default/follow-button1.gif) -1px -1px no-repeat}\t\t\t\t\t.home .side-item .sw_mobile_backinfo li{margin-bottom:1px;padding:5px 3px 5px 5px;background:#F3FAFF}\t\t\t\t\t.sw_mobile_backinfo li .img{display:block;float:left}\t\t\t\t\t.sw_mobile_backinfo li .info_area{display:block;float:left;padding-left:5px}\t\t\t\t\t.sw_block,.widget-ad-for-56 .avatar img{display:block}\t\t\t\t\t.sw_mobile_backinfo li .info_area span,.selfHelp .will a,#ad1000000063 .will a{color:#888}\t\t\t\t\t.sw_mobile_backinfo li .info_area span span{color:#333;font-weight:700}\t\t\t\t\t.sw_vote_title{margin-bottom:10px;font-weight:700}\t\t\t\t\t.sw_vote_icon{background:url(http://jebe.xnimg.cn/default/img/someicons.gif) 0 1px no-repeat;vertical-align:middle}\t\t\t\t\t.sw_vote_title_text,.link img,.ad110429 input,.ad110429 label{vertical-align:middle}\t\t\t\t\t.sw_vote_item input{height:16px}\t\t\t\t\t.sw_vote_p{display:block;float:left;width:35px}\t\t\t\t\t.sw_vote_itemtext_holder{display:block;position:relative;float:left;width:170px;height:15px;padding-left:10px}\t\t\t\t\t.sw_vote_itemtext_holder .sw_vote_itemtext{position:absolute;left:9px;*top:2px;_top:0;vertical-align:middle;white-space:nowrap}\t\t\t\t\t.sw_vote_more{background:#005EAC;color:#FFF}\t\t\t\t\t.sw_vote_less{background:#CEE1EE;color:#666}\t\t\t\t\t.sw_vote_info{margin:12px 0;color:#888}\t\t\t\t\t.sw_vote_item input{font-family:tahoma, verdana, arial, STHeiTi, simsun, sans-serif;vertical-align:middle}\t\t\t\t\t.sw_vote_item label{font-weight:normal;font-family:tahoma, verdana, arial, STHeiTi, simsun, sans-serif;vertical-align:middle}\t\t\t\t\t.sw_button_area{margin-top:12px}\t\t\t\t\t.sw_button_area a:hover{text-decoration:none}\t\t\t\t\t.sw-refresh-button{display:block;position:absolute;top:-3px;right:0;width:14px;height:22px;background:url(http://a.xnimg.cn/imgpro/icons/wbPage.gif) no-repeat 0 0;text-indent:-9999px;z-index:999;overflow:hidden;outline:0 none}\t\t\t\t\t.sw-refresh-button:hover{background-position:0 -22px}\t\t\t\t\t.sw-x-button{display:none;position:absolute;top:-3px;right:0;width:14px;height:22px;background:url(http://jebe.xnimg.cn/default/img/action-bottons.gif) 0 -75px no-repeat;text-indent:-9999px;z-index:999;overflow:hidden;outline:0 none}\t\t\t\t\t.sw-x-button:hover{background-position:0 -116px}\t\t\t\t\t.sw-buttons-holder{position:absolute;top:0;right:0}\t\t\t\t\t.s4-preview-holder .side-item{margin-bottom:10px;border-bottom:1px solid #FFF}\t\t\t\t\t.s4-preview-holder .side-item-header{padding:0 0 8px;text-align:right}\t\t\t\t\t.s4-preview-holder .side-item-header h4{float:left;color:#333;font-size:12px;text-align:left}\t\t\t\t\t.s4-preview-holder .side-item-body,.wide-sponsors .side-item-body{padding:0 0 7px}\t\t\t\t\t.s4-preview-holder .sponsors .figure,.s4-preview-holder  .figure,.wide-sponsors,.sponsors,.ifr-wrap{position:relative}\t\t\t\t\t.s4-preview-holder .wide-sponsors .play{display:block;position:absolute;left:0;top:0;width:220px;height:120px;background:url(http://jebe.xnimg.cn/default/img/play1_1.gif) no-repeat scroll 85px 45px transparent;text-indent:-9999px;opacity:.9;outline:0 none}\t\t\t\t\t.s4-preview-holder .wide-sponsors .play:hover{background-position:85px -55px}\t\t\t\t\t.s4-preview-holder .template .info{margin:0 0 10px 73px;color:#333}\t\t\t\t\t#sponsorsWidget .sw-buttons-holder{top:0;zoom:1}\t\t\t\t\t.selfHelp{width:240px}\t\t\t\t\t.selfHelp div{padding:10px 0;_zoom:1;overflow:hidden}\t\t\t\t\t.selfHelp div.addedtop{width:213px;margin:0 auto;padding:22px 0 22px 5px;border:1px solid #B8D4E8!important;background:#F0F5F8}\t\t\t\t\t.selfHelp div.under .inner-under{border:none}\t\t\t\t\t.selfHelp div.under{width:240px;border-bottom:1px solid #CEE1EE}\t\t\t\t\t.selfHelp div.under a.closebtn,.selfHelp div.inner-under .closebtn,.self-big div.under a.closebtn,.self-big div.inner-under .closebtn{position:absolute;left:218px;top:10px;width:14px;height:14px;background:url(http://a.xnimg.cn/imgpro/bg/cs_home.png) no-repeat scroll -225px -24px transparent}\t\t\t\t\t.selfHelp div.under .closebtn:hover{background-position:-225px -38px}\t\t\t\t\t.selfHelp div.under .closebtn span,.selfHelp div.inner-under .closebtn span,.self-big div.under .closebtn span,.self-big div.inner-under .closebtn span,.has-flash a.advert-more,.Widget .has-flash a.advert-more,#ad100000000072 .selfHelp .has-flash a.advert-more,#adla100000000072 .selfHelp .has-flash a.advert-more,#ad100000000073 .selfHelp .has-flash a.advert-more,#ad100000000071 .selfHelp .has-flash a.advert-more,#ad100000000070 .selfHelp .has-flash a.advert-more{display:none}\t\t\t\t\t.selfHelp div.inner-under .closebtn:hover{background-position:-225px -38px}\t\t\t\t\t.selfHelp div.under .closebtn:hover{background-position:-225px -38px}\t\t\t\t\t.self-big div.inner-under .closebtn:hover{background-position:-225px -38px}\t\t\t\t\t.selfHelp .self-big h4,.selfHelp .self-text h4,.selfHelp .under h4{margin:0;padding:0 0 10px;border:none;font-weight:bold}\t\t\t\t\t.selfHelp .img{display:inline;float:left;width:77px;height:77px;margin:0 5px 0 10px;}\t\t\t\t\t.selfHelp img{display:block;margin:0 auto}\t\t\t\t\t.selfHelp .rr{margin:0 80px 0 5px;padding-left:13px;word-wrap:break-word}\t\t\t\t\t.selfHelp .rr.rrnew{margin:0 80px 0 5px;padding-left:0}\t\t\t\t\t.selfHelp .adr{display:inline-block;padding-top:5px;color:#5CBC5C}\t\t\t\t\t.selfHelp p a{color:#000}\t\t\t\t\t.selfHelp p a:link,.selfHelp p a:visited,.selfHelp p a:hover,.selfHelp p a:active{color:#000;text-decoration:none}\t\t\t\t\t.selfHelp .will{margin:0 10px 0 -2px;padding:0 0 10px;text-align:right}\t\t\t\t\t.self-big,.self-text{width:240px;padding:10px 0;border-bottom:1px solid #CEE1EE}\t\t\t\t\t.self-text .txt,.self-text .txt:hover{color:#000;text-decoration:none}\t\t\t\t\t.self-text .addr{color:#009600}\t\t\t\t\t.self-text a:hover{text-decoration:underline}\t\t\t\t\t.wide-sponsors .side-item-body{position:relative;padding:0 0 7px;z-index:999}\t\t\t\t\t.side-item-body .figureWide{position:absolute;top:0;right:0;z-index:999}\t\t\t\t\t.nobtborder{border-bottom:none!important}\t\t\t\t\t.noborder{border:none !important}\t\t\t\t\t.text-link-ad{padding:6px 0;font-weight:bold}\t\t\t\t\t.loadMask{position:absolute;top:121px;right:0;width:200px;height:40px;z-index:9999}\t\t\t\t\t.loadMask .maskBg,.loadMask-small .maskBg{position:absolute;left:3px;top:3px;width:200px;height:40px;background:#888;z-index:1;opacity:.3;filter:alpha(opacity=30)}\t\t\t\t\t.loadMask .maskView,.loadMask-small .maskView{position:absolute;left:0;top:0;width:198px;height:38px;border:1px solid #888;background:#FFF;line-height:38px;font-size:14px;z-index:100}\t\t\t\t\t.suspendWb{position:absolute;top:121px;right:0;width:297px;height:248px;z-index:9999}\t\t\t\t\t.side-item-body .userPic img{margin:0 0 4px;vertical-align:middle}\t\t\t\t\t.suspendWb .suspendBg,.suspendWb-small .suspendBg{position:absolute;left:3px;top:3px;width:297px;height:248px;background:#888;z-index:1;opacity:.3;filter:alpha(opacity=30)}\t\t\t\t\t.suspendWb .suspendView,.suspendWb-small .suspendView{position:absolute;left:0;top:0;width:295px;height:246px;border:1px solid #888;background:#FFF;z-index:100}\t\t\t\t\t.suspendWb .suspendView img,.suspendWb-small .suspendView img{border:0;vertical-align:middle}\t\t\t\t\t.loadMask-small{position:absolute;top:81px;right:120px;width:200px;height:40px;z-index:9999}\t\t\t\t\t.suspendWb-small{position:absolute;top:81px;right:120px;width:297px;height:248px;z-index:9999}\t\t\t\t\t.nuomi-ad .nuomi-ad-header{height:18px;padding:10px 10px 0 0}\t\t\t\t\t.nuomi-ad h4{float:left;width:80px}\t\t\t\t\t.nuomi-ad h4 a:link,.nuomi-ad h4 a:visited{color:#333}\t\t\t\t\t.nuomi-ad h4 a:hover{text-decoration:none}\t\t\t\t\t.nuomi-ad del{color:#888;text-decoration:line-through}\t\t\t\t\t.nuomi-ad-body a.nuomi-pic{float:left;width:150px;margin:4px 0 0}\t\t\t\t\t.nuomi-ad-body a.nuomi-title{float:left;margin:7px 0 4px;+margin-top:10px}\t\t\t\t\t.nuomi-ad-body p{float:left;width:100%}\t\t\t\t\t.nuomi-ad-body p a{display:inline-block;margin-right:10px}\t\t\t\t\t.nuomi-ad-body p a:link,.nuomi-ad-body p a:visited{color:#000}\t\t\t\t\t.nuomi-ad-body p a:hover{text-decoration:none}\t\t\t\t\t.ifr-wrap div{position:absolute;left:0;top:0;cursor:pointer}\t\t\t\t\t.navigation .banner .float-right{overflow:visible}\t\t\t\t\t.hideAd{display:block;position:absolute;bottom:0;right:-25px;width:12px;padding:5px;*padding-bottom:3px;background:#EEF5FB;line-height:12px;color:#779CB7;text-decoration:none;overflow:hidden}\t\t\t\t\t.hideAd:link,.hideAd:visited{color:#779CB7}\t\t\t\t\t.hideAd:hover{background:#CCE3F1;color:#779CB7;text-decoration:none}\t\t\t\t\t.praiseInfo .hasBg{display:block;padding:5px 0;background:#F3FAFF}\t\t\t\t\t.sw_backinfo .userPic img{position:relative;top:1px}\t\t\t\t\t.footer a{float:left;*padding-bottom:1px;outline:none}\t\t\t\t\t.footer a.sms-link{float:none}\t\t\t\t\t.wide-sponsors .side-item-header,.sponsors .side-item-header{height:15px}\t\t\t\t\t.side-item{*zoom:1}\t\t\t\t\t.share-ads,#ad100000000075 p{margin:0}\t\t\t\t\t.ad110429 .box{position:relative;padding:10px;background:#F0F5F8;background:#F0F5F8 url(http://jebe.xnimg.cn/default/img/logo.png) no-repeat 90% 90%}\t\t\t\t\t.ad110429 .tl,.ad110429 .tr,.ad110429 .bl,.ad110429 .br{position:absolute;width:4px;height:4px;background:url(http://jebe.xnimg.cn/default/img/corner.png) no-repeat;overflow:hidden}\t\t\t\t\t.ad110429 .tl{left:0;top:0;background-position:0 0}\t\t\t\t\t.ad110429 .tr{top:0;right:0;background-position:-4px 0}\t\t\t\t\t.ad110429 .bl{left:0;bottom:0;background-position:0 -4px}\t\t\t\t\t.ad110429 .br{bottom:0;right:0;background-position:-4px -4px}\t\t\t\t\t.ad110429 .box .icon{margin-right:8px}\t\t\t\t\t.ad110429 .box .ql,.ad110429 .box .qr{display:inline-block;width:10px;height:7px;background:url(http://a.xnimg.cn/imgpro/home/home_icon.png) no-repeat;vertical-align:top}\t\t\t\t\t.ad110429 .box .ql{margin-right:.5ex;background-position:0 -333px}\t\t\t\t\t.ad110429 .box .qr{margin-left:.5ex;background-position:-10px -333px}\t\t\t\t\t.ad110429 input{margin-right:3px}\t\t\t\t\t.ad110429 label{line-height:normal;font-weight:normal}\t\t\t\t\t.ad110429 li{margin-top:10px}\t\t\t\t\t.widget-ad-for-56{margin-bottom:8px;zoom:1;overflow:hidden}\t\t\t\t\t.widget-ad-for-56 .detail{margin-left:80px}\t\t\t\t\t.widget-ad-for-56 #content{width:auto!important;color:#333;text-decoration:none!important}\t\t\t\t\t.advert-con{position:relative;border:none !important;font-size:12px}\t\t\t\t\t.advert-con .advert-title{height:16px;padding-bottom:8px;line-height:16px}\t\t\t\t\t.advert-con .advert-title .advert-link:link,.advert-con .advert-title .advert-link:visited{color:#005EAC;font-weight:bold;font-size:12px;text-decoration:none}\t\t\t\t\t.advert-con .advert-title .advert-link:hover{color:#005EAC;text-decoration:underline}\t\t\t\t\t.advert-con .advert-more{display:block;position:absolute;top:0;right:0;width:25px;height:18px;background:url(http://jebe.xnimg.cn/default/newpager.png) no-repeat 0 -18px;text-indent:-9999em;z-index:1;overflow:hidden;outline:0 none}\t\t\t\t\t.advert-con .advert-more:hover{display:block;background-position:0 -90px}\t\t\t\t\t.advert-con:hover a.advert-more{display:block}\t\t\t\t\t.has-flash{behavior:expression(function(ele){ele.runtimeStyle.behavior='none';Expressions.pseudo.hover(ele, 'has-flash_hover')}(this))}\t\t\t\t\t.has-flash:hover a.advert-more,.has-flash_hover a.advert-more{display:block;position:absolute;top:0;right:23px;width:25px;height:18px;background:url(http://jebe.xnimg.cn/default/newpager.png) no-repeat 0 -18px;text-indent:-9999em;z-index:9999px;overflow:hidden;outline:0 none}\t\t\t\t\t.has-flash a.advert-more:hover{background-position:0 -90px;cursor:pointer}\t\t\t\t\t.advert-con .advert-main .side-item.wide-sponsors{margin-top:0 !important}\t\t\t\t\t#ad100000000072 .advert-con a.advert-more,#adla100000000072 .advert-con a.advert-more,#ad100000000073 .advert-con a.advert-more{top:13px}\t\t\t\t\t.Widget .advert-con a.advert-more{display:inline-block;position:absolute;top:10px;right:0;width:25px;height:18px;background:url(http://jebe.xnimg.cn/default/newpager.png) 0 -18px no-repeat;text-indent:-9999em;z-index:1;overflow:hidden;outline:0 none}\t\t\t\t\t.Widget .has-flash:hover a.advert-more,.Widget .has-flash_hover a.advert-more{display:inline-block;position:absolute;top:15px;right:5px;width:25px;height:18px;background:url(http://jebe.xnimg.cn/default/newpager.png) no-repeat 0 -18px;text-indent:-9999em;z-index:9999;overflow:hidden;outline:0 none}\t\t\t\t\t.Widget .advert-con .advert-more:hover{background-position:0 -90px;cursor:pointer}\t\t\t\t\t.Widget .has-flash a.advert-more:hover{background-position:0 -90px;cursor:pointer}\t\t\t\t\t#ad100000000072 .selfHelp .advert-con,#adla100000000072 .selfHelp .advert-con,#ad100000000073 .selfHelp .advert-con,#ad100000000071 .selfHelp .advert-con,#ad100000000070 .selfHelp .advert-con{padding:0;border-top:1px solid #CEE1EE !important}\t\t\t\t\t#ad100000000072 .selfHelp .advert-con .advert-main,#adla100000000072 .selfHelp .advert-con .advert-main,#ad100000000073 .selfHelp .advert-con .advert-main,#ad100000000071 .selfHelp .advert-con .advert-main,#ad100000000070 .selfHelp .advert-con .advert-main{padding:0}\t\t\t\t\t#ad100000000072 .selfHelp .advert-con .advert-more,#adla100000000072 .selfHelp .advert-con .advert-more,#ad100000000073 .selfHelp .advert-con .advert-more,#ad100000000071 .selfHelp .advert-con .advert-more,#ad100000000070 .selfHelp .advert-con .advert-more{top:22px}\t\t\t\t\t#ad100000000072 .selfHelp .advert-con .advert-more:hover,#adla100000000072 .selfHelp .advert-con .advert-more:hover,#ad100000000073 .selfHelp .advert-con .advert-more:hover,#ad100000000071 .selfHelp .advert-con .advert-more:hover,#ad100000000070 .selfHelp .advert-con .advert-more:hover{background-position:-20px -38px;cursor:pointer}\t\t\t\t\t#ad100000000072 .selfHelp .has-flash:hover a.advert-more,#adla100000000072 .selfHelp .has-flash:hover a.advert-more,#ad100000000072 .selfHelp .has-flash_hover a.advert-more,#adla100000000072 .selfHelp .has-flash_hover a.advert-more,#ad100000000073 .selfHelp .has-flash:hover a.advert-more,#ad100000000073 .selfHelp .has-flash_hover a.advert-more,#ad100000000071 .selfHelp .has-flash:hover a.advert-more,#ad100000000071 .selfHelp .has-flash_hover a.advert-more,#ad100000000070 .selfHelp .has-flash:hover a.advert-more,#ad100000000070 .selfHelp .has-flash_hover a.advert-more{display:block;display:inline-block;position:absolute;top:15px;right:5px;width:25px;height:18px;background:url(http://jebe.xnimg.cn/default/newpager.png) no-repeat 0 -18px;text-indent:-9999em;z-index:9999px;overflow:hidden;outline:0 none}\t\t\t\t\t#ad1000000063 .under{padding:10px 0;border-bottom:1px solid #CEE1EE;line-height:140%}\t\t\t\t\t#ad1000000063 .under .rr{margin-right:5px}\t\t\t\t\t#ad1000000063 div h4{padding-bottom:10px}#ad1000000063 .selfHelp .img{margin-left:0}\t\t\t\t\t#ad1000000063 .will{clear:both;margin-right:10px;padding:0 0 10px;color:#888;text-align:right}\t\t\t\t\t#ad1000000063 p a:link,#ad1000000063 p a:visited,#ad1000000063 p a:hover,#ad1000000063 p a:active{color:#000;text-decoration:none}\t\t\t\t\t#ad1000000063 .under,#ad1000000063 div.nobtborder{margin-bottom:0!important}\t\t\t\t\t#ad1000000063 .selfHelp .img{width:85px}\t\t\t\t\t#ad1000000060 .wide-sponsors,#ad1000000060 .sponsors{position:static}\t\t\t\t\t#ad1000000060 .wide-sponsors .side-item-body{position:static;z-index:auto}\t\t\t\t\t#ad1000000060 .wide-sponsors .side-item-header,#ad1000000060 .sponsors .side-item-header{height:auto}\t\t\t\t\t#ad1000000060 .wide-sponsors .side-item-header,#ad1000000060 .sponsors .side-item-body{clear:none}\t\t\t\t\t.adspicholder{display:block;float:left;width:75px;heith:75px}\t\t\t\t\t.ads-wrap{margin:3px 0 0 85px;word-wrap:break-word;word-break:break-all}\t\t\t\t\t.ads-description{margin-top:5px;line-height:18px}\t\t\t\t\t.side-item  a.ads-linkout{display:inline;color:#888;text-decoration:none !important}\t\t\t\t\t.vote-con{margin-bottom:-5px9;font-size:12px;font-weight:normal}\t\t\t\t\t.vote-main li{position:relative;height:25px;margin-bottom:5px;background:#F7F7F7;*zoom:1}\t\t\t\t\t.vote-main li input,.vote-main li span{position:absolute;z-index:1}\t\t\t\t\t.vote-main li input{left:10px;top:6px;*top:2px}\t\t\t\t\t.vote-main li .choice-word{left:35px;top:6px;color:#000}\t\t\t\t\t.vote-main li .choice-percent{top:6px;right:5px}\t\t\t\t\t.vote-main li .choice-bg{position:absolute;left:0;top:0;width:0;height:25px;background:#D8DBE1}\t\t\t\t\t.side-item-body .voteUserPic,.vote-info .fans-avatar{display:inline-block;float:left;width:25px;height:25px;margin-right:5px;margin-top:2px}\t\t\t\t\t.side-item-body .voteUserPic img,.vote-info .fans-avatar img{width:100%;height:100%}\t\t\t\t\t.side-item-body .fans p{height:28px;padding-top:1px;line-height:1.2em}\t\t\t\t\t.fans-avatar-opt{display:inline-block;display:inline;float:left;width:25px;height:25px;margin:2px 5px 0 0;}\t\t\t\t\t.fans-avatar-opt img{float:left;width:100%;height:100%}\t\t\t\t\t.vote-main li .votePic{width:100%;margin-left:245px}\t\t\t\t\t.vote-info{margin-bottom:10px;margin-bottom:5px9}\t\t\t\t\t.vote-info p{margin:10px 0 6px;color:#666}\t\t\t\t\t.vote-info .vote-fans{*height:28px;min-height:28px}\t\t\t\t\t.vote-list li{background:none}\t\t\t\t\t.vote-list .voteTxt{position:absolute;left:0;width:240px;height:25px;background:#F7F7F7}\t\t\t\t\t.vote-list li .votePic{width:auto}\t\t\t\t\t.vote-list .votePic a{margin-top:0}\t\t\t\t\t.vote-list .votePic a img,.fans-avatar img{opacity:.4;filter:alpha(opacity=40)}\t\t\t\t\t.vote-list .votePic a:hover img,.fans-avatar:hover img,.vote-list .votePic .fans-self img{opacity:1;filter:alpha(opacity=100)}\t\t\t\t\t.vote-main .voteTxt .choice-word{top:2px}\t\t\t\t\t.ad-contrainer{padding:0;border-bottom:1px solid #CEE1EE;zoom:1}\t\t\t\t\t.ad-show-box{margin-bottom:0;padding-bottom:10px}\t\t\t\t\t.ad-show-box .header{position:relative;font-weight:bold}\t\t\t\t\t.ad-show-box .img{float:left;margin:0}\t\t\t\t\t.ad-show-box .discribe{float:right;width:130px;height:75px;font-family:'宋体';outline:0 none}\t\t\t\t\t.ad-show-box .ad-content{display:block;width:130px;height:75px;color:#000;text-decoration:none;word-wrap:break-word;word-break:break-all}\t\t\t\t\t.ad-show-box .close-btn{display:none;position:absolute;top:0;right:0;width:18px;height:18px;background:url(http://jebe.xnimg.cn/default/close-btn.png) 0 0 no-repeat;cursor:pointer;outline:medium none}\t\t\t\t\t.ad-show-box .close-btn:hover{background:url(http://jebe.xnimg.cn/default/close-hover.png) no-repeat 0 0;}\t\t\t\t\t.ad-show-box:hover .close-btn{display:block}\t\t\t\t\t.ad-show-box .footer{padding:6px 0 1px}\t\t\t\t\t.ad-show-box .footer a:hover{text-decoration:underline}\t\t\t\t\t.ad-show-box .footer .like-ad{padding:0 0 0 16px;background:url(http://jebe.xnimg.cn/default/iFeeds-and-Requests-101102.png) no-repeat scroll left -1559px transparent;*line-height:18px;_line-height:16px;cursor:pointer}\t\t\t\t\t.ad-close{padding:0 0 0 5px}\t\t\t\t\t.ad-close .close-reason{width:150px;color:#999}\t\t\t\t\t.ad-close .ad-confirm-btn,.ad-close .ad-cancel-btn{padding:1px 8px;border:1px solid #8B8B8B;background:url(http://jebe.xnimg.cn/default/icons2.png) no-repeat scroll -1px -300px transparent;color:#666;text-shadow:1px 1px #FFF}\t\t\t\t\t.thank-slogan{padding:10px;text-align:center}\t\t\t\t\t.thank-slogan .thanks{padding:20px 10px;border:1px solid #CFC274;background:#FFF9D7;line-height:20px;font-size:12px;font-family:'宋体','Microsoft Yahei','微软雅黑','黑体';-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}\t\t\t\t\t.ad-standard-65{margin-bottom:-7px;padding-top:10px}\t\t\t\t\t.sideBar .c .ad-area{padding-bottom:1px}\t\t\t\t\t#ad1000000060 .has-flash:hover a.advert-more{top:2px;right:2px}\t\t\t\t\t#ad1000000060 .has-flash_hover a.advert-more{top:2px;right:2px}\t\t\t\t\t.Widget #ad1000000060 .has-flash:hover a.advert-more{top:12px;right:2px}\t\t\t\t\t.Widget #ad1000000060 .has-flash_hover a.advert-more{top:12px;right:2px}\t\t\t\t\t#ad1000000065{margin-top:-5px}#ad100000000100{font-size:0}";
_b.setAttribute("id","jebe-widgetbox-style");
h.appendChild(_b);
if(_b.styleSheet){
_b.styleSheet.cssText=_c;
}else{
_b.appendChild(document.createTextNode(_c));
}
};
var _d=["100000000060","100000000065","100000000093"];
function _e(_f){
var _10=false;
for(var i=0;i<_d.length;i++){
if(_d[i]==_f){
_10=true;
break;
}
}
return _10;
};
function _11(_12,_13,_14,_15,_16){
if(!(_12==0&&_13)){
return _16;
}
var _17="<div class=\"advert-con\"><a class=\"advert-more\" name=\"jebe_button\" onfocus=\"this.blur();\" id=\""+_15+"_widgetRefresh_"+_14+"\" title=\"下一个更精彩\" href=\"javascript:;\">下一个更精彩</a><div class=\"advert-main\">";
var _18="</div></div>";
return _17+_16+_18;
};
function _19(_1a,_1b,_1c,_1d){
_1a.time=_1c;
_1a.isShowButtonAdzone=_1d;
_1a.isFirstAd=(_1b==0);
_1a.widgetRefresh=_1a.adzoneId+"_widgetRefresh_"+_1a.time;
};
var _1e={"conId":window["conId"],jebe:XN.jebe,isVip:XN.user.isVip,isHideAds:XN.user.hideAds,share:XN.app.share,IE:XN.browser.IE,loadFile:XN.loadFile,isBlank:XN.string.isBlank,sendStats:XN.net.sendStats,domReady:XN.dom.ready,extend:$extend,pointerX:XN.event.pointerX,pointerY:XN.event.pointerY,delEvent:XN.event.delEvent,addEvent:XN.event.addEvent,each:XN.array.each,getUid:function(){
return XN.cookie.get(_1.ID);
},getCreateId:function(){
return XN.string.getQuery("js_url");
},xmlHttp:function(obj){
return new XN.net.xmlhttp(obj);
},refreshOld:function(_1f){
if(XN.jebe.refreshOld){
XN.jebe.refreshOld(_1f);
}
}};
var _20={resetJebeJson:function(){
window[_1.JEBE_JSON]={};
},makeKeyForWidget:function(_21,_22,_23,_24){
var arr=[];
arr.push(_21);
arr.push(_22);
arr.push(_23);
if(_24){
arr.push(_24);
}
return arr.join(_1.JOINCHAR);
},fillUrlWithParams:function(url,obj){
var _25=0;
var _26="";
for(var key in obj){
if(_25==0){
_26+=key+"="+obj[key];
}else{
_26+="&"+key+"="+obj[key];
}
_25++;
}
var _27=url.indexOf("?")==-1?"?":"&";
return url+_27+_26;
}};
var _28=0;
var _29=[];
_4.Container=function(){
this.adzones={};
this.widgets={};
this.uid="0";
this.nextLoadTime=_1.NEXTLOADTIME_DEFAULT;
this.maxUpdateCount=0;
this.refreshIndex=0;
this.nextCheckTimer=null;
this.uniqId=_28++;
_29[this.uniqId]=this;
};
_4.Container.getCurrentLocation=function(url){
var l=url||location.href;
if(l.indexOf("?")>-1){
l=l.substring(0,l.indexOf("?"));
}
if(_1e.share&&_1e.share.pageInfo){
l=l+"?shareType="+_1e.share.pageInfo.type;
}
return l;
};
_4.Container.prototype={loadCurUserInfo:function(){
this.uid=_1e.getUid();
},loadDataFromJebeList:function(_2a){
try{
var _2b=this;
if(!(_2a&&_2a.list)){
this.clearAds();
}
_1e.each(_2a.list,function(i,_2c){
var _2d=_2b.updateOrInitAdzone(_2c);
_2b.clearAdzoneDomByAds(_2c);
_1e.each(_2c.ads,function(j,_2e){
var ad=new _4.Ad(_2e);
_2d.addAd(ad);
var _2f=_2b.getOrInitWidget(ad,_2c.adzone_id);
ad.setWidget(_2f);
});
});
}
catch(e){
console.error(e);
}
},loadDataFromJebeJson:function(_30){
if(_30.udpate_interval){
this.nextLoadTime=_30.udpate_interval*1000;
}
if(_30.max_update_count){
this.maxUpdateCount=_30.max_update_count;
}
this.loadCurUserInfo();
this.loadDataFromJebeList(_30);
},loadDataFromWidgetList:function(_31){
try{
var _32=this;
_1e.each(_31,function(i,_33){
var _34=_32.getWidgetByWidgetJson(_33);
if(_34){
_34.init(_33);
}
});
}
catch(e){
console.error(e);
}
},refreshSpecifyAdzones:function(_35,_36){
var _37=this;
this.updateByRefresh(_36);
var _38={"var":_1.JEBE_JSON,"userid":_37.uid,"refresh_source":_36,"refresh_idx":_37.refreshIndex,"next_load_time":_36!=0?0:_37.nextLoadTime,"tt":new Date().getTime(),"isvip":_1e.isVip,"hideads":_1e.isHideAds};
if(XN.pageId&&!_37.params.noNeedPageType){
_38.pageType=XN.pageId;
}
_38.r=encodeURIComponent(_4.Container.getCurrentLocation(_37.params.adInitLocation));
_38.type=".js";
var url=_20.fillUrlWithParams("http://ebp.renren.com/ebpn/show",_38);
_1e.loadFile(url,function(){
_37.loadDataFromJebeList(window[_1.JEBE_JSON]);
window[_1.JEBE_JSON]={};
_37.render();
_37.restartTimer();
var _39,_3a=document.getElementsByTagName("script");
for(var i=0,len=_3a.length;i<len;i++){
_39=_3a[i];
if(_39.src==url){
_39.parentNode.removeChild(_39);
break;
}
}
});
},render:function(){
var _3b=this;
var _3c=this.makeWidgetBoxQueryParam();
if(_3c.length==0){
this.renderAdzones();
if(document.referrer.length>0&&document.referrer.indexOf("renren.com")<=-1){
return;
}
JebeApi.CacheExcute();
return;
}
if(window[_1.JEBE_TEMPLATE]){
window[_1.JEBE_TEMPLATE]=null;
}
_1e.loadFile({type:"js",file:_3b.makeWidgetBoxUrl(_3c)},function(){
_3b.loadDataFromWidgetList(window[_1.JEBE_TEMPLATE]);
_3b.renderAdzones();
if(document.referrer.length>0&&document.referrer.indexOf("renren.com")<=-1){
return;
}
JebeApi.CacheExcute();
},true);
},check:function(){
for(var key in this.adzones){
var _3d=this.adzones[key].adzoneId;
var con=$(_1.AD_PREFIX+_2+_3d);
if(con){
_1e.isBlank($(_1e.conId).innerHTML)?con.hide():con.show();
}
var _3e=$(_1.CUPID_PREFIX+_3d);
if(_3e){
_1e.isBlank($(_1e.conId).innerHTML)?_3e.hide():_3e.show();
}
}
},addWidget:function(_3f){
this.widgets[_20.makeKeyForWidget(_3f.widgetId,_3f.widgetVersion,_3f.adzoneId,_3f.step)]=_3f;
},addAdzone:function(_40){
this.adzones[_40.adzoneId]=_40;
_40.container=this;
},clearAds:function(){
for(var key in this.adzones){
this.adzones[key].ads=[];
}
},getOrInitWidget:function(ad,_41){
var _42=ad.hasStep?_20.makeKeyForWidget(ad.widgetId,ad.widgetVersion,_41,ad.widgetData.step):_20.makeKeyForWidget(ad.widgetId,ad.widgetVersion,_41);
var _43=this.widgets[_42];
if(!_43){
_43=ad.hasStep?new _4.Widget(ad.widgetId,ad.widgetVersion,_41,ad.widgetData.step):new _4.Widget(ad.widgetId,ad.widgetVersion,_41);
this.addWidget(_43);
}
return _43;
},updateOrInitAdzone:function(_44){
var _45=this.adzones[_44.adzone_id];
if(_45){
_45.nextLoadTime=_44.next_load_time;
_45.ads=[];
}else{
_45=new _4.Adzone(_44);
this.addAdzone(_45);
}
return _45;
},clearAdzoneDomByAds:function(_46){
if(_46.ads.length==0&&$(_1.AD_PREFIX+_2+_46.adzone_id)){
$(_1.AD_PREFIX+_2+_46.adzone_id).innerHTML="";
}
},getWidgetByWidgetJson:function(_47){
var _48=_47.step&&_47.step!=_1.WIDGET_STEP_DEFAULT;
var _49=_48?_20.makeKeyForWidget(_47.widget_id,_47.widget_version,_47.adzone_id,_47.step):_20.makeKeyForWidget(_47.widget_id,_47.widget_version,_47.adzone_id);
return this.widgets[_49];
},updateByRefresh:function(_4a){
if(_4a!=0){
this.refreshIndex=0;
}else{
this.refreshIndex++;
}
clearTimeout(this.nextCheckTimer);
},restartTimer:function(){
var _4b=this;
if(this.refreshIndex<this.maxUpdateCount||this.maxUpdateCount==_1.ENDLESS_REFRESH_COUNT){
this.nextCheckTimer=setTimeout(function(){
_4b.refreshSpecifyAdzones(null,0);
},this.nextLoadTime);
}
},renderAdzones:function(){
for(var key in this.adzones){
this.adzones[key].render();
}
},makeWidgetBoxQueryParam:function(){
var _4c="";
for(var key in this.widgets){
if(key&&key!="toJSONString"&&!this.widgets[key].loaded){
_4c+=key.replace(_1.JOINCHAR_QUERY_REGEXP,",")+",runtime-";
}
}
return _4c==""?_4c:_4c.substr(0,_4c.length-1);
},makeWidgetBoxUrl:function(_4d){
return _3.WIDGETBOX_DOMAIN+_4d+"-jebe_template.";
}};
_4.Widget=function(_4e,_4f,_50,_51){
this.widgetId=_4e;
this.widgetVersion=_4f;
this.adzoneId=_50;
this.loaded=false;
this.step=_51;
};
_4.Widget.makeWidgetReplacePrefix=function(_52,_53){
var arr=[];
arr.push(_1.AD_PREFIX+_2+_52);
arr.push(new Date().getTime());
arr.push(_53);
return arr.join(_1.JOINCHAR);
};
_4.Widget.prototype={init:function(_54){
this.html=_54.html;
this.js=_54.js+";init(arguments[0], arguments[1], arguments[2]);";
this.placeholder=_54.placeholder;
this.loaded=true;
},prepareAdInAdzone:function(ad,_55,_56,_57,_58){
var _59=_4.Widget.makeWidgetReplacePrefix(ad.adId,_55.jebeAdboxCode);
this.createAdDomByWidget(ad,_55,_59,_56,_57,_58);
ad.addRedundanceFromWidget();
_19(ad.adParam,_56,_57,_58);
this.executeWidgetInitJs(ad,_59);
},createAdDomByWidget:function(ad,_5a,_5b,_5c,_5d,_5e){
var _5f=document.createElement("div");
var _60=this.html.replace(new RegExp(this.placeholder,"gm"),_5b);
_60=_11(_5c,_5e,_5d,ad.widget.adzoneId,_60);
_5f.innerHTML=_60;
_5f=Sizzle("div",_5f)[0];
_5a.appendChild(_5f);
},executeWidgetInitJs:function(ad,_61){
try{
var h=this.html;
if(ad.widgetData!=null&&ad.widgetData!=_1.AD_WIDGETDATA_NOTSET){
(function(){
eval(arguments[3]);
})(ad.widgetData,ad.adParam,new _4.WidgetQuery(_61),this.js);
}else{
(function(){
eval(arguments[2]);
})(ad.adParam,new _4.WidgetQuery(_61),this.js);
}
}
catch(e){
console.error(e);
}
}};
_4.Ad=function(_62){
this.adId=_62.ad_param.creative_id;
this.widgetId=_62.widget_id;
this.widgetVersion=_62.widget_version;
if(_62.widget!=null&&_62.widget!=_1.AD_WIDGETDATA_NOTSET&&_62.widget!=""){
this.widgetData=typeof _62.widget=="string"?eval("("+_62.widget+")"):_62.widget;
}
this.hasStep=this.widgetData&&this.widgetData.step;
this.adParam=_62.ad_param;
};
_4.Ad.prototype={setWidget:function(_63){
this.widget=_63;
},addRedundanceFromWidget:function(){
this.adParam.adzoneId=this.widget.adzoneId;
this.adParam.widgetId=this.widget.widgetId;
this.adParam.widgetVersion=this.widget.widgetVersion;
this.adParam.step=this.widget.step;
}};
_4.Adzone=function(_64,_65){
_4.Adzone.initBasicAdzone(this,_64,_65);
_4.Adzone.addDom2Adzone(this);
_4.Adzone.dealSpecialAdzoneDom(this);
_4.Adzone.fillForSupportApp(this);
};
_4.Adzone.initBasicAdzone=function(_66,_67,_68){
_66.adzoneId=_67.adzone_id;
_66.nextLoadTime=_4.Adzone.makeNextLoadTimeByJson(_67);
_66.ads=[];
_66.refreshTimeRemain=_66.nextLoadTime;
_66.renderEle=_68;
};
_4.Adzone.addDom2Adzone=function(_69){
if(_69.renderEle!=null){
_69.con=_69.renderEle.parentNode;
_69.con.jebeAdboxCode=_1.ADBOX_PREFIX+_69.adzoneId;
_69.hasCon=true;
return;
}
var idd=_4.Adzone.makeSuffixByAdzoneId(_69.adzoneId);
_69.con=$(_1.AD1_PREFIX+idd)?$(_1.AD1_PREFIX+idd):$(_1.AD_PREFIX+_2+_69.adzoneId);
_69.hasCon=_69.con?true:false;
if(_69.hasCon){
_69.con.jebeAdboxCode=_1.ADBOX_PREFIX+_69.adzoneId;
}
};
_4.Adzone.dealSpecialAdzoneDom=function(_6a){
if(_6a.hasCon&&_4.Adzone.makeSuffixByAdzoneId(_6a.adzoneId)=="000000065"){
_6a.con.style.display="";
}
};
_4.Adzone.makeNextLoadTimeByJson=function(_6b){
return _6b.next_load_time?(_6b.next_load_time>=60000?_6b.next_load_time:60000):900000;
};
_4.Adzone.fillForSupportApp=function(_6c){
_6c.w=108;
_6c.isFirst=true;
_6c.defAds=["<div style=\"height:210px;overflow:hidden;border-bottom:1px solid #E9E9E9;text-align:left;display:table;*position:relative;width:100%;\"><div style=\"vertical-align:middle;display:table-cell;*position:absolute;*top:50%;\"><div style=\"width:104px;margin:0 auto;text-align:center;vertical-align:middle;*position:relative;*top:-50%;\"><strong><a href=\"http://wenda.renren.com\" target=\"_blank\" style=\"display:block; \">我的问题人人回答</a></strong> <a style=\"display:block;text-decoration:none;\" href=\"http://wenda.renren.com\" target=\"_blank\" > <img src=\"http://app.xnimg.cn/application/logo/20090923/14/55/L905376565791SJS.gif\" style=\"margin:10px 0;\"/> <p style=\"text-decoration:none;color:#808080;\">\"人人问答\"是人人网最新推出的问答互动平台，上\"人人问答\"，再多的问题也不怕！</p></a></div></div></div>","<div style=\"height:210px;overflow:hidden;border-bottom:1px solid\n#E9E9E9;text-align:left;display:table;*position:relative;width:100%;\">\n<div style=\n\"vertical-align:middle;display:table-cell;*position:absolute;*top:50%;\n\"> <div style=\"width:104px;margin:0\nauto;text-align:center;vertical-align:middle;*position:relative;*top:-50%;\"> <strong><a href=\"http://ads.renren.com\" style=\"display:block;\" target=\"_blank\" >人人广告精准投放</a></strong> <a style=\"display:block;text-decoration:none;\" href=\"http://ads.renren.com\" target=\"_blank\" > <img src=\"http://jebe.xnimg.cn/20100120/2055/a_main_xsOG_e0_040253.jpg\" style=\"margin:10px 0;\"/> <p style=\"text-decoration:none;color:#808080;margin-bottom:10px;\">为您提供精确到“人”的定向广告服务。操作简易、效果显著，广告也能DIY，赶快来试试吧</p> </a> </div> </div> </div>","<div style=\"height:210px;overflow:hidden;border-bottom:1px solid\n#E9E9E9;text-align:left;display:table;*position:relative;width:100%;\">\n<div style=\n\"vertical-align:middle;display:table-cell;*position:absolute;*top:50%;\n\"> <div style=\"width:104px;margin:0\nauto;text-align:center;vertical-align:middle;*position:relative;*top:-50%;\"> <strong><a href=\"http://apps.renren.com/petparty\" style=\"display:block;\" target=\"_blank\" >宠物派</a></strong> <a style=\"display:block;text-decoration:none;\" href=\"http://apps.renren.com/petparty\" target=\"_blank\" > <img src=\"http://jebe.xnimg.cn/20100120/2056/a_main_wOo9_e1_040253.JPG\" style=\"margin:10px 0;\"/> <p style=\"text-decoration:none;color:#808080;margin-bottom:10px;\">DIY你的宠物，每天都有新花样，无限精彩，尽在宠物派</p> </a> </div> </div> </div>"];
_6c.topCon=$(_1.CUPID_PREFIX+_6c.adzoneId);
_6c.hasTopCon=_6c.topCon?true:false;
_6c.subCons=[];
_6c.adboxCount=0;
if(_6c.hasTopCon){
var _6d=_6c.topCon.childNodes;
_1e.each(_6d,function(i,v){
if(v.nodeType==1){
_6c.subCons.push(v);
var _6e=v.childNodes;
v.adBoxes=[];
_1e.each(_6e,function(j,n){
if(n.nodeType==1){
n.jebeAdboxCode=_1.ADBOX_PREFIX+_6c.adzoneId+(++(_6c.adboxCount));
v.adBoxes.push(n);
}
});
}
});
}
};
_4.Adzone.makeSuffixByAdzoneId=function(_6f){
return (_6f+"").substr(3,10);
};
_4.Adzone.getOrInitInterimDom=function(){
var jj=$(_1.TEMP_DIV_ID);
if(!jj){
jj=document.createElement("div");
jj.style.height="0px";
jj.style.overflow="hidden";
jj.id=_1.TEMP_DIV_ID;
document.body.appendChild(jj);
}
return jj;
};
_4.Adzone.prototype={addAd:function(ad){
this.ads.push(ad);
},removeAll:function(){
this.ads.length=0;
},render:function(){
var _70=new Date().valueOf();
var _71=_e(this.adzoneId);
if(this.prepareAds(_70,_71)){
this.show(_70);
}else{
this.refreshTimeRemain=this.nextLoadTime;
}
if(this.hasTopCon){
if(this.prepareCupidAds(_70,_71)){
this.showCupidAd();
}else{
this.refreshTimeRemain=this.nextLoadTime;
}
}
},prepareAds:function(_72,_73){
if(!this.hasCon){
return false;
}
var jj=_4.Adzone.getOrInitInterimDom();
jj.innerHTML="";
jj.jebeAdboxCode=this.con.jebeAdboxCode;
for(var i=0;i<this.ads.length;i++){
var ad=this.ads[i];
var _74=ad.widget;
if(_74.loaded){
_74.prepareAdInAdzone(ad,jj,i,_72,_73);
}
}
return true;
},show:function(_75){
var jj=_4.Adzone.getOrInitInterimDom();
this.con.innerHTML="";
if(jj){
this.addButton(jj,_75);
if(this.ads.length==2&&(this.adzoneId=="100000000065"||this.adzoneId=="100000000093")){
var _76=document.createElement("div");
_76.className="side-item ads-content";
var ads=document.createElement("div");
ads.className="side-item-body clearfix";
var ul=document.createElement("div");
while(jj.firstChild){
ul.appendChild(jj.firstChild);
}
ads.appendChild(ul);
_76.appendChild(ads);
this.con.appendChild(_76);
ul.lastChild.style.paddingTop="10px";
ul.lastChild.className="ad-standard-65";
}else{
if(this.ads.length==3||this.ads.length==2||(this.ads.length==1&&this.ads[0].adParam.engine&&this.ads[0].adParam.engine=="1"&&this.ads[0].widgetId=="33"&&this.adzoneId=="100000000075")){
var tt=document.createElement("div");
tt.className="selfHelp";
while(jj.firstChild){
tt.appendChild(jj.firstChild);
}
if(tt.lastChild.nodeType==3){
tt.lastElementChild.className="self-text nobtborder";
}else{
tt.lastChild.className="self-text nobtborder";
}
var kk=document.createElement("div");
kk.className="will";
if(this.adzoneId!="100000000072"&&this.adzoneId!="100000000070"){
var ll=document.createElement("a");
ll.innerHTML="我要推广";
ll.href="http://bolt.jebe.renren.com/introduce.htm";
ll.target="_blank";
kk.appendChild(ll);
}
tt.appendChild(kk);
this.con.appendChild(tt);
}else{
if(this.ads.length==5){
var ul=document.createElement("ul");
ul.className="banners";
ul.id="promotion_banners";
while(jj.firstChild){
ul.appendChild(jj.firstChild);
}
var _77=ul.getElementsByTagName("li");
var _78;
var _79;
for(var i=1;i<=_77.length;i++){
if(i==1){
_77[i-1].setAttribute("style","display: block;");
}
_77[i-1].setAttribute("switcher","banners_"+i);
}
if(ul.lastChild.nodeType==3){
ul.lastElementChild.className="self-text nobtborder";
}else{
ul.lastChild.className="self-text nobtborder";
}
var kk=document.createElement("div");
kk.className="will";
var ll=document.createElement("a");
ll.innerHTML="我要推广";
ll.href="http://bolt.jebe.renren.com/introduce.htm";
ll.target="_blank";
kk.appendChild(ll);
ul.appendChild(kk);
this.con.appendChild(ul);
}else{
if(this.ads.length==0){
return;
}
for(var i=0;i<jj.childNodes.length;i++){
var _7a=jj.childNodes[i];
if(this.con.className==_7a.className&&this.con.tagName==_7a.tagName){
while(_7a.firstChild){
this.con.appendChild(_7a.firstChild);
}
}else{
this.con.appendChild(_7a);
i--;
}
}
if(this.ads.length==1){
return;
}
if(this.con.lastChild.nodeType==3){
this.con.lastElementChild.className="self-text nobtborder";
}else{
this.con.lastChild.className="self-text nobtborder";
}
var kk=document.createElement("div");
kk.className="will";
var ll=document.createElement("a");
ll.innerHTML="我要推广";
ll.href="http://bolt.jebe.renren.com/introduce.htm";
ll.target="_blank";
kk.appendChild(ll);
this.con.appendChild(kk);
}
}
}
}
},addButton:function(_7b,_7c){
if(this.ads){
for(var i=0;i<this.ads.length;i++){
if(this.ads[i].adParam&&this.ads[i].adParam.monitor_url){
var url=this.ads[i].adParam.monitor_url;
url=decodeURIComponent(url);
if(this.ads[i].adParam.engine=="0"){
url=url.replace(/\[timestamp\]/g,XN.jebe.timestamp);
}
url="http://"+url.replace("http://","");
var reg=new RegExp("(^http)://(\\w)+.(\\w)+");
if(reg.test(url)){
try{
_1e.sendStats(url);
}
catch(e){
console.error(e);
}
}
}
}
}
if(this.adzoneId!="100000000060"){
if(this.adzoneId!="100000000065"&&this.adzoneId!="100000000077"&&this.adzoneId!="100000000078"&&this.adzoneId!="100000000069"&&this.adzoneId!="100000000074"&&this.adzoneId!="100000000067"&&this.adzoneId!="100000000093"&&this.adzoneId!="100000000001"&&this.adzoneId!="100000000100"&&this.adzoneId!="100000000101"&&this.adzoneId!="100000020005"&&this.adzoneId!="100000020006"&&this.adzoneId!="100000020007"&&this.adzoneId!="100000020008"&&this.adzoneId!="100000020009"&&this.adzoneId!="100000020010"&&this.adzoneId!="100000020011"&&this.adzoneId!="100000020012"&&this.adzoneId!="100000020013"&&this.adzoneId!="100000020014"){
for(var p=0;p<_7b.childNodes.length;p++){
if(_7b.childNodes[p].nodeType==1&&!this.renderEle){
_7b.childNodes[p].style.borderTop="1px solid #CEE1EE ";
break;
}
}
}
}
if(this.adzoneId=="100000000060"&&$("ad1000000060")&&$("ad1000000060").className!="Widget"&&(window.location+"").indexOf("#//")>-1){
if(_1e.IE){
if(_7b.childNodes[0]){
_7b.childNodes[0].style.borderTop="1px solid #CEE1EE";
}
}else{
if(_7b.childNodes[1]){
_7b.childNodes[1].style.borderTop="1px solid #CEE1EE";
}
}
}
this.addMouseEvent(this.adzoneId,_7c);
},addMouseEvent:function(_7d,_7e){
var _7f=_7d,_80=this.container;
if(_7d=="100000000060"){
var _81="ad1000000060";
}else{
if(_7d=="100000000065"){
var _81="ad1000000065";
}else{
var _81="ad"+_7d;
}
}
var _82="";
if(_80.adzones[_7f].ads[0]&&_80.adzones[_7f].ads[0].adParam){
_82=_80.adzones[_7f].ads[0].adParam.click_url;
if(_80.adzones[_7f].ads[0].adParam.engine==1){
_82=_82.replace(/(url=)[^&]+/g,"$1");
}
}
var mss=0;
var _83=true;
var i=0;
function _84(){
var sw=$(_81);
var lx=[],ly=[];
lx[0]=function getleft(el){
var _85=el.offsetLeft;
if(el.offsetParent!=null){
_85+=arguments.callee(el.offsetParent);
}
return _85;
}(sw);
lx[1]=sw.offsetWidth+lx[0];
ly[0]=function gettop(el){
var _86=el.offsetTop;
if(el.offsetParent!=null){
_86+=arguments.callee(el.offsetParent);
}
return _86;
}(sw);
ly[1]=sw.offsetHeight+ly[0];
return function(e){
var e=e||window.event;
var x=_1e.pointerX(e);
var y=_1e.pointerY(e);
if(x>lx[1]||x<lx[0]||y>ly[1]||y<ly[0]){
_83=true;
_1e.delEvent("opi","mousemove",arguments.callee);
}
};
};
if(location.pathname.toLowerCase()=="/home.do"){
_1e.addEvent(_81,"mouseover",function(){
if(_83&&(new Date()-mss)>1000){
_83=false;
mss=new Date();
_1e.addEvent("opi","mousemove",_84());
new Image().src=_82+"http://about:blank?abflag=mouseover&t="+Math.random();
}
});
}
var _87=function(_88){
return _88.getFullYear()+"-"+((_88.getMonth()+1)<10?"0":"")+(_88.getMonth()+1)+"-"+(_88.getDate()<10?"0":"")+_88.getDate()+" "+(_88.getHours()<10?"0":"")+_88.getHours()+":"+(_88.getMinutes()<10?"0":"")+_88.getMinutes()+":"+(_88.getSeconds()<10?"0":"")+_88.getSeconds();
};
var _89=function(ads){
var _8a=[];
var _8b=ads[0].adId;
var _8c=_8b.substring(0,_8b.length-5);
var _8d=_8c.substring(0,_8c.length-4);
_8a.push(_8d);
_8a.push(_8c);
_8a.push(_8b);
return _8a;
};
var _8e=this.ads;
if($(_7d+"_widgetRefresh_"+_7e)){
_1e.addEvent(_7d+"_widgetRefresh_"+_7e,"click",function(){
_1e.refreshOld(0);
widget_refresh=1;
setTimeout(function(){
_80.refreshSpecifyAdzones([_7f],3);
},100);
var _8f="http://rest.widgetbox.jebe.renren.com/widgetboxs/rest/widget?";
var _90=encodeURIComponent(_87(new Date()));
var _91=_89(_8e);
var _92=_8e[0].widgetId;
var _93=encodeURIComponent(location.href);
var _94=[];
_94.push(_8f);
_94.push("log_tag=widgetRefresh&count=1&member_id=0");
_94.push("&user_id="+XN.user.id);
_94.push("&adzone_id="+_7d);
_94.push("&time="+_90);
_94.push("&campaign_id="+_91[0]);
_94.push("&adgroup_id="+_91[1]);
_94.push("&creative_id="+_91[2]);
_94.push("&referer="+_93);
_94.push("&widget_id="+_92);
var _95=_94.join("");
new XN.net.xmlhttp({url:_95,method:"get",onSuccess:function(){
},onError:function(){
}});
return false;
});
}
},getCurAdBox:function(_96){
var _97=null;
var _98=this.getCurActiveCon();
if(_98!=null){
if(_96<_98.adBoxes.length){
_97=_98.adBoxes[_96];
}
}
return _97;
},getCurActiveCon:function(){
var _99=null;
for(var i=0;i<this.subCons.length;i++){
var v=this.subCons[i];
if(v.style.left==-this.w+"px"){
_99=v;
}
}
return _99;
},prepareCupidAds:function(_9a,_9b){
var _9c=this.getCurActiveCon();
if(_9c==null){
return false;
}
var _9d=0;
var _9e=_9c.adBoxes;
for(var i=0;i<this.ads.length&&_9d<_9e.length;i++){
var ad=this.ads[i];
var _9f=ad.widget;
if(_9f.loaded){
_9f.prepareAdInAdzone(ad,this.getCurAdBox(_9d++),i,_9a,_9b);
}
}
for(var j=0;j<this.defAds.length&&_9d<_9e.length;j++,_9d++){
_9e[_9d].innerHTML=this.defAds[j];
}
_9c.style.left=-this.w+"px";
return true;
},showCupidAd:function(){
var _a0=this;
var _a1=this.subCons;
var _a2=this.w,s=10;
var _a3=this.isFirst?0:1000;
this.isFirst=false;
setTimeout(function(){
(function(){
_a2=_a2-s;
if(_a2<0){
s+=_a2;
}
_1e.each(_a1,function(i,v){
if(v.nodeType!=1){
return;
}
var l=parseInt(v.style.left);
v.style.left=l+s+"px";
});
if(_a2>0){
setTimeout(arguments.callee,100);
}else{
_a0.refreshTimeRemain=_a0.nextLoadTime;
}
})();
},_a3);
}};
_4.WidgetQuery=function(_a4){
this.prefix=_a4;
};
_4.WidgetQuery.prototype={getElementById:function(id){
return $(this.prefix+id);
},getElementsByName:function(_a5){
return document.getElementsByName(this.prefix+_a5);
}};
_4.API={};
JebeApi=_4.API;
JebeApi.RequestCache=[];
JebeApi.CacheExcute=function(){
var _a6=JebeApi.RequestCache;
var _a7=[];
if(_a6.length>0){
for(var i=0;i<_a6.length;i++){
for(var a=0;a<_a6[i].requests.length;a++){
_a7.push(_a6[i].requests[a]);
}
}
var _a8=function(_a9){
var _aa=eval("{"+_a9.responseText+"}");
for(var j=0;j<_aa.length;j++){
if(_a7[j].callback){
_a7[j].callback(_aa[j]);
}
}
JebeApi.CacheClear();
};
var _ab=function(){
};
new XN.net.xmlhttp({url:"http://rest.widgetbox.jebe.renren.com/widgetboxs/rest/execute.htm",method:"post",data:"&content="+encodeURIComponent(XN.JSON.build(_a7)),onSuccess:_a8,onError:_ab});
}
};
JebeApi.CacheClear=function(){
JebeApi.RequestCache=[];
};
JebeApi.RestRequests=function(_ac,_ad,_ae){
this.uid=XN.cookie.get("id");
this.adID=_ac;
this.widgetID=_ad;
this.widgetVersion=_ae;
this.requests=[];
};
JebeApi.RestRequests.prototype={add:function(_af,_b0){
_af.uid=this.uid;
_af.adID=this.adID;
_af.widgetID=this.widgetID;
_af.widgetVersion=this.widgetVersion;
_af.callback=_b0;
this.requests.push(_af);
},send:function(_b1,_b2){
var _b3=this;
if(this.requests.length>0){
if(!_b1){
_b1=function(){
};
}
if(!_b2){
_b2=function(){
};
}
new XN.net.xmlhttp({url:"http://rest.widgetbox.jebe.renren.com/widgetboxs/rest/execute.htm",method:"post",data:"&content="+encodeURIComponent(XN.JSON.build(_b3.requests)),onSuccess:_b1,onError:_b2});
}
},cache:function(){
JebeApi.RequestCache.push(this);
}};
JebeApi.RequestParam=function(_b4,_b5,_b6,key,_b7){
this.serviceType=_b4;
this.methodType=_b5;
this.parameter=_b6;
this.key=key;
this.concurrent=false;
};
JebeApi.PersonRequest={serviceType:"1",newActionRequest:function(_b8,_b9,_ba,_bb){
return new JebeApi.RequestParam(this.serviceType,_b8,_b9,_ba,_bb);
},getFriendList:function(_bc,_bd,_be){
return this.newActionRequest("1",_bc,_bd,_be);
},getFriendListByFans:function(_bf,_c0,_c1){
return this.newActionRequest("2",_bf,_c0,_c1);
},getFriendListByIsFans:function(_c2,_c3,_c4){
return this.newActionRequest("3",_c2,_c3,_c4);
},getFriendListByVoted:function(_c5,_c6,_c7){
return this.newActionRequest("4",_c5,_c6,_c7);
},getFriendListByZaned:function(_c8,_c9,_ca){
return this.newActionRequest("5",_c8,_c9,_ca);
},getFriendListByFansXce:function(_cb,_cc,_cd){
return this.newActionRequest("6",_cb,_cc,_cd);
},getFriendListByVotedHbase:function(_ce,_cf,_d0){
return this.newActionRequest("7",_ce,_cf,_d0);
},getFriendListByZanedHbase:function(_d1,_d2,_d3){
return this.newActionRequest("8",_d1,_d2,_d3);
},getFriendsListBySocial:function(_d4,_d5,_d6){
return this.newActionRequest("10",_d4,_d5,_d6);
},getCountBySocial:function(_d7,_d8,_d9){
return this.newActionRequest("11",_d7,_d8,_d9);
},getJoinedBySocial:function(_da,_db,_dc){
return this.newActionRequest("12",_da,_db,_dc);
},getFriendListByVideolikeHbase:function(_dd,_de,_df){
return this.newActionRequest("14",_dd,_de,_df);
}};
JebeApi.ActionRequest={serviceType:"2",newActionRequest:function(_e0,_e1,_e2,_e3){
return new JebeApi.RequestParam(this.serviceType,_e0,_e1,_e2,_e3);
},smsRequest:function(_e4,_e5,_e6){
return this.newActionRequest("4",_e4,_e5,_e6);
},becomeFansRequest:function(_e7,_e8,_e9){
return this.newActionRequest("5",_e7,_e8,_e9);
},isFans:function(_ea,_eb,_ec){
return this.newActionRequest("6",_ea,_eb,_ec);
},getFansCount:function(_ed,_ee,_ef){
return this.newActionRequest("7",_ed,_ee,_ef);
},getPageName:function(_f0,_f1,_f2){
return this.newActionRequest("8",_f0,_f1,_f2);
},vote:function(_f3,_f4,_f5){
return this.newActionRequest("9",_f3,_f4,_f5);
},getVoteCounts:function(_f6,_f7,_f8){
return this.newActionRequest("10",_f6,_f7,_f8);
},zan:function(_f9,_fa,_fb){
return this.newActionRequest("11",_f9,_fa,_fb);
},getZanCounts:function(_fc,_fd,_fe){
return this.newActionRequest("12",_fc,_fd,_fe);
},sendWidgetClickLog:function(_ff,_100,_101){
return this.newActionRequest("15",_ff,_100,_101);
},sendVideoLike:function(_102,_103,_104){
return this.newActionRequest("16",_102,_103,_104);
},getVideo:function(_105,_106,_107){
return this.newActionRequest("17",_105,_106,_107);
},setVideo:function(_108,_109,_10a){
return this.newActionRequest("18",_108,_109,_10a);
},AddPage2Friend:function(_10b,_10c,_10d){
return this.newActionRequest("19",_10b,_10c,_10d);
},likeAd:function(_10e,_10f,_110){
return this.newActionRequest("20",_10e,_10f,_110);
},unLikeAd:function(_111,_112,_113){
return this.newActionRequest("21",_111,_112,_113);
},getAdLikeCount:function(_114,_115,_116){
return this.newActionRequest("22",_114,_115,_116);
},getLikedAds:function(_117,_118,_119){
return this.newActionRequest("23",_117,_118,_119);
},blockAd:function(_11a,_11b,_11c){
return this.newActionRequest("24",_11a,_11b,_11c);
},sendFeed:function(_11d,_11e,_11f){
return this.newActionRequest("25",_11d,_11e,_11f);
},getClickCount:function(_120,_121,_122){
return this.newActionRequest("26",_120,_121,_122);
},getUserCity:function(_123,_124,_125){
return this.newActionRequest("27",_123,_124,_125);
},getUserScholl:function(_126,_127,_128){
return this.newActionRequest("28",_126,_127,_128);
}};
JebeApi.DataRequest={serviceType:"3",newDataRequest:function(_129,_12a,_12b,_12c){
return new JebeApi.RequestParam(this.serviceType,_129,_12a,_12b,_12c);
},newAddRequest:function(_12d,key,_12e,_12f,_130){
return this.newDataRequest("1",{"primaryKey":_12d,"key":key,"value":_12e},_12f,_130);
},newAddMuchRequest:function(_131,map,_132,_133){
return this.newDataRequest("2",{"primaryKey":_131,"map":map},_132,_133);
},newRemoveRequest:function(_134,key,_135,_136){
return this.newDataRequest("3",{"primaryKey":_134,"key":key},_135,_136);
},newRemoveMuchRequest:function(_137,_138,_139){
return this.newDataRequest("4",{"primaryKey":_137},_138,_139);
},newGetRequest:function(_13a,key,_13b,_13c){
return this.newDataRequest("5",{"primaryKey":_13a,"key":key},_13b,_13c);
},newGetMuchRequest:function(_13d,_13e,_13f){
return this.newDataRequest("6",{"primaryKey":_13d},_13e,_13f);
},newAddOneRequest:function(_140,_141,_142){
return this.newDataRequest("7",{"primaryKey":_140},_141,_142);
},voteRequest:function(_143,map,_144,_145){
return this.newDataRequest("8",{"primaryKey":_143,"map":map},_144,_145);
},getVoteCountRequest:function(_146,key,_147,_148){
return this.newDataRequest("9",{"primaryKey":_146,"key":key},_147,_148);
},zanRequest:function(_149,map,_14a,_14b){
return this.newDataRequest("10",{"primaryKey":_149,"map":map},_14a,_14b);
},getZanCountRequest:function(_14c,key,_14d,_14e){
return this.newDataRequest("11",{"primaryKey":_14c,"key":key},_14d,_14e);
},getQuestionaryList:function(_14f,_150,_151){
return this.newDataRequest("13",_14f,_150,_151);
},answerQuestionary:function(_152,_153,_154){
return this.newDataRequest("16",_152,_153,_154);
}};
var _155=XN.cookie.get("id");
var _156=[];
var _157=_1e.getCreateId();
if($("sponsorsWidget")){
$("sponsorsWidget").id="ad1000000060";
$("ad1000000060").style.display="";
}
var _158=null;
var _159=null;
var _15a=900000;
var _15b=20000;
var _15c=new Array();
var _15d=[1,1,1,1,1,1,1];
var _15e=new Array();
var _15f=new Date().valueOf();
function _160(_161){
var _162=_29[_28-1];
if(_15c[_161]){
_15c[_161]++;
}else{
_15c[_161]=1;
}
if(_15c[_161]>=_15d[_161]){
var d=new Date().valueOf();
var max=_15e[_161]||0;
if(d-_15f>max){
_15f=d;
_15c[_161]=0;
_162.refreshSpecifyAdzones(null,_161);
}
}
};
_1e.jebe.refreshAd=_160;
(function(){
var _163=false;
var _164=function(o){
var r=o.url||location.href,_165=o.container;
if(r.match(/http:\/\/huodong\.renren\.com\/renrenxiangai/ig)){
_165.maxUpdateCount=0;
}else{
if(r.match(/http:\/\/www\.renren\.com\/home/ig)){
if((!o.container.adzones[100000000037]||_165.adzones[100000000037].ads.length==0)&&(!_165.adzones[100000000066]||_165.adzones[100000000066].ads.length==0)){
if($("header-wide-banner")){
$("header-wide-banner").hide();
}
}
}else{
if(((!_165.adzones[100000000003]||_165.adzones[100000000003].ads.length==0)||(!_165.adzones[100000000004]||_165.adzones[100000000004].ads.length==0))&&((!_165.adzones[100000000051]||_165.adzones[100000000051].ads.length==0)||(!_165.adzones[100000000052]||_165.adzones[100000000052].ads.length==0))){
if($("banner")){
$("banner").hide();
}
if($("header-wide-banner")){
$("header-wide-banner").hide();
}
}
}
}
};
renderLater=function(o){
o.container.render();
_20.resetJebeJson();
_164(o);
(function(){
if(o.container.nextCheckTimer){
clearTimeout(o.container.nextCheckTimer);
o.container.refreshSpecifyAdzones(null,0);
}else{
if(o.container.maxUpdateCount>0||o.container.maxUpdateCount==-1){
o.container.nextCheckTimer=setTimeout(arguments.callee,o.container.nextLoadTime);
}
}
})();
};
previewAd=function(o){
var _166=o.container;
jebe_ad_render=true;
_1e.xmlHttp({url:_3.PREVIEW_AD_URL+_157,method:"get",onSuccess:function(req){
var _167=eval("("+req.responseText+")"),_168=_166.adzones[_167.adzone_id];
if(_168){
_168.removeAll();
}else{
_168=new _4.Adzone({adzone_id:_167.adzone_id});
_166.addAdzone(_168);
}
if(!_167.data.ad_param.click_url){
_167.data.ad_param.click_url="http://ebp.renren.com/ebpn/click.html?aid="+_157+"&mc=7%5ec2305772640469516287%5ec"+_157+"%5ec0%5ec0%5ec0%5ec0%5ec1289451174%5ec1000000_"+(_1e.getUid())+"%7c1%7c1983-01-01%7c27%7c4%7c0086110000000000%7c0_0086000000000000%7c0%7c0%7c0%7c0086110000000000%5ec100000000037%5ec10414574138294274&url=";
}
var ad=new _4.Ad(_167.data);
_168.addAd(ad);
var _169=_166.getOrInitWidget(ad,_168.adzoneId);
ad.setWidget(_169);
renderLater(o);
},onError:function(){
}});
};
renderOrShowLater=function(o){
o.container.loadDataFromJebeJson(o.adInitJson);
jebe_ad_render=false;
if(!o.createId){
renderLater(o);
return false;
}
previewAd(o);
};
_4.dispatcher=function(o){
_1e.extend(o.container,{params:o});
if(o.layerPrefix){
_2=o.layerPrefix;
}else{
_2="";
}
if(!_163&&!document.getElementById("jebe-widgetbox-style")){
XN.jebe.addWidgetBoxCss();
_163=true;
}
if(o.adInitJson){
renderOrShowLater(o);
}else{
var _16a={"userid":_1e.getUid(),"tt":new Date().getTime(),"isvip":_1e.isVip,"hideads":_1e.isHideAds,r:o.adInitLocation};
if(document.referrer.length>0&&document.referrer.indexOf("renren.com")<=-1){
_16a.adzoneId=document.getElementById("adzoneid").getAttribute("data");
XN.loadFile({type:"js",file:"http://ebpx.renren.com/ebpn/show?"+XN.array.toQueryString(_16a)},function(){
_1e.extend(o,{adInitJson:window[_1.JEBE_JSON]});
_20.resetJebeJson();
renderOrShowLater(o);
});
}else{
XN.loadFile({type:"js",file:"http://ebp.renren.com/ebpn/show?"+XN.array.toQueryString(_16a)},function(){
_1e.extend(o,{adInitJson:window[_1.JEBE_JSON]});
_20.resetJebeJson();
renderOrShowLater(o);
});
}
}
};
})();
_1e.domReady(function(){
_4.container=new _4.Container();
_4.dispatcher({createId:_1e.getCreateId(),container:_4.container,adInitJson:window[_1.JEBE_JSON],layerPrefix:""});
});
!function(){
function d(a){
return v(k(t(a),a.length*c));
};
function e(a){
return w(k(t(a),a.length*c));
};
function f(a){
return u(k(t(a),a.length*c));
};
function g(a,b){
return v(q(a,b));
};
function h(a,b){
return w(q(a,b));
};
function i(a,b){
return u(q(a,b));
};
function k(a,b){
var c,d,e,f,g,h,i,j,k;
for(a[b>>5]|=128<<b%32,a[(b+64>>>9<<4)+14]=b,c=1732584193,d=-271733879,e=-1732584194,f=271733878,g=0;g<a.length;g+=16){
h=c,i=d,j=e,k=f,c=m(c,d,e,f,a[g+0],7,-680876936),f=m(f,c,d,e,a[g+1],12,-389564586),e=m(e,f,c,d,a[g+2],17,606105819),d=m(d,e,f,c,a[g+3],22,-1044525330),c=m(c,d,e,f,a[g+4],7,-176418897),f=m(f,c,d,e,a[g+5],12,1200080426),e=m(e,f,c,d,a[g+6],17,-1473231341),d=m(d,e,f,c,a[g+7],22,-45705983),c=m(c,d,e,f,a[g+8],7,1770035416),f=m(f,c,d,e,a[g+9],12,-1958414417),e=m(e,f,c,d,a[g+10],17,-42063),d=m(d,e,f,c,a[g+11],22,-1990404162),c=m(c,d,e,f,a[g+12],7,1804603682),f=m(f,c,d,e,a[g+13],12,-40341101),e=m(e,f,c,d,a[g+14],17,-1502002290),d=m(d,e,f,c,a[g+15],22,1236535329),c=n(c,d,e,f,a[g+1],5,-165796510),f=n(f,c,d,e,a[g+6],9,-1069501632),e=n(e,f,c,d,a[g+11],14,643717713),d=n(d,e,f,c,a[g+0],20,-373897302),c=n(c,d,e,f,a[g+5],5,-701558691),f=n(f,c,d,e,a[g+10],9,38016083),e=n(e,f,c,d,a[g+15],14,-660478335),d=n(d,e,f,c,a[g+4],20,-405537848),c=n(c,d,e,f,a[g+9],5,568446438),f=n(f,c,d,e,a[g+14],9,-1019803690),e=n(e,f,c,d,a[g+3],14,-187363961),d=n(d,e,f,c,a[g+8],20,1163531501),c=n(c,d,e,f,a[g+13],5,-1444681467),f=n(f,c,d,e,a[g+2],9,-51403784),e=n(e,f,c,d,a[g+7],14,1735328473),d=n(d,e,f,c,a[g+12],20,-1926607734),c=o(c,d,e,f,a[g+5],4,-378558),f=o(f,c,d,e,a[g+8],11,-2022574463),e=o(e,f,c,d,a[g+11],16,1839030562),d=o(d,e,f,c,a[g+14],23,-35309556),c=o(c,d,e,f,a[g+1],4,-1530992060),f=o(f,c,d,e,a[g+4],11,1272893353),e=o(e,f,c,d,a[g+7],16,-155497632),d=o(d,e,f,c,a[g+10],23,-1094730640),c=o(c,d,e,f,a[g+13],4,681279174),f=o(f,c,d,e,a[g+0],11,-358537222),e=o(e,f,c,d,a[g+3],16,-722521979),d=o(d,e,f,c,a[g+6],23,76029189),c=o(c,d,e,f,a[g+9],4,-640364487),f=o(f,c,d,e,a[g+12],11,-421815835),e=o(e,f,c,d,a[g+15],16,530742520),d=o(d,e,f,c,a[g+2],23,-995338651),c=p(c,d,e,f,a[g+0],6,-198630844),f=p(f,c,d,e,a[g+7],10,1126891415),e=p(e,f,c,d,a[g+14],15,-1416354905),d=p(d,e,f,c,a[g+5],21,-57434055),c=p(c,d,e,f,a[g+12],6,1700485571),f=p(f,c,d,e,a[g+3],10,-1894986606),e=p(e,f,c,d,a[g+10],15,-1051523),d=p(d,e,f,c,a[g+1],21,-2054922799),c=p(c,d,e,f,a[g+8],6,1873313359),f=p(f,c,d,e,a[g+15],10,-30611744),e=p(e,f,c,d,a[g+6],15,-1560198380),d=p(d,e,f,c,a[g+13],21,1309151649),c=p(c,d,e,f,a[g+4],6,-145523070),f=p(f,c,d,e,a[g+11],10,-1120210379),e=p(e,f,c,d,a[g+2],15,718787259),d=p(d,e,f,c,a[g+9],21,-343485551),c=r(c,h),d=r(d,i),e=r(e,j),f=r(f,k);
}
return Array(c,d,e,f);
};
function l(a,b,c,d,e,f){
return r(s(r(r(b,a),r(d,f)),e),c);
};
function m(a,b,c,d,e,f,g){
return l(b&c|~b&d,a,b,e,f,g);
};
function n(a,b,c,d,e,f,g){
return l(b&d|c&~d,a,b,e,f,g);
};
function o(a,b,c,d,e,f,g){
return l(b^c^d,a,b,e,f,g);
};
function p(a,b,c,d,e,f,g){
return l(c^(b|~d),a,b,e,f,g);
};
function q(a,b){
var e,f,g,h,d=t(a);
for(d.length>16&&(d=k(d,a.length*c)),e=Array(16),f=Array(16),g=0;16>g;g++){
e[g]=909522486^d[g],f[g]=1549556828^d[g];
}
return h=k(e.concat(t(b)),512+b.length*c),k(f.concat(h),640);
};
function r(a,b){
var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);
return d<<16|65535&c;
};
function s(a,b){
return a<<b|a>>>32-b;
};
function t(a){
var e,b=Array(),d=(1<<c)-1;
for(e=0;e<a.length*c;e+=c){
b[e>>5]|=(a.charCodeAt(e/c)&d)<<e%32;
}
return b;
};
function u(a){
var e,b="",d=(1<<c)-1;
for(e=0;e<32*a.length;e+=c){
b+=String.fromCharCode(a[e>>5]>>>e%32&d);
}
return b;
};
function v(b){
var e,c=a?"0123456789ABCDEF":"0123456789abcdef",d="";
for(e=0;e<4*b.length;e++){
d+=c.charAt(15&b[e>>2]>>8*(e%4)+4)+c.charAt(15&b[e>>2]>>8*(e%4));
}
return d;
};
function w(a){
var c,d,e,f,g;
for(log(a),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d="",e=0;e<4*a.length;e+=3){
for(f=(255&a[e>>2]>>8*(e%4))<<16|(255&a[e+1>>2]>>8*((e+1)%4))<<8|255&a[e+2>>2]>>8*((e+2)%4),g=0;4>g;g++){
d+=8*e+6*g>32*a.length?b:c.charAt(63&f>>6*(3-g));
}
}
return d;
};
var a=0,b="",c=8;
window.hex_md5=d,window.b64_md5=e,window.str_md5=f,window.hex_hmac_md5=g,window.b64_hmac_md5=h,window.str_hmac_md5=i;
}();
function _16b(_16c){
var _16d=this;
this.isSurport=this.checkSurport();
if(!this.isSurport){
_16d.userdata=null;
_16d.dataname=_16c||"rradcookie";
function _16e(){
if(!_16d.userdata){
try{
_16d.userdata=document.createElement("input");
_16d.userdata.type="hidden";
_16d.userdata.style.display="none";
_16d.userdata.addBehavior("#default#userData");
document.body.appendChild(_16d.userdata);
var _16f=new Date();
_16f.setDate(_16f.getDate()+365);
_16d.userdata.expires=_16f.toUTCString();
}
catch(e){
}
}
};
_16e();
}
};
_16b.prototype={checkSurport:function(){
return window.localStorage!==undefined?true:false;
},getItem:function(key){
if(this.isSurport){
return window.localStorage.getItem(key);
}else{
try{
this.userdata.load(this.dataname);
return this.userdata.getAttribute(key);
}
catch(e){
return "";
}
}
},setItem:function(key,_170){
if(this.isSurport){
return window.localStorage.setItem(key,_170);
}else{
try{
this.userdata.load(this.dataname);
this.userdata.setAttribute(key,_170);
this.userdata.save(this.dataname);
}
catch(e){
return false;
}
}
},removeItem:function(key){
if(this.isSurport){
return window.localStorage.removeItem(key);
}else{
try{
this.userdata.load(this.dataname);
this.userdata.removeAttribute(key);
this.userdata.save(this.dataname);
}
catch(e){
return false;
}
}
}};
function _171(url,_172){
var _173=document.createElement("script");
_173.onload=_173.onreadystatechange=function(){
if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){
_173.onload=_173.onreadystatechange=null;
}
};
_173.type="text/javascript";
_173.src=url+"&callback="+_172;
document.getElementsByTagName("head")[0].appendChild(_173);
};
window.dspCookieMapping=function(){
_171("http://xray.jebe.renren.com/xray/cookie/cm.htm?","dspExchangeMapping");
var _174=this.getjebeKey();
var _175=_174.split("|");
_175[4]=+new Date();
XN.cookie.set("jebe_key",_175.join("|"),100000,"/","renren.com");
_176.setItem("jebe_key",_175);
};
window.dspExchangeMapping=function(obj){
var len=obj.length;
if(len>0){
for(var i=0;i<len;i++){
new Image().src=obj[i];
}
}
};
var _176=new _16b("rradcookie");
var _177={requestCookie:function(){
var uid=XN.cookie.get("id")||"0";
var _178=XN.cookie.get("jebe_key")||_176.getItem("jebe_key");
var _179="http://xray.jebe.renren.com/xray/cookie/getjebekey.htm?uid="+uid;
var self=this;
function _17a(info){
var _17b=info.jebe_key+"|"+(+new Date());
XN.cookie.set("jebe_key",_17b,100000,"/","renren.com");
_176.setItem("jebe_key",_17b);
_178=XN.cookie.get("jebe_key")||_176.getItem("jebe_key");
self.cookieMapping(_178,1);
};
window.reqCall=_17a;
_171(_179,"reqCall");
},updateCookie:function(){
var uid=XN.cookie.get("id")||"0";
wmcookie=XN.cookie.get("jebe_key")||_176.getItem("jebe_key");
var _17c="http://xray.jebe.renren.com/xray/cookie/updatejebekey.htm?uid="+uid+"&jebe_key="+wmcookie;
var self=this;
function _17d(info){
var _17e=info.jebe_key+"|"+(+new Date());
XN.cookie.set("jebe_key",_17e,100000,"/","renren.com");
_176.setItem("jebe_key",_17e);
self.cookieMapping(wmcookie);
};
window.upCall=_17d;
_171(_17c,"upCall");
},getjebeKey:function(){
return XN.cookie.get("jebe_key")||_176.getItem("jebe_key");
},checkCookie:function(){
var _17f=this.getjebeKey();
if(!!_17f){
var arr=decodeURIComponent(_17f).split("|");
var time=parseInt(arr[2])+2592000000;
id=XN.cookie.get("id")||0;
var uid=hex_md5(id);
if((time<=(new Date()).getTime())||(arr[1]!=uid)&&id!=0){
this.updateCookie();
}else{
_17f=XN.cookie.get("jebe_key")||_176.getItem("jebe_key");
this.cookieMapping(_17f);
}
}else{
this.requestCookie();
}
},cookieMapping:function(_180){
if(arguments.length==2){
dspCookieMapping();
}
var arr=_180.split("|");
if(arr.length>4){
var _181=arr[4];
var now=+new Date();
if(now-_181>=86400000){
dspCookieMapping();
}
}else{
dspCookieMapping();
}
},init:function(){
this.checkCookie();
}};
window.getjebeKey=_177.getjebeKey;
_177.init();
})();

