
document.addEventListener("DOMContentLoaded", function () {
    var i = 0;
    var list = document.getElementById("list");
    function onBtnClick(bLeft, e) {
        var w = list.firstElementChild.offsetWidth;
        i = bLeft ? Math.max(0,i-1) : Math.min(list.children.length-2, i+1);
        list.style.transform = "translateX(-"+w*i+"px)";
    }
    window.addEventListener('resize', function(e){
        if (window.innerWidth < 600) {
            i = 0;
            list.style.transform = "none";
        }
    });
    document.getElementById("left").onclick = onBtnClick.bind(null,true);
    document.getElementById("right").onclick = onBtnClick.bind(null,false);
}, false);