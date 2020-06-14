
let conteo = 0;
let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;


const getPokemon = async ()=>{
    const solicitud = await fetch( url ).then( data => data.json() );
    let arrayPokemon = solicitud.results.map( data=>{ return data.name } );
    return arrayPokemon;
}

const nextPage = async ()=> {
    conteo+=20;
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${conteo}&limit=20`;
    const solicitud = await fetch( url ).then( data => data.json() );
    let arrayPokemon = solicitud.results.map( data=>{ return data.name } );
    return arrayPokemon;
}

const previusPage = async ()=> {
    conteo-=20;
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${conteo}&limit=20`;
    const solicitud = await fetch( url ).then( data => data.json() );
    let arrayPokemon = solicitud.results.map( data=>{ return data.name } );
    return arrayPokemon;
}

export { 
    getPokemon, 
    nextPage,
    previusPage
};
