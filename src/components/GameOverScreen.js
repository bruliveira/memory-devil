import React from "react";
import "./GameOverScreen.css";

const GameOverScreen = ({
  score,
  difficulty,
  highScores,
  onRestart,
  onBackToMenu,
}) => {
  const isNewRecord =
    highScores[difficulty] === 0 || score < highScores[difficulty];

  return (
    <div className="game-over-screen">
      <div className="game-over-content">
        <div className="game-over-title">
          <h1>👿 Que sucesso capetinha! 😈</h1>
          {isNewRecord && (
            <div className="new-record">
              <span>💀 NOVA NOTA MÁXIMA! 💀</span>
            </div>
          )}
        </div>

        <div className="score-display">
          <div className="current-score">
            <h2>Tentativas no inferninho ({difficulty} pares)</h2>
            <div className="score-number">{score}</div>
          </div>

          <div className="high-score">
            <h3>Melhor Nota ({difficulty} pares)</h3>
            <div className="score-number">
              {highScores[difficulty] || score}
            </div>
          </div>
        </div>

        <div className="all-scores">
          <h3>💀 Boletim da Capetinha:</h3>
          <div className="scores-grid">
            {[2, 4, 6, 8, 10].map((diff) => (
              <div
                key={diff}
                className={`score-item ${diff === difficulty ? "current" : ""}`}
              >
                <span className="difficulty-label">{diff} pares:</span>
                <span className="score-value">
                  {highScores[diff] > 0
                    ? `${highScores[diff]} tentativas`
                    : "Ainda não conquistado"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="character-sad">
          <div className="celebration">
            <div className="celebration-emoji">👿</div>
            <div className="celebration-emoji">😈</div>
            <div className="celebration-emoji">💀</div>
            <div className="celebration-emoji">👺</div>
          </div>
        </div>

        <div className="game-over-buttons">
          <button className="restart-button" onClick={onRestart}>
            👿 Nova aventura
          </button>
          <button className="menu-button" onClick={onBackToMenu}>
            😈 Voltar ao inferninho
          </button>
        </div>

        <div className="encouragement">
          <p>Você é a melhor capetinha o mundo! Te amooo! 👿💀</p>
        </div>

        <div className="author-signature">
          <p>Desenvolvido com 💖 por bruliveira</p>
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
