import styled from 'styled-components';

import backgroundbanner from '~/assets/images/background-banner.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 800px;
  height: 300px;

  background-image: url(${backgroundbanner});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: repeat;
  background-position: center;

  h1 {
    padding-top: 40px;
    font-size: 2.5rem;
    color: #fff;
  }

  span {
    padding: 20px 0px;
    width: 800px;
    font-size: 1.2rem;
    color: #fff;
    overflow-wrap: break-word;
  }
`;
