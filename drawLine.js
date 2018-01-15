/**
 * drawLine画线功能，drawLine函数封装了取得元素基本位置信息的方法和渲染div的方法，在页面加载和页面大小变化时计算新的位置信息
 * 
 * @returns 
 */
drawLine = (function(){
        return{
            //得到元素长度
            getWidth:function(objA){
                return document.getElementsByClassName(objA)[0].offsetWidth;
            },
            //得到元素高度
            getHeight:function(objA){
                return document.getElementsByClassName(objA)[0].offsetHeight;
            },
            //得到元素左位置
            getLeft:function(objA){
                return document.getElementsByClassName(objA)[0].offsetLeft;
            },
            //得到元素顶部位置 
            getTop:function(objA){
                return document.getElementsByClassName(objA)[0].offsetTop + document.body.scrollTop;
            },
            //建立div
            buildDiv:function(long,left,top,num){
                var dd = document.createElement("div");
                dd.className = "lineS";
                if(num == 0){
                    dd.style = "position:absolute;width:"+long+"px;height:0;border-top:solid 1px #333;left:"+left+"px;top:"+top+"px;";
                }else if(num == 1){
                    dd.style = "position:absolute;width:0;height:"+long+"px;border-left:solid 1px #333;left:"+left+"px;top:"+top+"px;";
                }
                document.getElementsByClassName("v-middle")[0].appendChild(dd);
            }
        }
    })();

    //页面加载时执行画线操作
    $(document).ready(function(){
        //获取v-box1  v-box2  v-box3  v-box4  v-img的基本属性
        var oneTop,
            oneHeight,
            twoLeft,
            twoWidth,
            threeLeft,
            fourTop,
            imgLeft,
            imgWidth,
            imgTop,
            imgHeight;
        oneTop = drawLine.getTop("v-box1");
        oneHeight = drawLine.getHeight("v-box1");
        twoLeft = drawLine.getLeft("v-box2");
        twoWidth = drawLine.getWidth("v-box2");
        threeLeft = drawLine.getLeft("v-box3");
        fourTop = drawLine.getTop("v-box4");
        imgLeft = drawLine.getLeft("v-img");
        imgWidth = drawLine.getWidth("v-img");
        imgTop = drawLine.getTop("v-img") + 150;
        imgHeight = drawLine.getHeight("v-img");
        //得到长度
        var oneLong,twoLong,threeLong,fourLong;
        oneLong = imgTop - (oneTop + oneHeight);
        twoLong = imgLeft - (twoLeft + twoWidth);
        threeLong = threeLeft - (imgLeft + imgWidth);
        fourLong = fourTop - (imgTop + imgHeight);
        //得到位置信息
        var oneLoc,
            twoLoc,
            threeLoc,
            fourLoc,
            LocT,
            LocL;
        oneLoc = oneTop + oneHeight;
        twoLoc = twoLeft + twoWidth;
        threeLoc = imgLeft + imgWidth;
        fourLoc = imgTop + imgHeight;
        LocT = imgTop + imgHeight/2;
        LocL = imgLeft + imgWidth/2;
        //开始按种类执行 
        drawLine.buildDiv(oneLong,LocL,oneLoc,"1");
        drawLine.buildDiv(twoLong,twoLoc,LocT,"0");
        drawLine.buildDiv(threeLong,threeLoc,LocT,"0");
        drawLine.buildDiv(fourLong,LocL,fourLoc,"1");
    });
    $(window).resize(function(){
        $(".lineS").remove();
        //获取v-box1  v-box2  v-box3  v-box4  v-img的基本属性
        var oneTop,
            oneHeight,
            twoLeft,
            twoWidth,
            threeLeft,
            fourTop,
            imgLeft,
            imgWidth,
            imgTop,
            imgHeight;
        oneTop = drawLine.getTop("v-box1");
        oneHeight = drawLine.getHeight("v-box1");
        twoLeft = drawLine.getLeft("v-box2");
        twoWidth = drawLine.getWidth("v-box2");
        threeLeft = drawLine.getLeft("v-box3");
        fourTop = drawLine.getTop("v-box4");
        imgLeft = drawLine.getLeft("v-img");
        imgWidth = drawLine.getWidth("v-img");
        imgTop = drawLine.getTop("v-img") + 150;
        imgHeight = drawLine.getHeight("v-img");
        //得到长度
        var oneLong,twoLong,threeLong,fourLong;
        oneLong = imgTop - (oneTop + oneHeight);
        twoLong = imgLeft - (twoLeft + twoWidth);
        threeLong = threeLeft - (imgLeft + imgWidth);
        fourLong = fourTop - (imgTop + imgHeight);
        //得到位置信息
        var oneLoc,
            twoLoc,
            threeLoc,
            fourLoc,
            LocT,
            LocL;
        oneLoc = oneTop + oneHeight;
        twoLoc = twoLeft + twoWidth;
        threeLoc = imgLeft + imgWidth;
        fourLoc = imgTop + imgHeight;
        LocT = imgTop + imgHeight/2;
        LocL = imgLeft + imgWidth/2;
        //开始按种类执行 
        drawLine.buildDiv(oneLong,LocL,oneLoc,"1");
        drawLine.buildDiv(twoLong,twoLoc,LocT,"0");
        drawLine.buildDiv(threeLong,threeLoc,LocT,"0");
        drawLine.buildDiv(fourLong,LocL,fourLoc,"1");
    });
