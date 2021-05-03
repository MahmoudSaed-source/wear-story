var mycont = Array.from(document.querySelectorAll(".continer img")),
    mylengthofArr = mycont.length,
    corantslid=1,
    mynumberslid=document.getElementById("slidernumber"),
    nextbutton = document.getElementById("next"),
    prevbutton = document.getElementById("prev"),
    mypad =document.getElementById("pad '");


nextbutton .onclick = next;
prevbutton .onclick = prev;


chacer ();
function next () {
    if (nextbutton.classList.contains("nextdisable")) {
        
} else {
        corantslid++;
        chacer ();
        
}
    

}
function prev () {
     if (prevbutton.classList.contains("prevdisabled")) {
        
} else {
        corantslid--;
        chacer ();  
}
    }
var myul = document.createElement("ul");
myul.setAttribute("id","ulpadintion");
myul.setAttribute("className","ulpadintion")
var i ;
for (i=1 ; i<=mylengthofArr ; i++) {
 var paditem=document.createElement("li")
    paditem.textContent= i ;
    myul.appendChild(paditem);
    paditem.setAttribute("data",i)
}
document.getElementById("pad").appendChild(myul);
var poltion = Array.from(document.querySelectorAll("#ulpadintion li"));
for (var i = 0 ; i < poltion.length ; i++) {
    poltion[i].onclick = function () {
    corantslid = parseInt(this.getAttribute("data"));
        chacer();
    }
}

chacer();


function chacer () {
    
    mynumberslid .textContent =(   corantslid    ) + "    /  " + (mylengthofArr);
    removeallclass();
    mycont[corantslid -1].classList.add("active");
        if (corantslid == 1) {
        prevbutton.classList.add("prevdisabled")
    } else {
        prevbutton.classList.remove("prevdisabled")
    }
    if (corantslid == mylengthofArr) {
        nextbutton.classList.add("nextdisable")
    } else {
        nextbutton.classList.remove("nextdisable")
    }
};

function removeallclass() {
mycont.forEach(function (img) {
    img.classList.remove("active");
})

};


 var imagemen = document.getElementById("menshow"),
    imagewom = document.getElementById("womshow");
    var menarrryimage = ["sho001.jpg","sho002.jpg","sho003.jpg","sho004.jpg","sho005.jpg","sho006.jpg","sho007.jpg"];
    var womenarrayiage =["show001.jpg","show002.jpg","show003.jpg","show004.jpg","show004.jpg","show005.jpg","show006.jpg","show007.jpg",
    "show008.jpg","show009.jpg"];
    var countimagewomen = womenarrayiage.length;
    var countmenimage = menarrryimage.length;
       
        
        
    var imageraviwe = setInterval( function() {
        var  randomimageshowmen = ( Math.floor(Math.random()*countmenimage));
        imagemen.src=menarrryimage[randomimageshowmen];
        
    }, 4000);
var womset = setInterval(function () {
    var randowomenshoe = (Math.floor (Math.random()*countimagewomen));
    imagewom.src = womenarrayiage[randowomenshoe];
},3000)





