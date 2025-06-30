import { useState } from "react";
import './index.css'

export default function Produto(){


    const  [produtos, setProdutos] = useState(
        [
            {
                codigo: 12, nomeProduto:'café', descricao:'melita - 500g a vacuo', preco: 34.98, quantidadeEstoque: 15
            },
            {
                codigo: 15, nomeProduto:'Coca-Cola', descricao: '21 - Embalagem retoravel', preco: 7.99, quantidadeEstoque: 15
            }
        ]
    );
    return(
        <div>
            <table>
                <th>CODIGO</th>
                <th>PRODUTO</th>
                <th>DESCRIÇÂO</th>
                <th>PREÇO</th>
                <th>ESTOQUE</th>
                {
                    produtos.map(
                        (item, index)=>(
                            <tr key={index}>
                                <td>{item.codigo}</td>
                                <td>{item.nomeProduto}</td>
                                <td>{item.descricao}</td>
                                <td>{item.preco}</td>
                                <td>{item.quantidadeEstoque}</td>
                            </tr>
                        )
                    )
                }
            </table>
            <p className="numeroRegistro">Há {produtos.length} produtos cadastrados.</p>
        </div>
    )
}