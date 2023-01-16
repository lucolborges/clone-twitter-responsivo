import React from 'react';
import FollowSugestion from '../FollowSugestion';
import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body} from './styles';

const SideBar: React.FC = () => {
  return ( 
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter"/>
        <SearchIcon />
      </SearchWrapper>
      
      <StickyBox>
      <Body>
        <List
          title='Talvez você curta'
          elements={[
            <FollowSugestion
              name="Eros Dogs"
              nickname="@erodogo"
            />,
            <FollowSugestion
              name="Luke Morales"
              nickname="@lukemorales"
            />,
            <FollowSugestion
              name="Camila Ferreira"
              nickname="@camilaferreira"
            />
          ]}
        />

        <List
          title='O que está acontecendo'
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />

        <List
          title='O que está acontecendo'
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />

        <List
          title='O que está acontecendo'
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
      </Body>
      </StickyBox>
      
    </Container>
  );
}
 
export default SideBar;<></>