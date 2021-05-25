const div = document.getElementById('wynik');
const sub = document.getElementById('submit');

const inp = document.getElementsByTagName('input');

var suma = 0;

sub.addEventListener('click', () => {
    
    suma = 0;

    for(i = 0; i < 4; i++)
    {
        
        if(inp[i].checked == true){
            if(i == 0) suma += 45;
            else if(i == 1) suma += 30;
            else if(i == 2) suma += 20;
            else if(i == 3) suma += 5;
        }

    }

    div.innerHTML = `Cena zabiegów: ${suma} zł`;
    
});









