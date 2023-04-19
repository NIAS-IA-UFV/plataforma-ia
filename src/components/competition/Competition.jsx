import React from "react"
import "./competition.css"
import Sidebar from "../sidebar/Sidebar"
import poker from "../../img/poker.png"
import {useNavigate} from "react-router-dom"


// Componente responsavel por renderizar a pagina de instruções da competição
const Competition = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/input")
  }

  return(
    <div className="competition">
      <Sidebar/>
      <div className="competiton-container">
        <header className="competition-header">
          <h1 className="competition-title">Competição de No Limit Texas Hold'em Poker</h1>
          <img src={poker} alt="" className="poker-img" />
        </header>
        <main className="competition-content">
          <h2 className="rules">Regras</h2>
          <section className="entries">
            <h3 className="competition-subtitle">Entradas</h3>
            <p className="entries-instructions">

              <p className="intro">São passadas a cada um dos scripts correspondentes a jogadores criados os seguintes valores:</p>
              <i className="entries-subtitle">Cartas</i>Vetor 1x7 contendo as cartas do jogador e as cartas da mesa, quando disponíveis. As duas primeiras cartas são as cartas da mão do jogador, as três subsequentes representam o flop, a seguinte representa turn e a última o river. Os elementos desse vetor assumem valores de -1 a 51, onde -1 representa uma carta da mesa ainda não revelada (portanto desconhecida), os primeiros 13 valores (de 0 a 12) representam as cartas A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q e K, respectivamente, de paus. As treze seguintes representam as cartas de ouros na mesma ordem, seguidas das cartas de copas e espadas.

              <i className="entries-subtitle">Dados</i><p className="intro">Vetor 1x12 contendo alguns dados da mesa, sendo eles, respectivamente:</p>
              <ol className="entry-list">
                <li>Valor do big blind;</li>
                <li>Valor do stack;</li> 
                <li>
                  Posição do jogador relativa ao dealer na mesa. Esse valor é 1 caso o jogador seja o dealer, 2 se for o small blind, aumentando até n, onde n é o número de jogadores ativos;
                </li>
                <li>
                  Lugar do dealer na mesa. Assumindo valores de 1 até n, representa em qual “cadeira” o dealer está sentado. Esse valor é fixo para cada jogador dentro de um torneio, sendo utilizado em conjunto com o vetor Dados e a matriz Histórico, portanto cada jogador é unicamente identificado por um número;
                </li>
                <li>
                  Lugar do jogador na mesa. Análogo ao lugar do dealer na mesa, representando o lugar do jogador;
                </li>
                <li>
                  Rodada em que o jogo se encontra (1 = pré-flop, 2 = flop, 3 = turn, 4 = river);
                </li>
                <li>
                  Valor do pot;
                </li>
                <li>
                  Valor do wager do jogador (quantidade de fichas movidas para a mesa no total pelo jogador);
                </li>
                <li>
                  Valor do call, ou seja, quantidade mínima de fichas que o jogador precisa passar à mesa, além de seu wager, para que continue jogando;
                </li>
                <li>
                  Valor mínimo do raise, ou seja, em caso de um raise do jogador, a quantidade mínima de fichas movidas para a mesa pelo jogador nessa rodada deve ser o valor do call somado ao raise mínimo;
                </li>
                <li>
                  Número de jogadores ativos, ou seja, que ainda tem fichas disponíveis (não foram eliminados);
                </li>
                <li>
                  Número de jogadores que ainda decidem na rodada, ou seja, que ainda não deram fold.
                </li>
              </ol>

              <i className="entries-subtitle">Estado</i><p className="intro">Matriz 4xN, sendo N o número total de jogadores, contendo informações disponíveis de todos os jogadores na mesa, sendo elas:</p> posição referente ao dealer, stack, wager e uma variável binária que indica se o jogador desistiu da mão (ela é 1 caso o jogador tenha desistido). Cada coluna representa um jogador e as linhas representam as informações. A primeira coluna é referente ao jogador sentado na “cadeira 1”, a segunda referente à “cadeira 2”, e assim sucessivamente. Quando o jogador está eliminado (não possui mais fichas), a coluna referente a ele é preenchida com zeros.

              <i className="entries-subtitle">Histórico</i>Matriz 6x4xN, sendo N o número total de jogadores, contendo o número de folds, calls, bets, raises, re-raises e all-ins de cada jogador em cada rodada (pre-flop, flop, turn e river) dentro de todos os torneios jogadas na mesma simulação. A primeira dimensão dessa matriz representa cada uma das ações, a segunda representa a rodada e a terceira os jogadores.

              Em simulações com mais de um torneio, os jogadores são embaralhados ao final de cada uma. Entretanto, para que haja coerência, a matriz histórico também é reorganizada de acordo, e a nova matriz estado também estará de acordo com essa nova ordem. Sendo assim, as posições mostradas no final da siulaçao correspondem às posições no último torneio, somente.

              <i className="entries-subtitle">Observação</i><p>Sua IA deve ser criada no Matlab ! Você receberá por email um modelo base de IA , os <b>nomes</b> do arquivo e da função Matlab <b>NÃO</b> devem ser alterados.</p>
            </p>

          </section>
        </main>
        <footer className="footer-comp">
          <p className="footer-text">Para participar envie seu arquivo por aqui.</p>
          <button onClick={handleClick} className="footer-comp-button">Submeter</button>
        </footer>
        
      </div>
    </div>
  )
}

export default Competition