$(function () {
    if ($('.drawer').length > 0) {
        $('.drawer').drawer();
    }

    //移动端
    if ($(window).width() < 768) {
        $("a").attr("target", "_self");
    }
    //PC端首页
    else if ($("#indexBanner").length > 0) {
        if (!$("#step1").hasClass('animate__backInDown')) {
            $("#step1").addClass('animate__backInDown');
        }

        $(window).scroll(function () {
            var height = $(window).height();
            var top = $(window).scrollTop();
            var sc = top + height;
            if (sc > 1120) {
                if (!$("#step21").hasClass('animate__backInLeft')) {
                    $("#step21").addClass('animate__backInLeft');
                }
                if (!$("#step22").hasClass('animate__backInRight')) {
                    $("#step22").addClass('animate__backInRight');
                }
            }
            if (sc > 1600) {
                if (!$("#step3").hasClass('animate__backInUp')) {
                    $("#step3").addClass('animate__backInUp');
                }
            }
            if (sc > 2100) {
                if (!$(".animate4").hasClass('animate__zoomIn')) {
                    $(".animate4").addClass('animate__zoomIn');
                }
            }
        });
    }

    //
    if ($("#tipMsg").length > 0) {
        $.post('/api/order/check',
            function (res) {
                var flag = res && res.code === 0 && res.data && res.data.IsSuccess;
                if (flag) {
                    //$("body").css({ "padding-top": "38px" });
                    $("#tipMsg").html(res.data.Msg).css({ "display": "block" }).on("click", function () {
                        window.location.href = res.data.Url;
                    });
                }
            });
    }

    //
    var topArr = [];
    $('.menuTop').each(function (i, item) {
        topArr.push(parseInt($(item).data('top')) - 20);
        $(item).on('click',
            function () {
                var to = parseInt($(item).data('top'));
                window.scrollTo({ top: to, behavior: 'smooth' });
                $('.menuList').removeClass('actived');
                $(item).addClass('actived');
            });
    });
    var index = 0;
    var scrollFn = function () {
        if (window.scrollY > topArr[2]) {
            if (index !== 2) {
                $('.menuTop').removeClass('actived');
                $('.menuTop').eq(2).addClass('actived');
                index = 2;
            }
            return;
        }
        if (window.scrollY > topArr[1]) {
            if (index !== 1) {
                $('.menuTop').removeClass('actived');
                $('.menuTop').eq(1).addClass('actived');
                index = 1;
            }
            return;
        }
        if (window.scrollY > topArr[0]) {
            if (index !== 0) {
                $('.menuTop').removeClass('actived');
                $('.menuTop').eq(0).addClass('actived');
                index = 0;
            }
            return;
        }
    }
    $(window).on('scroll', function (a, b, c) {
        scrollFn();
    });
    scrollFn();

    //客服
    if ($('#kefuGajian').length > 0) {
        var fk = [];
        fk.push('<div class="main-im">');
        fk.push('   <div id="open_im" class="open-im" style="display: none;">&nbsp;</div>');
        fk.push('   <div class="im_main" id="im_main" style="display: block;">');
        fk.push('       <div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>');
        fk.push('       <a href="/page/contact.html#售前咨询" target="_blank" rel="nofollow" class="im-qq qq-a" title="在线QQ客服">');
        fk.push('           <div class="qq-container"></div>');
        fk.push('           <div class="qq-hover-c"><img class="img-qq" src="/static/image/qq.png"></div>');
        fk.push('           <span>QQ微信联系</span>');
        fk.push('       </a>');
        fk.push('       <div class="im-tel">');
        fk.push('           <ul class="bor-ul">');
        fk.push('               <li class="ico-bg"><a target="_blank" href="/page/contact.html#售前咨询" rel="nofollow"> 客户(售前)</a></li>');
        fk.push('               <li class="ico-bg"><a target="_blank" href="/page/contact.html#售后支持" rel="nofollow"> 技术(售后)</a></li>');
        fk.push('               <li class="ico-bg"><a target="_blank" href="/page/customedition.html"> 定制软件</a></li>');
        fk.push('           </ul>');
        fk.push('       </div>');
        fk.push('       <div class="im-footer" style="position:relative">');
        //fk.push('           <div class="weixing-container">');
        //fk.push('               <div class="weixing-show">');
        //fk.push('                   <div class="weixing-txt">');
        //fk.push('                       微信客服<br>');
        //fk.push('                   </div>');
        //fk.push('                   <img class="weixing-ma" src="/static/image/wechat.png">');
        //fk.push('                   <div class="weixing-sanjiao"></div>');
        //fk.push('                   <div class="weixing-sanjiao-big"></div>');
        //fk.push('               </div>');
        //fk.push('           </div>');
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
