import React from "react";
import "./styles.css";

const ProductDetailPage = () => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src="image-url.jpg" alt="Produto" />
      </div>
      <div className="product-info">
        <h1>Nome do Produto</h1>
        <p>Preço: R$99,99</p>
        <p>Descrição: Este é um ótimo produto.</p>
        <h2>Especificações</h2>
        <ul>
          <li>Especificação 1</li>
          <li>Especificação 2</li>
        </ul>
      </div>
      <div className="related-products"></div>
      <div className="comments"></div>
    </div>
  );
};

export default ProductDetailPage;
