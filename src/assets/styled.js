import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: 'Poppins', sans-serif !important;
  }
`

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 10vh;
  background: white;
  box-shadow: 1px 1px 7px 0px #02020261;
  margin-bottom: 15px;
  h4 {
    font-size: 30px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    font-size: 22px;
  }
  a + a{
    padding-left: 15px;
  }
`;

export const Page = styled.div`
  padding: 50px;
`;