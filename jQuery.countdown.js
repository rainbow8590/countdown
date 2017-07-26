;(function($){
        $.fn.extend({
            countdown:function(options){
                var defaults = {
                    container: this
                }
                var str = '';
                var option = $.extend({},defaults,options);
                
                run();
                setInterval(run,1000)
                function run(){
                  
                    //设置未来时间
                    var Ftime = new Date(option.time);
                    var FtimeMs = Ftime.getTime();
                    //获取本地时间
                    var Ltime = new Date();
                    var LtimeMs = Ltime.getTime();

                    if(FtimeMs < LtimeMs ){
                        return;
                    }

                    //获取时间差的秒数
                    var diff = (FtimeMs - LtimeMs)/1000;
                    if(diff < 0){
                        return;
                    }
                    //获取时间差的天
                    var day = Math.floor(diff / (24*60*60))
                    //获取时间差的时
                    var hour = parseInt(diff /(60*60) %24)
                    //获取时间差的分
                    var min = parseInt(diff/60%60);
                    //获取时间差的秒
                    var sec = parseInt(diff % 60);

                    //处理个位数
                    function getTwo(num){
                        return num < 10? '0' + num : num
                    }
                    str = '剩余：'+getTwo(day)+'天'+getTwo(hour)+'时'+getTwo(min)+'分'+getTwo(sec)+'秒';
                    $(option.container).html(str)
                }
            }
        })

    })(jQuery)
