object.add("xn/mentionMain",function(e){var t=this.Mention=function(){this.reg=/@[^@\s\)]{0,20}$/,this.input=null,this.ugcId="",this.ugcType="",this.ownerId="",this.popTop=!1,this.scrollable=!1,this.titles={0:"你想用@提到谁？",1:"由于隐私这里只能@共同好友",2:"由于隐私这里不能使用@",3:"杯具了，网络错误暂时不能@了:(",4:"选择最近@过的朋友，或继续输入姓名",5:"由于内容隐私，只能@部分好友"},this.disabled=!1,extendObject(this,arguments[0]),XN.event.enableCustomEvent(this)};t.init=function(e){var n=e.obj,r=e.ugcId,i=e.ugcType,s=e.ownerId,o=e.scrollable,u=e.popTop,a=e.whisper,f=e.button,l=e.limit,c=e.recentLimit;if(n.mention||n.tagName.toLowerCase()!="input"&&n.tagName.toLowerCase()!="textarea")return;n.getAttribute("data-privacy")&&(n.privacyJson=n.getAttribute("data-privacy")),XN.browser.IE&&(n.style.fontFamily=document.body.currentStyle.fontFamily,n.style.fontSize=document.body.currentStyle.fontSize),n=$(n),n.mention||(n.mention=new t({input:n,ugcId:r,ugcType:i,ownerId:s,scrollable:o,popTop:u,whisper:a,button:f,limit:l,recentLimit:c})),n.mention.check(),n.addEvent("keyup",function(e){n.mention.check(),n.mention.doNotCheck=!1}),n.addEvent("mouseup",function(e){n.mention.check()}),n.addEvent("focus",function(){n.mention.check()}),n.addEvent("keydown",function(e){e.keyCode==13&&n.mention.noMatch&&n.mention.selector.menu.hide(),(e.keyCode==13||e.keyCode==38||e.keyCode==40)&&n.mention.selectorShow&&!n.mention.noMatch&&(n.mention.doNotCheck=!0,XN.event.stop(e),n.mention.selector._inputOnkeydown(e))})},t.prototype={key:"",keyIndex:"",front:"",last:"",flag:null,atPos:{},curPos:null,masker:null,selector:null,selectorShow:!1,doNotCheck:!1,noMatch:!1,fsInput:null,privacy:"haveNotCheck",tip:null,log:function(e){console&&console.log&&console.log(e)},check:function(){if(this.disabled)return;if(this.doNotCheck)return;this.initSelector();if(!this.selector)return;if(this.isChecking)return;this.isChecking=!0;var e=$("whisper"),t=$("shareThis"),n=$("whisperForTheatre");e&&this.whisper&&(e.checked?this.privacy=2:this.privacy=this.oldPrivacy,this.renewTip(),/@.+\(\d+\)\s/.test(this.input.value)?e.checked||(e.disabled=!0):(t||(e.disabled=!1),!!t&&!t.checked&&(e.disabled=!1))),n&&this.whisper&&(n.checked?this.privacy=2:this.privacy=this.oldPrivacy,this.renewTip(),/@.+\(\d+\)\s/.test(this.input.value)?n.checked||(n.disabled=!0):(t||(n.disabled=!1),!!t&&!t.checked&&(n.disabled=!1))),this.curPos=this.getCurPos();var r=this.input.value.substring(0,this.curPos).match(this.reg);if(r){this.key=r[0].slice(1),this.keyIndex=r.index,this.front=this.input.value.substring(0,this.keyIndex),this.setContent(),this.atPos={X:this.flag.realLeft()-this.masker.scrollLeft+2,Y:this.flag.realTop()-this.masker.scrollTop+this.flag.offsetHeight+4};var i={key:this.key,pos:this.atPos};this.privacy!=0&&this.privacy!=1&&this.privacy!=5?this.selector.menu.show():(this.fsInput.value=this.key,this.selector._startCheck(),this.selector.menu.show()),this.renewTip();if(r[0]=="@"&&XN.user.recentAt&&(this.privacy==0||this.privacy==5)){try{this.selector._buildMenu(XN.user.recentAt),XN.element.delClass(this.selector._currentLi,this.selector.getConfig("liHoverClass")),this.selector._currentLi=null}catch(s){}this.privacy==0&&this.renewTip(4)}this.locateMenu(),this.selectorShow=!0,this.fireEvent("atInputed",i),window.replyAttachBottomClass&&this.checkAttachBottom()}else this.fsInput.value="",this.selector.menu.hide(),this.selectorShow=!1,this.fireEvent("noAtNow");this.isChecking=!1},checkAttachBottom:function(){if(!this.button)return;if(!this.getParentFromClass(this.button,"a-feed"))return;if(document.getElementById("newsfeed-module-box-matter"))return;var e=XN.element.parent(this.button,".feed-comment"),t=Sizzle(".comment-box",e)[0],n=$("dropmenuHolder");if(XN.element.hasClassName(e,"feed-comment-attach")){Sizzle(".mentionFrdList",e)[0]||t.appendChild(this.selector._menuList),this.selector._menuList.style.top="auto",this.selector._menuList.style.bottom="76px";var r=this.atPos.X-parseInt(e.style.left)-72;XN.browser.IE&&(r+=12,this.atPos.X<parseInt(e.style.left)&&(r+=n.realLeft()+$("sidebar").clientWidth)),this.selector._menuList.style.left=r+"px"}else this.selector._menuList.style.bottom="auto",(Sizzle(".mentionFrdList",e)[0]||!Sizzle(".mentionFrdList",n)[0])&&n.appendChild(this.selector._menuList)},getCss:function(){var e=this.input;if(window.getComputedStyle)var t=window.getComputedStyle(e,null);else var t=e.currentStyle;return t},getCurPos:function(){var e=this.input,t=0;if(XN.browser.IE&&e.tagName.toLowerCase()=="input"){var n=document.selection.createRange(),r=e.createTextRange();r.collapse(!0),r.select();var i=document.selection.createRange();i.setEndPoint("EndToEnd",n),t=i.text.length,n.select()}else try{t=XN.form.help(e).cursorPosition().start}catch(s){t=0}return t},mask:function(){if(this.masker){this.locateMasker();return}this.appendMasker(),this.locateMasker()},appendMasker:function(){this.masker=$element("div");var e=this.getCss(),t=this.input.tagName.toLowerCase()=="input",n;XN.browser.IE?n=4:n=2,this.scrollable?this.masker.style.cssText="width:"+e.width+";"+"box-sizing:"+e.boxSizing+";"+"padding-left:"+e.paddingLeft+";"+"padding-right:"+e.paddingRight+";"+"height:"+this.input.clientHeight+"px;"+"line-height:"+e.lineHeight+";"+"border-left-style:"+e.borderLeftStyle+";"+"border-right-style:"+e.borderRightStyle+";"+"border-top-style:"+e.borderTopStyle+";"+"border-bottom-style:"+e.borderBottomStyle+";"+"border-left-width:"+e.borderLeftWidth+";"+"border-right-width:"+e.borderRightWidth+";"+"border-top-width:"+e.borderTopWidth+";"+"border-bottom-width:"+e.borderBottomWidth+";"+"border-left-color:"+e.borderLeftColor+";"+"border-right-color:"+e.borderRightColor+";"+"border-top-color:"+e.borderTopColor+";"+"border-bottom-color:"+e.borderBottomColor+";"+"overflow-y:hidden;"+"overflow-x:hidden;"+"font-size:"+e.fontSize+";"+"font-weight:"+e.fontWeight+";"+"font-family:"+e.fontFamily+";"+"font-style:"+e.fontStyle+";"+"word-wrap:"+(t?"normal":"break-word")+";"+"z-index:-1000;position:absolute;visibility:hidden":this.masker.style.cssText="width:"+(this.input.clientWidth-n)+"px;"+"padding-left:"+e.paddingLeft+";"+"padding-right:"+(XN.browser.IE?"0px":e.paddingRight)+";"+"height:"+this.input.clientHeight+"px;"+"line-height:"+e.lineHeight+";"+"border-left-style:"+e.borderLeftStyle+";"+"border-right-style:"+e.borderRightStyle+";"+"border-top-style:"+e.borderTopStyle+";"+"border-bottom-style:"+e.borderBottomStyle+";"+"border-left-width:"+e.borderLeftWidth+";"+"border-right-width:"+e.borderRightWidth+";"+"border-top-width:"+e.borderTopWidth+";"+"border-bottom-width:"+e.borderBottomWidth+";"+"border-left-color:"+e.borderLeftColor+";"+"border-right-color:"+e.borderRightColor+";"+"border-top-color:"+e.borderTopColor+";"+"border-bottom-color:"+e.borderBottomColor+";"+"overflow-y:hidden;"+"overflow-x:hidden;"+"font-size:"+e.fontSize+";"+"font-weight:"+e.fontWeight+";"+"font-family:"+e.fontFamily+";"+"font-style:"+e.fontStyle+";"+"word-wrap:"+(t?"normal":"break-word")+";"+"z-index:-1000;position:absolute;visibility:hidden",t&&(this.masker.style.whiteSpace="nowrap"),document.body.appendChild(this.masker)},locateMasker:function(){this.masker.style.left=$(this.input).realLeft()+"px",this.masker.style.top=$(this.input).realTop()+4+"px"},setContent:function(){this.mask();var e=$element("span"),t=$element("span"),n=$element("span");this.flag=t,e.innerHTML=this.parse(this.front),t.innerHTML="@",n.innerHTML=this.key,this.masker.innerHTML="",this.input.tagName.toLowerCase()=="input"&&(e.style.cssText="white-space:nowrap;",t.style.cssText="white-space:nowrap;",n.style.cssText="white-space:nowrap;"),this.masker.appendChild(e),this.masker.appendChild(t),this.masker.appendChild(n),this.input.scrollHeight>this.input.clientHeight&&(this.masker.style.overflowY="scroll"),this.input.scrollHeight<=this.input.clientHeight&&(this.masker.style.overflowY="hidden"),this.masker.scrollLeft=this.masker.scrollWidth,this.masker.scrollTop=this.masker.scrollHeight},parse:function(e){var t=XN.browser.IE?'<pre style="font-family:'+this.getCss().fontFamily+";font-size:"+this.getCss().fontSize+';display: inline; word-wrap: break-word; overflow: hidden"> </pre>':'<span style="white-space: pre-wrap;font-family:'+this.getCss().fontFamily+";font-size:"+this.getCss().fontSize+';"> </span>',n={" ":this.input.tagName.toLowerCase()=="input"?"&nbsp;":t,"\r":"","\n":"<br />"},r=/\r|\n| /gi;return e.replace(r,function(e){return n[e]})},getRecent:function(){var e=this,t=this.input.privacyJson&&this.input.privacyJson!="undefined"?"&privacy="+this.input.privacyJson:"",n=t?XN.JSON.parse(this.input.privacyJson)["public"]:!0;if(this.input.checkingRecent)return;if(n&&XN.user.globalRecentAt){XN.user.recentAt=XN.user.globalRecentAt;return}if(!n&&this.input.recentAt){XN.user.recentAt=this.input.recentAt;return}this.input.checkingRecent=!0,new XN.net.xmlhttp({url:"http://status.renren.com/GetMetion.do?userId="+XN.user.id+"&limit="+this.recentLimit+"&flag=1&offset=0"+t,method:"get",onSuccess:function(t){e.input.checkingRecent=!1;if(t.responseText=="{}")return;var t=XN.json.parse(t.responseText);if(t.code!=0||t.result.length<1)t.result=[];n?XN.user.globalRecentAt=t.result:e.input.recentAt=t.result,XN.user.recentAt=t.result,e.check()}}),this.input.clearPrivacyCache=function(){e.privacy="haveNotCheck",e.selector=null,this.privacyJson=this.getAttribute("data-privacy"),this.recentAt=null}},newSelector:function(e){var t=this,n=['<div class="mentionFrdList">','<div class="m-autosug-minwidth">','<div class="m-autosug-content">','<div class="mention-tip"><span>',t.titles[t.privacy],"</span></div>",'<ul class="search-Result" style="overflow:hidden;"></ul>',"</div>","</div>","</div>"].join("");this.selector=new XN.ui.friendSelector({url:e.url,id:e.id,autoSelectFirst:!0,limit:e.limit,param:e.param,noResult:function(){return t.noMatch=!0,"没有匹配结果"},noInput:null,wrapper:n});var r=this.selector;this.popTop&&(r.menu=new XN.ui.menu({button:t.selector.input,menu:t.selector._menuList,fireOn:"manual",alignType:"1-4",offsetY:-17})),r.buildMenu=function(e){var t="",n="";e.iconUrl&&XN.string.trim(e.iconUrl)!=""&&(t='<img style="position:static;margin-left:2px;" src="'+e.iconUrl+'" />'),e.iconUrl!=undefined&&(n='<p class="desc" style="font-size:11px;line-height:1;">公共主页</p>');var r=7,i=e.head||e.headUrl,s=e.name,o=s.length>r?s.slice(0,r)+"...":s;return'<img src="'+i+'" width="30" height="30" alt="'+s+'"/>'+'<strong title="'+s+'" style="white-space:nowrap;line-height:normal;">'+o+t+"</strong>"+n},r._buildMenu=function(e){var t=r;t.result=e,e.length>0&&t.fireEvent("hasResult");if(e.length==0){t.fireEvent("noResult");var n=t.getConfig("noResult");isFunction(n)&&(n=n.call(t)),t._ul.innerHTML="<li>"+n+"</li>",t.menu.show(),t.fireEvent("menuBuilt"),t._currentLi=null;return}var i=[];i.push(t.firstMenuItem());var s=e.length-1;XN.array.each(e,function(e,n){i.push('<li onmouseover="getCompleteMenu('+t._MID+')._highlightMenuItem(this);" aid="'+e+'">'+t.buildMenu(n)+"</li>")}),i.push(t.lastMenuItem()),t._ul.innerHTML=i.join(""),t.getConfig("autoSelectFirst")&&t._highlightMenuItem(t._ul.firstChild),t.menu.show(),t.fireEvent("menuBuilt")},r._startCheck=function(){var e=r;if(e._userInput){e._userInput=!1;return}e._checkInput()},r._endCheck=function(){r._lastInput="",r._ul.innerHTML="";return},r.loadFriends=function(e){if(r.isLoading())return;r._isLoading=!0,r._onload()},r._onload=function(){r.isLoading=!1,r._ready=!0,r.DS=new XN.util.DS_friends({url:r.getConfig("url"),qkey:r.getConfig("qkey"),limit:r.getConfig("limit"),page:r.getConfig("page"),param:r.getConfig("param")}),r.DS.query=function(e,n){function s(e){e=e.responseText;var t;try{var i=XN.JSON.parse(e);r.rootKey&&i[r.rootKey]?t=i[r.rootKey]:t=i}catch(s){t=[]}n(t)}var r=this;try{this._request.abort()}catch(i){}var o=XN.json.parse(this.param),u,a,f="";try{a=XN.JSON.parse(t.input.privacyJson),typeof a.control!="undefined"&&(f="&control="+a.control,a.control==0&&(this.url="http://sg.renren.com/s/c",o.friendId=a.owner)),u="&privacyGroupId="+(a.privacyGroupId||a.ugcGID)+"&ownerId="+a.owner+f}catch(i){u=""}this._request=new XN.net.xmlhttp({url:this.url,data:"q="+encodeURIComponent(e)+"&l="+this.limit+(o.friendId?"&friend="+o.friendId:"")+u,method:this.method,onSuccess:s})}},this.bindEvent(),this.getRecent()},buildValue:function(e){this.last=this.input.value.substring(this.curPos),this.input.value=this.front+"@"+e.name+"("+(e.id||e.userId)+")"+" "+this.last,this.refocus(e)},refocus:function(e){var t=this,n=e.name,r=e.id||e.userId,i=this.front.length+1+n.length+r.toString().length+3,s=this.input.scrollTop;this.fsInput.value="",setTimeout(function(){XN.form.help(t.input).focus(i),t.input.scrollTop=s,t.selector._endCheck(),t.selector.menu.hide(),t.selectorShow=!1,t.input.focus(),t.fireEvent("refocus")},0)},bindEvent:function(){var e=this;this.selector.addEvent("select",function(t){e.buildValue(t),e.doNotCheck=!1}),this.selector.addEvent("hasResult",function(){e.noMatch=!1}),this.selector.addEvent("noinput",function(){e.noMatch=!0,e.selector._ul.innerHTML="",e.selector.menu.show()}),$(this.input).addEvent("blur",function(){e.selector&&(e.selector._endCheck(),e.selector.menu.hide())}),this.popTop&&this.selector.addEvent("menuBuilt",function(){e.locateMenu()}),$("whisper")&&this.whisper&&(this.oldPrivacy=this.privacy,$("whisper").addEvent("click",function(){$("whisper").checked?e.privacy=2:e.privacy=e.oldPrivacy,e.renewTip()})),$("whisperForTheatre")&&this.whisper&&(this.oldPrivacy||(this.oldPrivacy=this.privacy),$("whisperForTheatre").addEvent("click",function(){$("whisperForTheatre").checked?e.privacy=2:e.privacy=e.oldPrivacy,e.renewTip()}))},renewTip:function(e){var t=Sizzle(".mention-tip span",this.selector._ul.parentNode)[0];t.innerHTML=this.titles[e]||this.titles[this.privacy]},crFsInput:function(){this.fsInput||(this.fsInput=$element("input"),this.fsInput.type="text",this.fsInput.style.cssText="position:"+(this.scrollable&&!XN.browser.IE6?"fixed":"absolute")+";z-index:-1000;border:0 none;padding:0;height:0;overflow:hidden;",document.body.appendChild(this.fsInput))},locateMenu:function(){this.moveTo()},moveTo:function(e,t){this.fsInput.style.left=(e||this.atPos.X)+"px",this.fsInput.style.top=(t||this.atPos.Y)+"px",this.selector.menu.refresh();if(this.scrollable){var n=this.selector._menuList,r=XN.browser.IE6?0:$("dropmenuHolder").realLeft();XN.browser.IE6||(n.style.position="fixed"),n.style.left=parseInt(n.style.left)+r+"px";if(XN.browser.IE6&&!n.scEvent4At){var i=this;XN.event.addEvent(window,"scroll",function(){if(i.scrollDelay)return;var e=i.selector.menu.menu.frame;e.style.visibility="hidden",i.scrollDelay=setTimeout(function(){i.check(),clearTimeout(i.scrollDelay),i.scrollDelay=null,e.style.visibility="visible"},500)}),n.scEvent4At=!0}}},initSelector:function(){this.crFsInput();if(this.selector){this.getRecent();return}var e=this,t=function(){var t=e.getFinalId(),n="http://sg.renren.com/s/c",r={friendId:t};t==""&&(e.privacy==0&&XN.mentionGroup?n="http://sg.renren.com/s/at":n="http://sg.renren.com/s/at",r={}),e.newSelector({url:n,id:e.fsInput,limit:e.limit,friendId:t,param:r}),e.selector.loadFriends()};this.getPrivacy(t)},getFinalId:function(){return this.privacy==0||this.privacy==5?"":this.privacy==1?this.ownerId:-1},getPrivacy:function(e){if(this.privacy!="haveNotCheck")return;if(this.ugcType=="blog"||this.ugcType=="photo"||this.ugcType=="album"||this.ugcType=="status"||this.ugcType=="gossip"){this.doNotCheck=!0;var t=this,n={blog:"http://blog.renren.com/blog/"+this.ownerId+"/"+this.ugcId+"/privacy",photo:"http://photo.renren.com/photo/"+this.ownerId+"/photo-"+this.ugcId+"/privacy",album:"http://photo.renren.com/photo/"+this.ownerId+"/album-"+this.ugcId+"/privacy",gossip:"http://www.renren.com/getPrivacy/update?uid="+this.ownerId,status:""};if(this.ugcType=="gossip")new XN.net.xmlhttp({url:n[this.ugcType],onSuccess:function(n){var r=n.responseText;r==0||r==3?t.privacy=1:r==-1?t.privacy=2:t.privacy=0,t.privacy==1&&XN.user.id==t.ownerId&&(t.privacy=0),e(),t.doNotCheck=!1,t.check()},onError:function(){t.privacy=3,e(),t.doNotCheck=!1,t.check()}});else if(this.input.privacyJson&&this.input.privacyJson!="undefined"){var r=XN.JSON.parse(this.input.privacyJson);r.control==99?this.privacy=0:r.control==-1||r.control==4?this.privacy=2:this.privacy=5,e(),this.doNotCheck=!1,this.check()}else n[this.ugcType]||(t.privacy=0,e(),t.doNotCheck=!1,t.check()),new XN.net.xmlhttp({url:n[this.ugcType],method:"get",onSuccess:function(n){var r=XN.json.parse(n.responseText);t.privacy=r.privacyLevel,t.privacy==1&&XN.user.id==t.ownerId&&(t.privacy=0),e(),t.doNotCheck=!1,t.check()},onError:function(){t.privacy=3,e(),t.doNotCheck=!1,t.check()}})}else this.ugcType=="unknown_privacy"?(this.privacy=2,e()):window.asyncHTMLManager&&window.asyncHTMLManager.location.href.indexOf("http://share.renren.com/share/collection")!=-1&&this.ugcType=="share"?(this.privacy=2,e()):(this.privacy=0,e())},showTip:function(){return;var e,n},hideTip:function(){this.tip&&(XN.cookie.set("at",1,9999,"/","renren.com"),this.tip.hide(),this.tip=null)},getParentFromClass:function(e,t){var n=null;while(e.parentNode){e=e.parentNode;if(XN.element.hasClassName(e,t)){n=e;break}}return n}}});