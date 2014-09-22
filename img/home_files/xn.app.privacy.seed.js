/* import from D:\server\wwwroot\static\hg\renren\core\src\modules\privacy\seed.js *//**
 * @fileoverview 隐私设置 seed 部分代码
 * @author chao.gao
 *//** 
 * @module privacy/seed
 * @description 隐私设置控件通过 html 模板初始化，所有的参数均写在结构中，调用者可以自己生成 html 模板，
 * 也可通过 privacy 模块下的 generateFrame 函数生成模板。
 * 调用者可以自己生成 html 模板，也可通过 privacy 模块下的 generateFrame 函数生成模板
 * @example
 * <code>
 * &lt;a href="#nogo" data-toggle="privacy" class="privacy-trigger privacy-trigger-small " id="privacy_3602879702800810061" 
 *      data-toggle="privacy" data-option="{&quot;ugcGlobalIds&quot;: [3602879702800810061], &quot;ugcType&quot;: &quot;blog&quot;, &quot;sourceControl&quot;: 99, &quot;password&quot;: &quot;&quot;, &quot;extend&quot;: &quot;PASSWORD&quot;}"&gt;
 *      &lt;i class="privacy-icon picon-public"&gt;&lt;/i&gt;
 *      &lt;span&gt;公开&lt;/span&gt;
 *      &lt;i class="privacy-icon picon-arrow-down"&gt;&lt;/i&gt;
 *      &lt;input type="hidden" value="{&quot;sourceControl&quot;: 99, &quot;privacyGroupId&quot;: 0, &quot;privacyGroupName&quot;: &quot;高高&quot;, &quot;privacyGroupType&quot;: &quot;white&quot;}" name="privacyParams"&gt;
 * &lt;/a&gt;
 * </code>
 * <@class> 参数 privacy-trigger privacy-trigger-small privacy-trigger-feed privacy-trigger-input 第一项为必选项，其余的根据喜好可以随意设置
 * <@data-toggle> 可选项 参数 privacy 没有此项时不会展开下拉
 * <@data-option> 参数 隐私设置的必要参数，详细列表参加隐私模块的注释
 * <@data-disabled> 可选项 参数 {msg: 'xxx'} 设置此项隐私空间不可用，并用msg文字替换
 * input 标签可以不传，在内部会自动生成
 */object.define("privacy/seed","dom",function(require,e){var t=require("dom"),n;if(!!object.privacySeedLoaded)return;object.privacySeedLoaded=!0,n=function(e){try{var t=e.id.split("_"),n=JSON.parse(e.getData("option")),r=JSON.parse(e.getData("disabled")),i={};return object.extend(i,n),r&&object.extend(i,{disabled:!0,disabledMsg:r.msg}),i}catch(s){return console.log(s),!1}},t.wrap(document).delegate("a[data-toggle=privacy]","click",function(e){if(!this.hasClass("active")&&!this.locked){this.locked=!0;var t=n(this),r=this;t&&require.async("privacy",function(e){setTimeout(function(){new e.Privacy(r,t),r.locked=!1},100)})}else this.privacy&&this.privacy.destroy()})}),XN.dom.ready(function(){object.execute("privacy/seed")});