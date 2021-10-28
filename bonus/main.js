// Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

// 3 array dati
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const itemsCont = document.querySelector(".items");
const thumbsCount = document.querySelector(".thumbs");

// variabili dei bottoni
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");


let item = "";
let thumbs = "";



// ciclo che crea i div e ci inserisce le img
for (let i = 0; i < items.length; i++ ){
    
    item += `
    <div class="item">
        <img src="${items[i]}" alt="${items[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p> ${text[i]}</p>
        </div>
    </div>`;

    thumbs += `
    <div class="thumb">
        <img src="${items[i]}" alt="${items[i]}">
    </div>`;    
};

// stampa in item con active in posizione di default
itemsCont.innerHTML = item;
document.getElementsByClassName("item")[0].classList.add("active");

// stampa in thumb con active in posizione di default
thumbsCount.innerHTML = thumbs;
document.getElementsByClassName("thumb")[0].classList.add("active");

// al click rimuoviamo la classe active attiva e incrementiamo l'activeposition di 1 assegnando di fatto l'active all'elemento successivo
let activePosition = 0;

btnNext.addEventListener("click",
    
    function(){
        
        activePosition++
        // activePosition= activePosition + 1; 

        if(activePosition == items.length ){
            activePosition = 0
        };
        console.log(activePosition);

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }
);

// al click rimuoviamo la classe active attiva e decrementiamo l'activeposition di 1 assegnando di fatto l'active all'elemento precendente

btnPrev.addEventListener("click",
    
    function(){
        
        activePosition--
        // activePosition = activePosition - 1; 
        
        if(activePosition < 0){
            activePosition = items.length -1;
        };
        console.log(activePosition);

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }
);

