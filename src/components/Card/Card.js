import React from "react";
import { Content } from "./Card.style";

const Card = ({ item }) => {
  return (
    <Content>
      <a rel="noopener noreferrer" href={item.urls[0].url} target="_blank">
        <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt={"item"} />
      </a>
      <span>
        {item.name}
      </span>
    </Content>
  );
};

export default Card;
