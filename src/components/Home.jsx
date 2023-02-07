import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
        <header className='banner'>
        <img src='./images/banner.png' alt='O banner principal da página do organo'/>
        </header>
        <div className='campoTexto'>
        <form>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <p id='nome'>Nome</p>
            <input type="text" placeholder="Digite seu nome"/>
            <p id='cargo'>Cargo</p>
            <input type="text" placeholder="Digite seu cargo" />
            <p id='imagem'>Imagem</p>
            <input type="text" placeholder="Informe o endereço da imagem"/>
            <p id='time'>Time</p>
            <select >
                <option></option>
                <option></option>
                <option></option>
            </select>
            <input type="submit" value="Criar card"/>
        </form>
        </div>
    </div>
  )
}

export default Home