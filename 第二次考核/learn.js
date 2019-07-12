//下边一大块是middle3 ，window选项卡切换的js

var tabs = document.getElementById('tabs').getElementsByTagName("li");
var lists = document.getElementById('lists').getElementsByTagName("div");

console.log(tabs);
console.log(lists);

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onmouseenter = hover1;
    tabs[i].onmouseleave = hover2;
    tabs[i].onclick = hover3;

}

function hover1() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this && tabs[i].className !== "hover3") {
            tabs[i].className = "hover";
        };
    }

}

function hover2() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this && tabs[i].className !== "hover3") {
            tabs[i].className = " ";
        };

    }

}

function hover3() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this) {
            tabs[i].className = "hover3";
        } else {
            tabs[i].className = " ";
        };
        if (tabs[i] === this) {
            lists[i].className = "display-list";
        } else {
            lists[i].className = " ";
        };
    }

}







//下边一大块是middle3 ，mac选项卡切换的js

var tabs1 = document.getElementById('tabs1').getElementsByTagName("li");
var lists1 = document.getElementById('lists1').getElementsByTagName("div");



for (var i = 0; i < tabs1.length; i++) {
    tabs1[i].onmouseenter = hover5;
    tabs1[i].onmouseleave = hover6;
    tabs1[i].onclick = hover7;

}

function hover5() {
    for (var i = 0; i < tabs1.length; i++) {
        if (tabs1[i] === this && tabs1[i].className !== "hover3") {
            tabs1[i].className = "hover";
        };
    }

}

function hover6() {
    for (var i = 0; i < tabs1.length; i++) {
        if (tabs1[i] === this && tabs1[i].className !== "hover3") {
            tabs1[i].className = " ";
        };

    }

}

function hover7() {
    for (var i = 0; i < tabs1.length; i++) {
        if (tabs1[i] === this) {
            tabs1[i].className = "hover3";
        } else {
            tabs1[i].className = " ";
        };
        if (tabs1[i] === this) {
            lists1[i].className = "display-list";
        } else {
            lists1[i].className = " ";
        };
    }

}


















//下边一大块是middle1部分的


var changer = document.getElementById('changer').getElementsByTagName("li");
var span = document.getElementById('text').getElementsByTagName("span");
var span1 = span[1];
var span2 = span[2];
var download = document.getElementById("download").getElementsByTagName("div")
var windows1 = download[0];
var mac1 = download[2];
var aimg = document.getElementById("middle-1-i").getElementsByTagName("img");
var img1 = aimg[3]; //大图片1
var img2 = aimg[4]; //大图片2
var hover4 = document.getElementById("changer");
var changerspan = document.getElementById("changer").getElementsByTagName("span")
var img3 = aimg[1]; //下载Windows版
var img4 = aimg[2]; //下载mac版
var a1changer = document.getElementById("div-ul1").getElementsByTagName("a"); //download 鼠标移入变色用
var a2changer = document.getElementById("div-ul2").getElementsByTagName("a"); //download 鼠标移入变色用
var middle2 = document.getElementById("middle2").getElementsByTagName('div'); //middle2的变化
var middle31 = document.getElementById("middle31"); //middle3的切换
var middle32 = document.getElementById("middle32"); //middle3的切换
var middle4 = document.getElementById("middle4").getElementsByClassName("middle-4-mini"); //middle4的切换
var middle51 = document.getElementById("middle51"); //middle5 的切换
var middle52 = document.getElementById("middle52"); //middle5 的切换

//changer处点击事件
changer[0].onclick = changer1;
changer[1].onclick = changer2;

//鼠标移入 download展示
windows1.onmouseenter = display1;
windows1.onmouseleave = display2;

mac1.onmouseenter = display1;
mac1.onmouseleave = display2;
//鼠标移入 donload下拉菜单效果


for (var i = 0; i < a1changer.length; i++) {
    a1changer[i].onmouseenter = a1enter;
    a1changer[i].onmouseleave = a1leave;
    //download 鼠标移入变色用
}
for (var i = 0; i < a2changer.length; i++) {
    a2changer[i].onmouseenter = a2enter;
    a2changer[i].onmouseleave = a2leave;
    //download 鼠标移入变色用
}

function a1enter() {
    for (var i = 0; i < a1changer.length; i++) {
        if (a1changer[i] === this) {
            a1changer[i].className = "a-changer";
        }; //download 鼠标移入变色用
    }
}

