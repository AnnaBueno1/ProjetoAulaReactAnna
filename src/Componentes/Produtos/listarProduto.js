import { useState, useEffect } from "react"
import baseDados from "./baseProduto" 
function listarProdduto({route}){
    
    const [produtos, setProdutos] = useState([]);
    const id = route.id

    console.log(id);

    useEffect(()  => { //evitar o looping infinito
        setProdutos(baseDados);
    }, []);

    return(
        <>Listar Produto Selecionado</>
    )
}

export default listarProduto