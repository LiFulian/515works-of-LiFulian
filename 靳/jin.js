
function go() {
    var inputfile = document.getElementById('inputfile');
    var submit = document.getElementById('submit');

    submit.onclick = function () {
        var reader1 = new FileReader();
        reader1.readAsText(inputfile.files[0], "UTF-8");//嗯。
        reader1.onload = function (e) {
            string = e.target.result;
            myReg();
        }

        function myReg() {
            var regImg = /!\[[\S| ]+\]\(([\S| ]+)\)/g;
            data = string.replace(regImg, "<img alt='这是一张图片' src='$1'>");


            var regA1 = /#(?=\S+\))/g;
            data = data.replace(regA1, "%23")//参考李福连；

            var regA = /##\s+\[([\S| ]+)\]\((\S+)\)/g;
            data = data.replace(regA, '<h2><a href="$2">$1</a></h2>')

            var regA2 = /\[([\S| ]+)\]\((\S+)\)/g;
            data = data.replace(regA2, "<a href='$2'>$1</a>");

            console.log(data);

            var header =
                "<!DOCTYPE html>" +
                "<html lang='en'>" +
                "<head>" +
                "<meta charset='UTF-8'>" +
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
                '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
                '<title>Document</title>';

            var css =
                '<style>' +

                'div{' +//此处不能用iD选择器，推测无法直接输入#；
                'width: 60%;' +
                'margin: 5% 20% 10% 20%' +//上，右，下，左
                '}' +
                'img{' +
                'max-width:100%' +//参考李福连
                '}' +
                '</style>';

            var bodyer =
                '<body>' +
                '<div>';

            var footer =
                '</div>' +
                '</body>' +
                "</html>";

            var result = header + css + bodyer + data + footer;
            //参考csdn
            var a = document.createElement("a");
            a.download = "text.html";
            a.href = "data:text/txt;charset=utf-8," + result;
            a.click();//执行下载功能
        }
    }
}
