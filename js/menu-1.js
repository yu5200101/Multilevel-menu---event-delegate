//原生JS方法
let menu = document.getElementById('menu');
let ems = menu.getElementsByTagName('em');
//给所有的em和em后面的span加上小手效果
for (let i = 0; i < ems.length; i++) {
    ems[i].className = 'cursor';
    $.next(ems[i]).className = "cursor";
}
menu.onclick = function (e) {
    if(e.target.tagName == 'EM'){
        //为了统一 我都传span进去
        menuPlay($.next(e.target));
    }else if(e.target.tagName == 'SPAN'){
        menuPlay(e.target);
    }
};

function menuPlay(ele) {
    //ele就是当前这个span
    //获取span后面的弟弟ul
    let oUl = $.next(ele);
    //只有oUl存在的时候我们才进行下面的操作
    if(oUl){
        //记录当前oUl的display状态
        let flag = $.css(oUl,'display');
        if(flag == 'none'){
            //之前是none现在变成block,不要忘记将这个diaplay状态值flag变成'block'
            $.css(oUl,'display','block');
            flag = 'block';
            //将em的className变成open
            $.prev(ele).className = 'open';
        }else if(flag == 'block'){
            $.css(oUl,'display','none');
            flag = 'none';
            $.prev(ele).className  = '';
            //不仅让当前这个oUl收起来还需要将这个oUl下面的所有的ul全部收起来
            //获取当前oUl下面所有的ul
            let oUls = oUl.getElementsByTagName('ul');
            //循环所有的ul将其display变成none
            for (let i = 0; i < oUls.length; i++) {
                oUls[i].style.display = 'none';
                //oUl对应的em的clasnName变为空
                $.prev($.prev(oUls[i])).className = '';
            }
        }
    }
}