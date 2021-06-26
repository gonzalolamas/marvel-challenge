import React from "react";
import { Content } from "./Card.style";

const Card = ({ item }) => {
  const {url} = item.urls[0];
  const {path} = item.thumbnail;
  const {name} = item;
  return (
    <Content className="transition">
      <a rel="noopener noreferrer" href={url} target="_blank">
        <img src={path + "/portrait_xlarge.jpg"} alt={name} />
      </a>
      <span>
        {name}
      </span>
    </Content>
  );
};

export default Card;
