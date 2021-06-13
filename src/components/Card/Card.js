import React from "react";
import {Content} from "./Card.style"
import {ContentInner} from "./Card.style"
import {ContentFront} from "./Card.style"

const Card = ({ item }) => {
  return (
    <Content className="content">
      <ContentInner>
        <ContentFront>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
        </ContentFront>
      </ContentInner>
    </Content>
  );
};

export default Card;