function a1leave() {
    for (var i = 0; i < a1changer.length; i++) {
        if (a1changer[i] === this) {
            a1changer[i].className = " ";
        };
    } //download 鼠标移入变色用
}

function a2enter() {
    for (var i = 0; i < a2changer.length; i++) {
        if (a2changer[i] === this) {
            a2changer[i].className = "a-changer";
        }; //download 鼠标移入变色用
    }
}

function a2leave() {
    for (var i = 0; i < a2changer.length; i++) {
        if (a2changer[i] === this) {
            a2changer[i].className = " ";
        };
    } //download 鼠标移入变色用
}


function changer1() {
    //文字切换
    span1.className = "span";
    span2.className = "span none";

    //download切换
    windows1.className = "div1";
    mac1.className = "div2 none";

    //图片切换
    img1.className = "b1";
    img2.className = "b2 no-img";


    hover4.className = "changer hover4";

    //选项卡变色
    changerspan[0].className = "changer-span";
    changer[0].className = "li-windows changer-li";
    changerspan[1].className = " ";
    changer[1].className = "li-mac";

    //middle2的变化
    middle2[4].className = "middle-2-i2i small";
    middle2[9].className = "middle-2-i2i small";
    middle2[14].className = "middle-2-i2i small";
    middle2[12].className = "divimg";

    //middle3的变化
    middle31.className = "middle-3 middle-i";
    middle32.className = "middle-3 middle-i none";

    //middle4的变化
    middle4[2].className = 'middle-4-mini none';
    middle4[5].className = 'middle-4-mini none';
    middle4[10].className = 'middle-4-mini none';
    middle4[11].className = 'middle-4-mini none';

    middle4[0].className = 'middle-4-mini';
    middle4[1].className = 'middle-4-mini';
    middle4[4].className = 'middle-4-mini';
    middle4[6].className = 'middle-4-mini';
    middle4[7].className = 'middle-4-mini';
    middle4[8].className = 'middle-4-mini';
    middle4[9].className = 'middle-4-mini';

    //middle5的切换
    middle51.className = 'middle-5';
    middle52.className = 'middle-5 none'

}



function changer2() {
    //对应changer1
    span1.className = "span none";
    span2.className = "span";
    windows1.className = "div1 none";
    mac1.className = "div2";
    img1.className = "b1 no-img";
    img2.className = "b2";
    changerspan[0].className = " ";
    changer[0].className = "li-windows";
    changerspan[1].className = "changer-span ";
    changer[1].className = "li-mac changer-li"

    //middle2的变化
    middle2[4].className = "middle-2-i2i";
    middle2[9].className = "middle-2-i2i";
    middle2[14].className = "middle-2-i2i";
    middle2[12].className = "divimg none"

    //middle3的变化
    middle31.className = "none middle-3 middle-i";
    middle32.className = "middle-3 middle-i";

    //middle4的变化
    middle4[2].className = 'middle-4-mini';
    middle4[5].className = 'middle-4-mini';
    middle4[10].className = 'middle-4-mini';
    middle4[11].className = 'middle-4-mini';
    middle4[0].className = 'middle-4-mini none';
    middle4[1].className = 'middle-4-mini none';
    middle4[4].className = 'middle-4-mini none';
    middle4[6].className = 'middle-4-mini none';
    middle4[7].className = 'middle-4-mini none';
    middle4[8].className = 'middle-4-mini none';
    middle4[9].className = 'middle-4-mini none';


    //middle5的切换
    middle51.className = 'middle-5 none';
    middle52.className = 'middle-5'
}


function display1() {
    download[1].className = "div-ul1 block" || null;
    download[3].className = "div-ul2 block" || null;
}

function display2() {
    download[1].className = "div-ul1 none" || null;
    download[3].className = "div-ul2 none" || null;


}







//bottom中鼠标移入下划线
var bottom = document.getElementById('bottom').getElementsByTagName("a");
for (var i = 0; i < bottom.length; i++) {
    bottom[i].onmouseenter = hover8;
    bottom[i].onmouseleave = hover9;


}

function hover8() {
    for (var i = 0; i < bottom.length; i++) {
        if (bottom[i] === this) {
            bottom[i].className = "bottom-a-changer";
        };
    }

}

function hover9() {
    for (var i = 0; i < bottom.length; i++) {
        if (bottom[i] === this) {
            bottom[i].className = " ";
        };

    }

}




//导航栏部分鼠标移入，由于遍历报错，所以单独用ID实现。

