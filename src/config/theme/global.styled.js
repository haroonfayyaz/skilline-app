import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{

        font-size:${({ theme }) => theme.colors.baseFontSize};
        font-weight:400;
        line-height:normal;
        font-family: 'Poppins', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:700;
    }
    img{
        max-width:100%;
    }
`
export default GlobalStyles;
