import { createGlobalStyle } from 'styled-components';
import { FontFamilies } from '../theme/DesignTokens';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
`
export default GlobalStyle;