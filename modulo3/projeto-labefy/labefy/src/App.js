import React from 'react';
import './App.css';
import axios from 'axios';
import TelaCriarPlaylists from './components/TelaCriarPlaylists';
import TelaListaDePlaylists from './components/TelaListaDePlaylists';
import AdicionaMusica from './components/AdicionaMusica';

class App extends React.Component {
  state  = {
    mostraPlaylists: false,
    playlists: []
  }

  componentDidMount() {
    this.pegaPlaylists()
}

    mudaCondicionalDeLista =  () => {
      this.state.mostraPlaylists ? this.setState({mostraPlaylists: false}) : this.setState({mostraPlaylists: true})
      }

      pegaPlaylists = () =>{
        let URL= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let autorizacao = {
            headers: {
                authorization: "Bruna-Alvarez-Joy"
            }
        }
        axios.get(URL, autorizacao)
        .then((response)=>{ this.setState({playlists: response.data.result.list})})
        .catch((error)=>{console.log(error)})
        console.log('chamou')
    }    

  render(){

    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraPlaylists){
      mostraLista = <TelaListaDePlaylists playlists = {this.state.playlists} pegaPlaylists = {this.pegaPlaylists} />
    }else{
      mostraLista= ""
    }

    return (
      <div>
        <TelaCriarPlaylists pegaPlaylists = {this.pegaPlaylists} />
        <br/><hr />
        <br/><button onClick={this.mudaCondicionalDeLista}>Mostrar/Esconder Playlists</button>
        {mostraLista}
      </div>

  );
  }
}

export default App;
