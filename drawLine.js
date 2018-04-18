/*
 * 一个绘制两个div的连线的小工具
 * 传递四个参数：one：基准点的class，two：辅助点的class，parent：父级的class，code：0/1 分别是横向/纵向
*/
drawLine = (function (){
    return { 
        contact:function(one , two , parent , code) {
            var objone = document.getElementsByClassName(one)[0].getBoundingClientRect();
            var objtwo = document.getElementsByClassName(two)[0].getBoundingClientRect();
            var parentNode = document.getElementsByClassName(parent)[0];
            //横向连线
            if(code == 0){
                var pt = objone.top + objone.height/2;
                var h = 0;
                //基准点objone在右边
                if(objone.left > objtwo.left){
                    var pl = objtwo.right;
                    var l = objone.left - objtwo.right;
                    buildLine(l,h,pt,pl,parentNode);
                }//基准点objone在左边
                else if(objone.left < objtwo.left){
                    var pl = objone.right;
                    var l = objtwo.left - objone.right;
                    buildLine(l,h,pt,pl,parentNode);
                }
            }//纵向连线
            else if(code == 1){
                var pl = objone.left + objone.width/2;
                var l = 0;
                //基准点objone在下
                if(objone.top > objtwo.top){
                    var pt = objtwo.bottom;
                    var h = objone.top - objtwo.bottom;
                    buildLine(l,h,pt,pl,parentNode);
                }//基准点objone在上
                else if(objone.top < objtwo.top){
                    var pt = objone.bottom;
                    var h = objtwo.top - objone.bottom;
                    buildLine(l,h,pt,pl,parentNode);
                }
            }
        }
    }
})()
//绘线
function buildLine(l,h,pt,pl,parentNode){
    var div = document.createElement("div");
    div.className = "lineS";
    var style = "position:absolute;width:"+l+"px;height:"+h+"px;left:"+pl+"px;top:"+pt+"px;border:solid 1px #333";
    div.style.cssText = style;
    parentNode.appendChild(div);
}