window.onload = function(){

    let frutas = [
        {item : 'Guaraná', valor : 30.00},
        {item : 'Maça', valor : 2.25},
        {item : 'Limão', valor : 5.50},
        {item : 'Morango', valor : 8.00},
        {item : 'Melão', valor : 7.00}   
    ]  

    const cestaDoCliente = document.querySelector("#cestaDoCliente");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
    const produtos = document.querySelector("#produtos");
    
    (function (){
        
        let totalzinho = 0;
        
        for (let producao of frutas) {
            let liItem = document.createElement('li');

            for(let listaProducao in producao) {
                if(listaProducao == 'valor') {

                    produtos.appendChild(liItem).setAttribute('data-valor', producao[listaProducao]);                       
                } else {

                    produtos.appendChild(liItem).textContent = `${producao[listaProducao]}`; 
                }
            } 

            let checarItem = [];  

            liItem.addEventListener('click', ()=>{

                if(checarItem.indexOf(cestaDoCliente) == -1) { 
                    let cestaItem = document.createElement('li'); 
                        
                    for(let listaProducao in producao) {
                        if(listaProducao == 'valor') {
                            cestaDoCliente.appendChild(cestaItem).setAttribute('data-valor', producao[listaProducao]);   
                            totalzinho +=  producao[listaProducao];
                        } else {
                            cestaDoCliente.appendChild(cestaItem).textContent = `${producao[listaProducao]}`; 
                        }
                    } 
                    checarItem.push(cestaDoCliente);

                } else {  
                    for(let listaProducao in producao) {

                        if(listaProducao == 'valor') {

                            produtos.appendChild(liItem).setAttribute('data-valor', producao[listaProducao]);                       
                        } else {

                            produtos.appendChild(liItem).textContent = `${producao[listaProducao]}`; 

                            alert(`O produto ${producao[listaProducao]} já foi adicionado a sua sexta`);                     
                        } 
                    }
                } 
                mostraTotalCompra.value = totalzinho.toFixed(2);    
            })
        }       
    })(frutas)
}