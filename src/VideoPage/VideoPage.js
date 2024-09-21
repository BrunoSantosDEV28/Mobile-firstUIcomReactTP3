import React from "react";
import "./styles.css";

const VideoPage = () => {
  return (
    <div className="video-page">
      <div className="video-container">
        <video controls>
          <source src="video-url.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <h1>Título do Vídeo</h1>
      <p>Autor: Nome do Autor</p>
      <div className="video-description">
        <p>Descrição do vídeo.</p>
      </div>
      <div className="video-actions">
        <button>Curtir</button>
        <button>Compartilhar</button>
        <button>Salvar</button>
        <button>Denunciar</button>
      </div>
      <div className="related-videos"></div>
      <div className="comments"></div>
    </div>
  );
};

export default VideoPage;
