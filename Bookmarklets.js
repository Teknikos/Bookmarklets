//  Bokföringsverifikationer - Administration  //
//  Rensa formulär och sök upp räntekontot.
javascript:(function(){    
    document.querySelector('#fBookFormDate').value="";
    document.querySelector('#fBookFormAccount').value="2960";
    document.querySelector('input[value="Sök verifikationer"]').click();
})();

//  Skapa ny verifikation med rätt kund i rätt konto
javascript:(function(){    
    document.querySelector('input[value="Ny verifikation"]').click();
})();


// Visa antal sökta jobb högst upp i listan
javascript:(function(){
    document.querySelectorAll('.js-num-cards').forEach(
        function(list) {list.classList.remove('hide');}
    )
})();