import React from "react";
import "./StartScreen.css";

const StartScreen = ({ onStart, highScores }) => {
  return (
    <div className="start-screen">
      <div className="start-content">
        <div className="title">
          <h1>🔥 Reino da Capetinha 😈</h1>
          <p>Oii mana, minha capetinha, meu amorzinho, preparada??</p>
          <p>Bem-vinda ao inferno mais fofo! Vamos causar travessuras?</p>
        </div>

        <div className="character-preview">
          <div className="photo-preview">
            <img
              src="/minha-praia.png"
              alt="Minha foto de praia"
              className="beach-photo"
            />
          </div>
        </div>

        <div className="instructions">
          <p>🔥 Clique nas cartas diabólicas para virá-las</p>
          <p>😈 Encontre os pares infernais iguais</p>
          <p>👹 Complete tudo para se tornar a rainha capeta!</p>
        </div>

        {Object.values(highScores).some((score) => score > 0) && (
          <div className="high-scores">
            <h3>🏆 Suas melhores pontuações, meu amor!</h3>
            <div className="scores-grid">
              {[2, 4, 6, 8, 10].map((diff) => (
                <div key={diff} className="score-item">
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
        )}

        <button className="start-button" onClick={onStart}>
          🔥 Entrar no Inferninho 🔥
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
