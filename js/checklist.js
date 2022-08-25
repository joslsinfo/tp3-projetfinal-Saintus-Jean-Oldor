const icons = `<span class="checkList"> <i class="fa-solid fa-check"></i></span>`;
let tableauListe = document.querySelectorAll('.liste .liste__elem');
for(let li of tableauListe) {
    li.addEventListener('click', function(){
        this.classList.toggle('active');

        if(this.classList.contains('active')){
          
            this.innerHTML =   this.innerText + icons;
        } else{
            this.innerHTML =   this.innerText;
        }

    });
}


const icons2 = `<span class="paraListe"><i class="fa-solid fa-circle-check"></i> </span>`;
console.log(icons2);
let tableauListe2 = document.querySelectorAll('.paraListe');
for(let span of tableauListe2) {
    span.addEventListener('click', function(){
        this.classList.toggle('active2');

        if(this.classList.contains('active2')){
          
            this.innerHTML =   this.innerText + icons2;
        } else{
            this.innerHTML =   this.innerText;
        }
        console.log(this.innerHTML);

    });

}