var free = document.getElementById('free');
var lia1 = document.getElementById('lia1');
var lia2 = document.getElementById('lia2');
var lia3 = document.getElementById('lia3');
var click4 = document.getElementById("click4");
var click1 = document.getElementById("click1");
var click2 = document.getElementById("click2");
var click3 = document.getElementById("click3");
var click5 = document.getElementById("click5");

click4.onmouseenter = changer3;
click4.onmouseleave = changer4;
click5.onmouseenter = changer5;
click5.onmouseleave = changer6;
click6.onmouseenter = changer7;
click6.onmouseleave = changer8;
free.onmouseenter = changer9;
free.onmouseleave = changer10;
lia1.onmouseenter = changer11;
lia1.onmouseleave = changer12;
lia2.onmouseenter = changer13;
lia2.onmouseleave = changer14;
lia3.onmouseenter = changer15;
lia3.onmouseleave = changer16;
click1.onmouseenter = changer17;
click1.onmouseleave = changer18;
click2.onmouseenter = changer19;
click2.onmouseleave = changer20;
click3.onmouseenter = changer21;
click3.onmouseleave = changer22;

function changer3() {
    click4.className = "mouse";
}

function changer4() {
    click4.className = " ";
}

function changer5() {
    click5.className = "mouse";
}

function changer6() {
    click5.className = " ";
}

function changer7() {
    click6.className = "mouse3";
}

function changer8() {
    click6.className = " ";
}

function changer9() {
    free.className = "mouse2";
}

function changer10() {
    free.className = " ";
}

function changer11() {
    lia1.className = "mouse";
}

function changer12() {
    lia1.className = " ";
}

function changer13() {
    lia2.className = "mouse";
}

function changer14() {
    lia2.className = " ";
}

function changer15() {
    lia3.className = "mouse";
}

function changer16() {
    lia3.className = " ";
}

function changer17() {
    click1.className = "mouse";
}

function changer18() {
    click1.className = " ";
}

function changer19() {
    click2.className = "mouse";
}

function changer20() {
    click2.className = " ";
}

function changer21() {
    click3.className = "mouse";
}

function changer22() {
    click3.className = " ";
}





//  报错的导航栏处遍历
// var hover0 = document.getElementById("hover0").getElementsByTagName("a");
// for (var i = 1; i <= hover0.length; i++) {
//     hover0[i].onmouseenter = mouse3;
//     hover0[i].onmouseleave = mouse4;

// }



// function mouse3() {
//     for (var i = 1; i <= hover0.length; i++) {
//         if (hover0[i] === this) {
//             hover0[i].className = "mouse"
//         }
//     }
// }

// function mouse4() {
//     for (var i = 1; i <= hover0.length; i++) {
//         if (hover0[i] === this) {

//             hover0[i].className = " "
//         }
//     }
// }




//导航栏点击部分；
var navdisplay1 = document.getElementById('click-div1');
var navdisplay2 = document.getElementById('click-div2');
var navdisplay3 = document.getElementById('click-div3');
var navdisplay4 = document.getElementById('click-div4');
var navdisplay5 = document.getElementById('click-div5');

var navclick1 = document.getElementById('click-li1');
var navclick2 = document.getElementById('click-li2');
var navclick3 = document.getElementById('click-li3');
var navclick4 = document.getElementById('click-li4');
var navclick5 = document.getElementById('click5');
var middle = document.getElementById('middle');


navclick1.onclick = navchanger1;
navclick2.onclick = navchanger2;
navclick3.onclick = navchanger3;
navclick4.onclick = navchanger4;
navclick5.onclick = navchanger5;

function navchanger1() {

    navclick1.className = "liclick";
    navclick2.className = " ";
    navclick3.className = " ";
    navclick4.className = " ";
    navclick5.className = " ";

    navdisplay1.className = " ";
    navdisplay2.className = "none";
    navdisplay3.className = "none";
    navdisplay4.className = "none";
    navdisplay5.className = "none";
}

function navchanger2() {
    navclick1.className = " ";
    navclick2.className = "liclick";
    navclick3.className = " ";
    navclick4.className = " ";
    navclick5.className = " ";

    navdisplay1.className = "none";
    navdisplay2.className = " ";
    navdisplay3.className = "none";
    navdisplay4.className = "none";
    navdisplay5.className = "none";
}

