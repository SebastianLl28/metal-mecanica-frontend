import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    vertical-align: baseline;
  }

  img, picture, video, iframe, figure {
    max-width: 100%;
    width: 100%;
    display: block;
    -o-object-fit: cover;
      object-fit: cover;
    -o-object-position: center center;
      object-position: center center;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  p a {
    display: inline;
  }

  li {
    list-style-type: none;
  }


  html {
    scroll-behavior: smooth;
  }


  h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
    font-size: 1em;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color: inherit;
  }


  form, input, textarea, select, button, label {
    font-family: inherit;
    font-size: inherit;
    -webkit-hyphens: auto;
        -ms-hyphens: auto;
            hyphens: auto;
    background-color: transparent;
    color: inherit;
    display: block;
  }

  table, tr, td {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    min-height: 100vh;
    font-size: 100%;
    background-color: #fbfbfb;
    font-family: Helvetica, Arial, sans-serif;
  }
`

export default GlobalStyle
