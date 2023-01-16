import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return ( 
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Lucas Borges</h1>
        <h2>@contato</h2>

        <p>
          Developer at <a href="@">@Siteaki</a>
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

      <Feed />

    </Container>
  );
}
 
export default ProfilePage;