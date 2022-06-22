async function funcionConPromesaAwaitTiemout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=>resolver('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin funcion');
}

funcionConPromesaAwaitTiemout();