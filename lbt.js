let index = 0;
let oBtnRight = document.querySelector('.text2bx1li2rightbtn');
let oBtnLeft = document.querySelector('.text2bx1li2leftbtn');
let aDian = document.querySelectorAll('.dhdians div')
let aLbt1 = document.querySelectorAll('.lbt1 .text2bx1li2');
//console.log(aDian.len)
auto();
oBtnLeft.onclick = function () {
    aLbt1[index].className = 'text2bx1li2'
    aDian[index].className = ''
    index--
    if (index < 0) index = 11
    aLbt1[index].className = 'text2bx1li2 on'
    aDian[index].className = 'on'
}
oBtnRight.onclick = function () {
    aLbt1[index].className = 'text2bx1li2'
    aDian[index].className = ''
    index++
    if (index >= 12) index = 0
    aLbt1[index].className = 'text2bx1li2 on'
    aDian[index].className = 'on'
}
function auto() {
    setInterval(function () {
        for (let i = 0; i < 12; i++) {
            aDian[i].onclick = function () {
                aLbt1[index].className = 'text2bx1li2'
                aDian[index].className = ''
                index = i
                aLbt1[index].className = 'text2bx1li2 on'
                aDian[index].className = 'on'
            }
        }
        aLbt1[index].className = 'text2bx1li2'
        aDian[index].className = ''
        index++
        if (index >= 12) index = 0
        aLbt1[index].className = 'text2bx1li2 on'
        aDian[index].className = 'on'
    }, 3000);
}