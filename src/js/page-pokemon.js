import { getPokemon, nextPage, previusPage } from "./proveedor";

const body = document.body;
let conteo = 1;
let olList, button;

const render = async () => {
  const htmlBase = `
    <h1>API Pokemon</h1>
    <ol class="list-group"></ol>
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-secondary bg-dark text-light border-dark mr-2">Previous</button>
        <button type="button" class="btn btn-secondary bg-dark text-light border-dark">Next</button>
    </div>`;

  const div = document.createElement("div");
  div.classList.add("container-fluid");
  div.innerHTML = htmlBase;
  body.prepend(div);

  const data = await getPokemon();
    for (const name of data) {
        imprimirLista( name )
        conteo++;
    }  

};

const eventos = async ()=> {
    
    button = document.querySelectorAll('button')
    button[0].addEventListener('click', async ()=>{
    
        if( conteo > 21 ){
            conteo-=40;
            olList.innerHTML = '';
            const data = await previusPage();
            for (const name of data) {
                imprimirLista( name )
                conteo++;
            }
        }
    
    })
    button[1].addEventListener('click', async ()=>{
        olList.innerHTML = '';
        const data = await nextPage();
            for (const name of data) {
                imprimirLista( name )
                conteo++;
            }
    })

} 

const imprimirLista = ( name ) => {
    olList = document.querySelector('ol');
    const olItem = document.createElement('li');
    olItem.classList.add("list-group-item");
    olItem.classList.add("bg-dark");
    olItem.classList.add("mb-1");
    olItem.innerText = `ID: ${conteo} ${name.toUpperCase()}`;

    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${conteo}.png`;

    olList.append(olItem);
    olList.append(img);
};


const init = () => {
  render();
  eventos();
};

export { init }
