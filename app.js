const bigMenu = document.getElementsByClassName("largeDivLink");


bigMenuElements = Array.prototype.slice.call(bigMenu);

function scrolling(){

    if(window.pageYOffset>=1260 && window.pageYOffset<1970){
        bigMenuElements.forEach(x=>x.style.color="yellow");
        console.log("big");
    }
    else {
        bigMenuElements.forEach(x=>x.style.color="blue");
        console.log("small");
    }

    console.log(window.pageYOffset);
}

setInterval(scrolling,70);

// if(window.pageYOffset<1307 && window.pageYOffset>1900){