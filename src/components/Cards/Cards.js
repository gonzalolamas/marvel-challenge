import React from "react";
import Card from "../Card/Card.js";
import { Contents } from "../Cards/Cards.style";

const Cards = ({ items, isLoading }) => {
  return isLoading ? (
    <i className="fas fa-spinner d-flex align-items-center justify-content-center text-primary">
      <h1>Loading</h1>
    </i>
  ) : (
    <Contents>
      {items.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </Contents>
  );
};

export default Cards;
