console.log("HIIIIIIII")

function refresh_frame(i) {
    i = Math.floor(i);
    console.log(i);
    var el = document.getElementById('video_frame');
    var x = el.src;
    result= x.split("?")
    var r = result[0]+"?start="+i;
    el.src=r;
    console.log(r);


}