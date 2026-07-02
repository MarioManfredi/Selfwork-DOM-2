
// Variables
let addTitle = document.querySelector('#addTitle');
let addText = document.querySelector('#addText');
let contentWrapper = document.querySelector('#contentWrapper');

// Button
let createBtn = document.querySelector('#createBtn');

let check = false;

let articolo = {
    
    mostraArticolo : function(){
        
        contentWrapper.innerHTML = '';
        let div = document.createElement('div');
        div.classList.add('card-custom');
        div.innerHTML = `
            <h3 class="card-title mb-3 title">${addTitle.value}</h3>
            <p class="lead">${addText.value}</p>
        `;
        contentWrapper.appendChild(div);
    }
};

createBtn.addEventListener('click', ()=>{
    
    if(check == false){
        if(addTitle.value && addText.value){
            articolo.mostraArticolo();
            check = true;
            createBtn.innerHTML = 'Elimina articolo';
        }else{
            alert('Titolo e/o contenuto vuoto');

        }
    }else{
            check = false;
            createBtn.innerHTML = 'Creare articolo';
            contentWrapper.innerHTML = '';
        }
    
    addTitle.value = '';
    addText.value = '';
    
});