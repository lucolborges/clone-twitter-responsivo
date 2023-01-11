import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return ( 
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Lucas Borges</h1>
        <h2>@contato</h2>

        <p>
          Developer at <a href="@">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ipatinga, Minas Gerais
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de maio de 1989
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

    </Container>
  );
}
 
export default ProfilePage;