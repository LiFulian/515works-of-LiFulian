window.onload = function () {
    var nav = document.getElementById('nav');
    var aA = nav.getElementsByTagName('a');
    var aDiv = nav.getElementsByTagName("div");
    var iNow = 4;
    aDiv[4].style.width = aA[4].offsetWidth + "px";

    //鼠标移入移除，线
    for (var i = 0; i < aA.length; i++) {
        aA[i].index = i;
        aA[i].onmouseover = function () {
            var oDiv = this.getElementsByTagName('div')[0];
            var iWidth = this.offsetWidth;
            lflMove(oDiv, {
                width: this.offsetWidth
            });
        }
        aA[i].onmouseout = function () {
            if (this.index != iNow) {
                var oDiv = this.getElementsByTagName('div')[0];
                lflMove(oDiv, {
                    width: 0
                });
            }
        } //鼠标点击
        aA[i].onclick = function () {
            if (this.index == iNow) {
                return;
            } else {
                iNow = this.index;
                for (var i = 0; i < aA.length; i++) {
                    if (i != iNow) {
                        aDiv[i].style.width = 0;
                    } else {
                        aDiv[iNow].style.width = aA[iNow].offsetWidth;
                    }
                }
            }
        }

        //右上角灌水的那个contact
        var div = document.getElementById('div');
        var divCotactTr = document.getElementById('div-cotact-tr');
        var div1 = document.getElementById('div1');
        var div2 = document.getElementById('div2');
        divCotactTr.onmouseover = div.onmouseover = function () {
            lflMove(div2, {
                height: 68,
            }, 3);
            lflMove(div1, {
                opacity: 100
            });
            lflMove(div3, {
                color: "rgb(255,255,255)"
            })
        }
        divCotactTr.onmouseout = div.onmouseout = function () {
            lflMove(div2, {
                height: 0,
            });
            lflMove(div1, {
                opacity: 0.5
            });
            lflMove(div3, {
                color: "rgb(139, 92, 221)"
            })
        }
    }

    // 导航栏,rightSide消失与出现
    setInterval(function () {
        var nav = document.getElementById('nav');

        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop > 3) {
            rightSideShow();
            lflMove(nav, {
                top: 60,
                opacity: 0
            }, 3)
        } else {
            rightSideFade();
            lflMove(nav, {
                top: 80,
                opacity: 1
            })
        }
    }, 100)

    // rightSide的show /fade fn;
    var rightSideTop = document.getElementById('right-side-top');
    var aRightSideP = rightSideTop.getElementsByTagName('p');
    //rightSide的show /fade fn;
    var rightSideShow = function () {
        delayMove(aRightSideP[0], {
            right: -32
        }, function () {
            delayMove(aRightSideP[1], {
                right: -32
            }, function () {
                delayMove(aRightSideP[2], {
                    right: -32
                }, function () {
                    delayMove(aRightSideP[3], {
                        right: -32
                    }, function () {
                        delayMove(aRightSideP[4], {
                            right: -32
                        }, function () {
                            delayMove(aRightSideP[5], {
                                right: -32
                            }, function () {
                                delayMove(aRightSideP[6], {
                                    right: -32
                                }, function () {
                                    delayMove(aRightSideP[7], {
                                        right: -32
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    var rightSideFade = function () {
        delayMove(aRightSideP[7], {
            right: -132
        }, function () {
            delayMove(aRightSideP[6], {
                right: -132
            }, function () {
                delayMove(aRightSideP[5], {
                    right: -132
                }, function () {
                    delayMove(aRightSideP[4], {
                        right: -132
                    }, function () {
                        delayMove(aRightSideP[3], {
                            right: -132
                        }, function () {
                            delayMove(aRightSideP[2], {
                                right: -132
                            }, function () {
                                delayMove(aRightSideP[1], {
                                    right: -132
                                }, function () {
                                    delayMove(aRightSideP[0], {
                                        right: -132
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    //   rightSide 鼠标移入移除
    var rightSideTop = document.getElementById('right-side-top');
    var aRightSideP = rightSideTop.getElementsByTagName('p');
    for (var i = 0; i < aRightSideP.length; i++) {
        aRightSideP[i].onmouseover = function () {
            startMove(this, {
                right: -15
            })
        }
        aRightSideP[i].onmouseout = function () {
            startMove(this, {
                right: -32
            })
        }
    }

    //下面是左上侧部分
    var leftDiv = document.getElementById("left-div");
    var viewHeight = 0;
    leftDiv.style.height = viewHeight;
    setInterval(function () {
        var viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
        leftDiv.style.height = viewHeight + "px";
    }, 100)

    //下边是左下侧部分

    var aCycle = document.getElementsByClassName("cycle");
    var circleLength = Math.floor(2 * Math.PI * aCycle[0].getAttribute("r"));
    var signIn = document.getElementById("signIn");
    var aLi = signIn.getElementsByTagName("li");

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseout = function () {
            var val = parseFloat(0).toFixed(2);
            aCycle[this.index].setAttribute("stroke-dasharray", "" + circleLength * val / 100 + ",1000");
        }
        aLi[i].onmouseover = function () {
            var val = parseFloat(100).toFixed(2);
            aCycle[this.index].setAttribute("stroke-dasharray", "" + circleLength * val / 100 + ",1000");
        }
    }

    ///右侧图片鼠标移入移出变化
    var rightDiv = document.getElementById('right-div');
    var rightAllImg = rightDiv.getElementsByTagName('img');
    var rightImgBg = document.getElementsByClassName('right-img-bg');

    for (var i = 0; i < rightImgBg.length; i++) {
        rightImgBg[i].index = i;
        rightImgBg[i].onmouseover = function () {
            pShow(this.index); //提前定义了文字介绍的展示方法；
            lflMove(rightDiv, {
                top: 180
            }, 2)
            for (var i = 0; i < rightAllImg.length; i++) {
                if (i != this.index) {
                    //右侧图片滚动，中间非对应文字恢复灰色
                    lflMove(middleAllImg[i], {
                        opacity: 0
                    })
                    lflMove(middleAllP[i], {
                        left: -30,
                        color: "rgb(160,160,160)"
                    })
                    //右侧 鼠标移出，图片变大，变亮
                    lflMove(rightAllImg[i], {
                        width: 1056,
                        opacity: 1,
                    }, 2)
                } else {
                    //右侧图片滚动，中间对应文字高亮
                    lflMove(middleAllImg[i], {
                        opacity: .4
                    })
                    lflMove(middleAllP[i], {
                        left: 0,
                        color: "rgb(0,0,0)"
                    })
                    ////右侧 鼠标移入，图片变大，变暗
                    lflMove(rightAllImg[i], {
                        width: 1056,
                        opacity: 0.7
                    }, 2)
                }
            }
        }

        rightImgBg[i].onmouseout = function () {
            pFade(this.index);
            lflMove(rightDiv, {
                top: 235
            }, 2)
            for (var i = 0; i < rightAllImg.length; i++) {
                if (i != this.index) {
                    lflMove(rightAllImg[i], {
                        width: 960,
                    }, 2)
                } else {
                    lflMove(rightAllImg[i], {
                        width: 960,
                        opacity: 1
                    }, 2)
                }
            }
        }
    }

    //下边是大图片上字体的淡入淡出的方法
    var h2 = rightDiv.getElementsByTagName("h2");
    var rightP = rightDiv.getElementsByClassName('right-p');
    var rightGo = rightDiv.getElementsByClassName('right-go');
    var pShow = function (j) {
        startMove(h2[j], {
            top: 0,
            opacity: 100
        }, function () {
            startMove(rightP[j], {
                top: 60,
                opacity: 100
            }, function () {
                startMove(rightGo[j], {
                    left: 40,
                    opacity: 100
                })
            })
        })
    }

    var pFade = function (j) {
        startMove(rightGo[j], {
            left: -10,
            opacity: 0
        }, function () {
            startMove(rightP[j], {
                top: 110,
                opacity: 0
            }, function () {
                startMove(h2[j], {
                    top: 50,
                    opacity: 0
                })
            })
        })
    }

    //下面是中间四个文字部分的
    var middleDiv = document.getElementById('middle-div');
    var middleAllP = middleDiv.getElementsByTagName('p');
    var middleAllImg = middleDiv.getElementsByTagName('img');

    for (var i = 0; i < middleAllP.length; i++) {
        middleAllP[i].index = i;
        middleAllP[i].onmouseover = function () {
            for (var j = 0; j < middleAllP.length; j++) {
                if (j == this.index) {
                    scrollMove(this.index)
                    lflMove(middleAllImg[j], {
                        opacity: .4
                    })
                    lflMove(this, {
                        left: 0,
                        color: "rgb(0,0,0)"
                    })
                } else {
                    lflMove(middleAllImg[j], {
                        opacity: 0
                    })
                    lflMove(middleAllP[j], {
                        left: -30,
                        color: "rgb(160,160,160)"
                    })
                }
            }
        }
    }

    ///屏幕运动框架
    var timer = null;

    function scrollMove(k) {
        clearInterval(timer);
        timer = setInterval(function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            iTarget = k * 660
            var iSpeed = 0;
            if (scrollTop < iTarget) {
                iSpeed = 40
            } else {
                iSpeed = -40
            }
            if (Math.abs(scrollTop - iTarget) < 40) { //距离目标点足够近时，最后一次行走到目标点
                clearInterval(timer);
                window.scrollTo(0, iTarget);
            } else {
                window.scrollTo(0, scrollTop + iSpeed);
            }
        }, 30);
    }
    //中间的波浪
    var middleWave = document.getElementById('middle-wave');
    var waveMove = function (t) {
        middleWave.style.left = -t / 6 + 'px';
    }
    setInterval(function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        waveMove(scrollTop); //  借用scroll的值控制波浪水平位置
    }, 30)

    //右下角的小字部分
    var rightSideBottom = document.getElementById('right-side-bottom');
    var rightSideWord = document.getElementById('right-side-word')
    var vLine = document.getElementById('right-vLine')
    rightSideBottom.style.transform = "rotatez(90deg)";
    rightSideBottom.onmouseover = function () {
        lflMove(rightSideWord, {
            left: -20,
        })
        lflMove(vLine, {
            color: "rgb(255,255,255)"
        }, 2, function () {
            lflMove(vLine, {
                color: "rgb(220,218,218)"
            })
        })

    }

    rightSideBottom.onmouseout = function () {
        lflMove(rightSideWord, {
            left: -40,
        })
        lflMove(vLine, {
            color: "rgb(220,218,218)"
        })

    }

    // 旋转圆圈的移入移出
    var chainMove = function (obj, state, fn) {
        var count = 0;
        obj.style.display = state;
        setInterval(
            function () {
                count++;
                if (count == 1) {
                    if (fn) {
                        fn();
                    }
                }
            }, 30
        )
    }
    var divImg = document.getElementById('div-img-cycle');
    var divImgTr = document.getElementById('div-img-tr')
    var img7 = document.getElementById('img7');
    divImgTr.onmouseover = function () {
        chainMove(img2, "block", function () {
            chainMove(img3, 'block', function () {
                chainMove(img4, 'block', function () {
                    chainMove(img5, 'block', function () {
                        chainMove(img6, 'block', function () {
                            chainMove(img7, 'block')
                        })
                    })
                })
            })
        })
    }
    divImgTr.onmouseout = function () {
        chainMove(img7, "none", function () {
            chainMove(img6, 'none', function () {
                chainMove(img5, 'none', function () {
                    chainMove(img4, 'none', function () {
                        chainMove(img3, 'none', function () {
                            chainMove(img2, 'none')
                        })
                    })
                })
            })
        })
    }
    ///控制圆圈的旋转
    var jiaodu = 0;
    setInterval(function () {
        jiaodu = jiaodu + 1;
        divImg.style.transform = 'rotate(' + jiaodu + 'deg)';

    }, 30)

    //动画部分的链式运动  圆圈点击后
    var bigPinkCycle = document.getElementById('big-pink-cycle');
    var leftBlack = document.getElementById('left-black');

    leftBlack.style.display = 'none';
    divImgTr.onclick = function () {
        rightDiv.style.display = "none";
        rightPink.style.display = "inline-block"
        leftBlack.style.display = 'inline-block';

        //高度由0 设为可视窗口的高度，但是被放在了可视窗口之外（下边）
        //为运动作准备；
        balckPink.style.height = viewHeight + "px";
        balckPink.style.width = viewWidth + "px";
        rightPink.style.height = viewHeight * 1.2 + "px";
        rightPink.style.top = viewHeight * 1.2 + 'px';
        leftBlack.style.height = viewHeight * 1.2 + "px";
        blackSmBg[0].style.height = viewHeight + 'px';
        blackSmBg[1].style.height = viewHeight + 'px';
        blackSmBg[2].style.height = viewHeight + 'px';

        //allInMove and blackpinkmove 延时
        //大粉色圆圈的出现
        allInMove();
        var count1 = 0;
        timer1 = setInterval(function () {
            window.scrollTo(0, 0);
            count1++;
            if (count1 == 1) {
                rightDiv.style.display = "none";
                startMove(bigPinkCycle, {
                    width: 5000,
                    height: 5000,
                    bottom: -2500,
                    left: -2500
                });
            }
            if (count1 == 50) {
                lflMove(leftBlack, {
                    opacity: 1
                }, 15)
            }
            if (count1 == 65) {
                lflMove(rightPink, {
                    top: 0
                }, 7);
            }
            if (count1 > 66) {
                clearInterval(timer1)
                // fn1可以在6s内完成，没必要一直开着他的定时器
            }
        }, 30)
        blackMove1();
    }

    //点圆圈后的动画方法；
    var viewHeight = document.documentElement.clientHeight;
    var viewWidth = document.documentElement.clientWidth;
    var cAllIn1 = document.getElementById('c-all-in1');
    var cAllIn2 = document.getElementById('c-all-in2');

    cAllIn1.style.height = viewHeight + 'px';
    cAllIn2.style.height = viewHeight + 'px';
    cAllIn2.style.width = viewWidth + 'px';
    cAllIn2.style.lineHeight = viewHeight + 'px';

    var allInMove = function () {
        lflMove(cAllIn1, {
            width: viewWidth
        }, 8, function () {
            cAllIn1.style.right = 0;
            cAllIn2.style.right = 0;
            lflMove(cAllIn1, {
                width: 0
            }, 8)
        })
    }

    ////动画中的上下滑动三条黑块
    var black3Bg = document.getElementById('black-3bg');
    var blackSmBg = black3Bg.getElementsByTagName('div');
    blackSmBg[0].style.width = viewWidth * .33 + 'px';
    blackSmBg[1].style.width = viewWidth * .34 + 'px';
    blackSmBg[2].style.width = viewWidth * .33 + 'px';
    blackSmBg[1].style.left = viewWidth * .33 + 'px';
    blackSmBg[2].style.left = viewWidth * .67 + 'px';
    blackSmBg[0].style.top = viewHeight + 'px';
    blackSmBg[1].style.top = viewHeight + 'px';
    blackSmBg[2].style.top = viewHeight + 'px';

    var blackMove1 = function () {
        delayMove(blackSmBg[0], {
            top: 0
        }, function () {
            delayMove(blackSmBg[1], {
                top: 0
            }, function () {
                delayMove(blackSmBg[2], {
                    top: 0
                })
            }, 10)
        }, 10)
    }

    ///动画中 三条黑块消失后出现的介绍和粉色块
    var balckPink = document.getElementById('black-pink');
    var rightPink = document.getElementById('right-pink');

    leftBlack.style.width = viewWidth * .66 + "px";
    rightPink.style.width = viewWidth * .34 + "px";
    rightPink.style.left = viewWidth * .66 + "px";

    //黑色 粉色里面的按钮
    var lbDiv5 = document.getElementById('lb-div5');
    lbDiv5.onmouseover = function () {
        lbDiv5.style.backgroundColor = "#fd979f";
    }
    lbDiv5.onmouseout = function () {
        lbDiv5.style.backgroundColor = "#fff";
    }

    //粉色按钮close
    var rpDivC = document.getElementById('rp-div-c');
    rpDivC.onmouseover = function () {
        rpDivC.style.fontWeight = "400";
        rpDivC.style.fontSize = 64 + 'px';
        rpDivC.style.margin = 0;
    }
    rpDivC.onmouseout = function () {
        rpDivC.style.fontWeight = "200";
        rpDivC.style.fontSize = 60 + 'px';
        rpDivC.style.margin = 4 + "px";
    }

    ///关闭动画
    rpDivC.onclick = function () {
        lflMove(leftBlack, {
            opacity: 0
        }, 10);
        lflMove(rightPink, {
            top: -viewHeight * 1.2
        }, 10)
        var count2 = 0;
        var timer3 = setInterval(function () {
            count2++;
            if (count2 == 15) {
                rightDiv.style.display = "inline-block";
                leftBlack.style.height = "0";
                rightPink.style.height = "0";
                rightPink.style.top = viewHeight * 1.2 + 'px';
                cAllIn1.style.width = "0";
                balckPink.style.height = "0";
                balckPink.style.width = "0";
                bigPinkCycle.style.width = "0";
                bigPinkCycle.style.height = '0';
                bigPinkCycle.style.bottom = "0";
                bigPinkCycle.style.left = '0';
            }
            if (count2 == 20) {
                delayMove(blackSmBg[0], {
                    top: viewHeight
                }, function () {
                    delayMove(blackSmBg[1], {
                        top: viewHeight
                    }, function () {
                        delayMove(blackSmBg[2], {
                            top: viewHeight
                        })
                    }, 10)
                }, 10)
            }
            if (count2 == 60) {
                blackSmBg[0].style.height = '0';
                blackSmBg[1].style.height = '0';
                blackSmBg[2].style.height = '0';
                leftBlack.style.display = 'none';
            }
            if (count2 == 61) {
                clearInterval(timer3)
            }
        }, 30)
    }
}
///写着写着发现
//1.z-index设置的不好，一开始加0图方便，后来发现这么多0 搞的我看难受
//2.git不懂，，，
//3.和源网站实现方式差距太大，svg不熟悉
//4.定时器是个好东西，走了不少弯路，写过的不敢大改了，怕瘫痪* 。*
//5.用Mac做的，不知道适应性咋样；