function reloj(){
    var hoy=new Date()
    var h=("0"+hoy.getHours()).slice(-2)
    var m=("0"+hoy.getMinutes()).slice(-2)
    var s=("0"+hoy.getSeconds().toString()).slice(-2)
    document.getElementById("reloj").innerHTML=h+":"+m+":"+s
}
setInterval(reloj,1000)
