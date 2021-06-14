import React from "react";
import {Content, ContentFront, ContentInner} from "./Card.style"




const Card = ({ item }) => {
  return (

    <Content className="content">
      <ContentInner>
        <ContentFront>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt={"hero"} />
        </ContentFront>
      </ContentInner>
    </Content>
  );
};

export default Card;