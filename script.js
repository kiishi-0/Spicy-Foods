function response(){
    let x = document.getElementById('home');
    if(x.className === 'navigation'){
        x.className += ' response';
    }
    else{
        x.className = 'navigation'
    }
}

/*PROMO SECTION SCRIPT START */
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
/*PROMO SECTION SCRIPT ENDS */