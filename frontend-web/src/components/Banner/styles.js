import styled from 'styled-components';

import backgroundbanner from '~/assets/images/background-banner.svg';

export const Container = styled.div`
  text-align: center;
  padding: 100px 0px;

  background-image: url(${backgroundbanner});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: repeat;
  background-position: center;

  h1 {
    font-size: 2.5rem;
    color: #fff;
  }
`;
