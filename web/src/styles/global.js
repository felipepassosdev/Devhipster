
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

/* * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
} */

html,
body,
#root {
  height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: rgb(11, 10, 13) !important;
  /* background-image: url(bg.png); */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


    .bg-gradiente {
  background: linear-gradient(to right, rgb(240, 0, 80), rgb(255, 115, 80));
}

.text-vermelho {
  color: rgb(240, 0, 80);
}

.x {
  height: 400px;
  width: 400px;
  background: linear-gradient(to right, rgb(240, 0, 80), rgb(255, 115, 80));
}

.card {
  min-height: 376px;
}

.img-fluid {
  width: 308px;
  height: 308px !important;
}

.col-md-4-col-sm-1 {
  padding-bottom: 34px;
}

.dark {
  background: rgb(17, 17, 22);
}

h2 {
  font-size: 1.9rem !important;
}

footer {
  padding-bottom: 3px;
}

.bg-laranja {
  background: linear-gradient(to right, rgb(240, 0, 80), rgb(255, 115, 80));
}

.margin-bottom {
  margin-bottom: 35px;
}

button{
  width: 100%;
}

.dark {
  background: rgb(17, 17, 22) !important;
}

.yellow:hover {
    transform: translateY(-7px);
    border-color: #ffdb58;
}

.btn-yellow {
  background-color:  #ffdb58 !important;
}

.yellow {
  color:  #ffdb58 !important;
}

.btn-blue {
  background-color:  rgb(17, 208, 241) !important;
}

.blue {
  color:  rgb(17, 208, 241) !important;
}

.btn-green {
  background-color:  #8cc84b!important;
}

.green {
 color:  #8cc84b!important;
}

.blue:hover {
  transform: translateY(-7px);
  border-color: rgb(17, 208, 241);
}

.green:hover {
  transform: translateY(-7px);
  border-color: rgb(16, 119, 33);
}

.card {
  width: 100%;
    max-width: 1426px;
    padding: 30px;
}
`;
