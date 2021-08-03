$(function () {
    //客服
    if ($('#kefuGajian').length > 0) {
        var fk = [];
        fk.push('<div class="main-im">');
        fk.push('   <div id="open_im" class="open-im" style="display: none;">&nbsp;</div>');
        fk.push('   <div class="im_main" id="im_main" style="display: block;">');
        fk.push('       <div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>');
        fk.push('       <a href="http://wpa.qq.com/msgrd?v=3&uin=978478090&site=qq&menu=yes" target="_blank" rel="nofollow" class="im-qq qq-a" title="在线QQ客服">');
        fk.push('           <div class="qq-container"></div>');
        fk.push('           <div class="qq-hover-c"><img class="img-qq" src="/static/image/qq.png"></div>');
        fk.push('           <span>QQ微信咨询</span>');
        fk.push('       </a>');
        fk.push('       <div class="im-tel">');
        fk.push('           <ul class="bor-ul">');
        fk.push('               <li class="ico-bg"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=978478090&site=qq&menu=yes" rel="nofollow"> bug反馈</a></li>');
        fk.push('               <li class="ico-bg"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=978478090&site=qq&menu=yes" rel="nofollow"> 定制软件</a></li>');
        fk.push('           </ul>');
        fk.push('       </div>');
        fk.push('       <div class="im-footer" style="position:relative">');
        //fk.push('         <div class="weixing-container">');
        //fk.push('             <div class="weixing-show">');
        //fk.push('                 <div class="weixing-txt">');
        //fk.push('                     微信客服<br>');
        //fk.push('                 </div>');
        //fk.push('                 <img class="weixing-ma" src="/static/image/wechatdc.png">');
        //fk.push('                 <div class="weixing-sanjiao"></div>');
        //fk.push('                 <div class="weixing-sanjiao-big"></div>');
        //fk.push('             </div>');
        //fk.push('         </div>');
        fk.push('           <div class="go-top">');
        fk.push('               <a href="javascript:;" title="返回顶部"></a>');
        fk.push('           </div>');
        fk.push('           <div style="clear:both"></div>');
        fk.push('       </div>');
        fk.push('   </div>');
        fk.push('</div>');
        $("#kefuGajian").html(fk.join(''));

        $('#close_im').on('click', function () {
            $('#im_main').hide();
            $('#open_im').show();
        });
        $('#open_im').on('click', function (e) {
            $('#im_main').show();
            $(this).hide();
        });
        $('.go-top').on('click', function () {
            $(window).scrollTop(0);
        });
        $(".weixing-container").hover(function () {
            $('.weixing-show').show();
        }, function () {
            $('.weixing-show').hide();
        });

        if ($(window).width() < 768) {
            $('#close_im').click();
        }

        var c = $(window).height() - $('.main-im').height();
        if (c < 250) {
            $('.main-im').css({ top: c });
        }
    }
});