function navchanger3() {
    navclick1.className = " ";
    navclick2.className = " ";
    navclick3.className = "liclick";
    navclick4.className = " ";
    navclick5.className = " ";

    navdisplay1.className = "none";
    navdisplay2.className = "none";
    navdisplay3.className = " ";
    navdisplay4.className = "none";
    navdisplay5.className = "none";
}

function navchanger4() {
    navclick1.className = " ";
    navclick2.className = " ";
    navclick3.className = " ";


    navclick4.className = "liclick";
    navclick5.className = " ";

    navdisplay1.className = "none";
    navdisplay2.className = "none";
    navdisplay3.className = "none";
    navdisplay4.className = " ";
    navdisplay5.className = "none";
}

function navchanger5() {
    navclick1.className = " ";
    navclick2.className = " ";
    navclick3.className = " ";
    navclick4.className = " ";

    navclick5.className = "liclick";

    navdisplay1.className = "none";
    navdisplay2.className = "none";
    navdisplay3.className = "none";
    navdisplay4.className = "none";
    navdisplay5.className = " ";
}
// // if (onclick != navclick1 &&
// //     onclick != navclick2 &&
// //     onclick != navclick3 &&
// //     onclick != navclick4 &&
// //     onclick != navclick5) {
//     navdisplay1.className = "none";
//     navdisplay2.className = "none";
//     navdisplay3.className = "none";
//     navdisplay4.className = "none";
//     navdisplay5.className = "none";
// }
middle.onclick = navchanger6;

function navchanger6() {
    navdisplay1.className = "none";
    navdisplay2.className = "none";
    navdisplay3.className = "none";
    navdisplay4.className = "none";
    navdisplay5.className = "none";
    navclick1.className = " ";
    navclick2.className = " ";
    navclick3.className = " ";
    navclick4.className = " ";

    navclick5.className = " ";
}






//导航栏下拉菜单里边的鼠标移入变色

var a1 = navdisplay1.getElementsByTagName("a");
var a2 = navdisplay2.getElementsByTagName("a");
var a3 = navdisplay3.getElementsByTagName("a");
var a4 = navdisplay4.getElementsByTagName("a");


// 第一个下拉菜单
for (var i = 0; i < a1.length; i++) {
    a1[i].onmouseenter = hover20;
    a1[i].onmouseleave = hover21;


}

function hover20() {
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] === this) {
            a1[i].className = "textd";
        };
    }

}

function hover21() {
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] === this) {
            a1[i].className = " ";
        };

    }

}
// 第2个下拉菜单
for (var i = 0; i < a2.length; i++) {
    a2[i].onmouseenter = hover22;
    a2[i].onmouseleave = hover23;


}

function hover22() {
    for (var i = 0; i < a2.length; i++) {
        if (a2[i] === this) {
            a2[i].className = "textd";
        };
    }

}

function hover23() {
    for (var i = 0; i < a2.length; i++) {
        if (a2[i] === this) {
            a2[i].className = " ";
        };

    }

}
// 第3个下拉菜单
for (var i = 0; i < a3.length; i++) {
    a3[i].onmouseenter = hover24;
    a3[i].onmouseleave = hover25;


}

function hover24() {
    for (var i = 0; i < a3.length; i++) {
        if (a3[i] === this) {
            a3[i].className = "textd";
        };
    }

}

function hover25() {
    for (var i = 0; i < a3.length; i++) {
        if (a3[i] === this) {
            a3[i].className = " ";
        };

    }

}
// 第4个下拉菜单
for (var i = 0; i < a4.length; i++) {
    a4[i].onmouseenter = hover26;
    a4[i].onmouseleave = hover27;


}

function hover26() {
    for (var i = 0; i < a4.length; i++) {
        if (a4[i] === this) {
            a4[i].className = "textd";
        };
    }

}

function hover27() {
    for (var i = 0; i < a4.length; i++) {
        if (a4[i] === this) {
            a4[i].className = " ";
        };

    }

}

//middlie-5 下载按钮的变色
var divcolor = document.getElementsByClassName("middle-5-12");
for (var i = 0; i < divcolor.length; i++) {
    divcolor[i].onmouseenter = hover28;
    divcolor[i].onmouseleave = hover29;


}

function hover28() {
    for (var i = 0; i < divcolor.length; i++) {
        if (divcolor[i] === this) {
            divcolor[i].className = "middle-5-12 div-color";
        };
    }

}

function hover29() {
    for (var i = 0; i < divcolor.length; i++) {
        if (divcolor[i] === this) {
            divcolor[i].className = "middle-5-12";
        };

    }

}