import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BankCard } from './BankCard';
import { Pagination } from './Pagination';

function Home() {
    const [offset, setOffset] = useState(0); //qual posição vai pegar os dados
    const [data, setData] = useState([]); //elementos na tela 
    const [perPage] = useState(3); //itens mostrados na tela
    const [pageCount, setPageCount] = useState(0) //qunatidade total de páginas da lista
  
    //função para buscar os dados
    const getData = async () => {
      const res = await axios.get(`https://brasilapi.com.br/api/banks/v1`)
      const data = res.data;
      //paginação manual
      const slice = data.slice(offset, offset + perPage) //pega uma parte da lista com base no offset e perPage
      //pecorrendo os dados e mostrando na tela
      setData(slice) //atualiza quando clica no botão de página
      setPageCount(Math.ceil(data.length / perPage)) //calcula número de páginas que terão baseados nos dados vindos da api
    }
    //função quando muda de página
    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage * perPage)
    };
  
    //atualiza os dados na tela sempre que a página atualiza
    useEffect(() => {
      getData()
    }, [offset])
  
    return (
      <div className="App">
        {data.map((pd) => (
          <BankCard
          key={pd.ispb}
          fullName={pd.fullName}
          name={pd.name}
          ispb={pd.ispb}
          code={pd.code}/>
        ))}
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick}/>
      </div>
    );
}

export default Home;