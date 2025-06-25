import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  // Definición de los arrays mediante los cuales se harán las combinaciones
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = ['.com', '.info', '.net', '.org', '.biz', '.edu'];

  // Obtención de la variable "domain" que guardará en formato array todas las combinaciones de dominios existentes
  let domain = pronoun.flatMap(pronoun =>
    adj.flatMap(adj =>
      noun.flatMap(noun =>
        end.map(end => `${pronoun}${adj}${noun}${end}`)
      )
    )
  )

  
  // A partir de aquí empieza el DOM

  // Esta función saca por pantalla todos los dominios que tengan una terminación específica dentro de la variable "domain" donde están todas las combinaciones almacenadas
  function domainClicked(options) {
    let specificDomains = document.getElementById("specificDomains"); // Busca el elemento HTML donde se mostrará el texto en base al ID
    specificDomains.innerHTML = ""; // Limpia contenido previo del elemento

    let filteredDomains = [] // Esta variable almacena los dominios filtrados según su terminación

    switch (options) {
      case "com":
        filteredDomains = document.createTextNode(
          domain.filter(com => com.endsWith(".com")) // Se guarda en filteredDomains todos los dominios que tienen la terminación .com
        );
        break;
      case "inf":
        filteredDomains = document.createTextNode(
          domain.filter(inf => inf.endsWith(".info")) // Se guarda en filteredDomains todos los dominios que tienen la terminación .info
        );
        break;
      case "net":
        filteredDomains = document.createTextNode(
          domain.filter(net => net.endsWith(".net")) // Se guarda en filteredDomains todos los dominios que tienen la terminación .net
        );
        break;
      case "org":
        filteredDomains = document.createTextNode(
          domain.filter(org => org.endsWith(".org")) // Se guarda en filteredDomains todos los dominios que tienen la terminación .org
        );
        break;
      case "biz":
        filteredDomains = document.createTextNode(
          domain.filter(biz => biz.endsWith(".biz")) // Se guarda en filteredDomains todos los dominios que tienen la terminación .biz
        );
        break;
      case "edu":
        filteredDomains = document.createTextNode(
          domain.filter(edu => edu.endsWith(".edu")) // Se guarda en filteredDomains todos los dominios que tienen la terminación .edu
        );
        break;
    }

    let newP = document.createElement("p"); // Crea un párrafo nuevo
    newP.appendChild(filteredDomains);  // Añade el texto almacenado en filteredDomain al párrafo creado  
    specificDomains.appendChild(newP); // Añade el párrafo creado al elemento HTML buscado al inicio de la función
  }

  let buttons = document.querySelectorAll("button[domain-option]"); // Busca todos los botones HTML que tengan el atributo "domain-option"

  buttons.forEach(button => button.addEventListener('click', () => { // Espera a que se haga click en alguno de los botones para ejecutar la función
    let domainOption = button.getAttribute("domain-option"); // Se guarda el valor del botón que ha sido clickado en la variable domainOption
    domainClicked(domainOption); // Ejecuta la función domainClicked pasándole el valor del botón que se ha sido presionado
  }));

};