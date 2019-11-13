//值得买，关注京东店铺领京豆
//无论是否是“关注有礼”四个字都会返回true，并且如果是浮窗点击领取京豆，处理不好
var links = textContains("点此领取").find();//返回UiCollection对象，可使用forEach来遍历
if(links.nonEmpty()){
    toast("已找到链接");
    // log(links)
}else{
    toast("未找到链接");
}
log(links.length)
for(var i=1;i<links.length;i=i+2){
    sleep(3000)
    toast("点击连接",(i+1)/2)
    link = links[i];
    log(link)
    // condition = click(link.bounds().centerX(),link.bounds().centerY())
    condition = links[i].click()
    // log(links[i])
    log(condition)
    // var link = links[i]
    
    // link.click()
    sleep(4000)
    if(condition){

        // toast('点击链接成功')
        sleep(1000)
        
        // var guanzhuchenggong = id("u0").findOne(1500).click()
        // var guanzhuchenggong = textContains("关注有礼").findOne(1500).click()
        
        var guanzhuchenggong = click(830,283,1053,371) //点击关注，
        log('guanzhuchenggong=',guanzhuchenggong)
        if(guanzhuchenggong == true){
            sleep(1000)
            var queren = textContains("确认").findOne(1500)
            if(queren){
                queren.click()
                toast('领取京豆成功')
                sleep(1000)
                back()
            }
            else{
                back()
            }
        }else{
            back();
            log('返回值得买')
        }
    }

   
}


