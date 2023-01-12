import React from 'react';

import {
  Container, 
  Retweeted,
  Rocketseaticon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  Dot,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return ( 
    <Container>
      <Retweeted>
        <Rocketseaticon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>12 de janeiro</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
               <CommentIcon />
               18
            </Status>
            <Status>
               <RetweetIcon />
               18
            </Status>
            <Status>
               <LikeIcon />
               542
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
 
export default Tweet;