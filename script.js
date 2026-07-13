function Scroll(pos){
    let delay = 0;

    for(let i = 0; i < pos; i += 5){
        setTimeout(() => b(i), delay);
        console.log("jh");
        if(pos - 100 <= 0) {
            delay += pos / 2;
        } else {
            delay += 8;
        }
    }
}

function b(i){
    window.scrollTo(0, i);
}

function openVille(){
    window.open("villes.html");
}

function openListe(){
    window.open("liste-as-af.html");
}