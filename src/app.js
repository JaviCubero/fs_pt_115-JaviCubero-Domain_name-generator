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

  // Obtención de la variable "domainList" que guardará en formato array todas las combinaciones de dominios existentes
  let domainList = pronoun.flatMap(pronoun =>
    adj.flatMap(adj =>
      noun.flatMap(noun =>
        end.map(end => `${pronoun}${adj}${noun}${end}`)
      )
    )
  )


  // Aquí comienza el DOM

  // Esta función saca por pantalla todos los dominios que tengan una terminación específica dentro de la variable "domainList" donde están todas las combinaciones almacenadas
  function domainClicked(options) {
    let specificDomains = document.getElementById("specificDomains"); // Busca el elemento HTML donde se mostrará el texto en base al ID
    specificDomains.innerHTML = ""; // Limpia el contenido previo del elemento

    let filteredDomains = [] // Esta variable almacena los dominios filtrados según su terminación

    switch (options) {
      case "com":
        filteredDomains = domainList.filter(com => com.endsWith(".com")); // Se guarda en filteredDomains todos los dominios que tienen la terminación .com
        break;
      case "inf":
        filteredDomains = domainList.filter(inf => inf.endsWith(".info")); // Se guarda en filteredDomains todos los dominios que tienen la terminación .info
        break;
      case "net":
        filteredDomains = domainList.filter(net => net.endsWith(".net")); // Se guarda en filteredDomains todos los dominios que tienen la terminación .net
        break;
      case "org":
        filteredDomains = domainList.filter(org => org.endsWith(".org")); // Se guarda en filteredDomains todos los dominios que tienen la terminación .org
        break;
      case "biz":
        filteredDomains = domainList.filter(biz => biz.endsWith(".biz")); // Se guarda en filteredDomains todos los dominios que tienen la terminación .biz
        break;
      case "edu":
        filteredDomains = domainList.filter(edu => edu.endsWith(".edu")); // Se guarda en filteredDomains todos los dominios que tienen la terminación .edu
        break;
    }

    // Crea un h5 a modo de subtítulo
    let newH = document.createElement("h5");
    newH.textContent = "Los dominios correspondientes a esta terminación son:";

    // Crea una lista para mostrar los dominios de forma ordenada
    let newList = document.createElement("ul");
    newList.classList.add("domain-list"); // Crea una clase para poder modificar el estilo de la nueva lista desde styless.css

    // Esta función crea un li para cada dominio dentro de la lista ul creada
    filteredDomains.forEach((domain) => {
      let listItem = document.createElement("li");
      listItem.textContent = domain;
      newList.appendChild(listItem);
    });

    // Añade el h5 y la lista creada al elemento HTML buscado al inicio de la función
    specificDomains.appendChild(newH);
    specificDomains.appendChild(newList);
  }

  // Busca todos los botones HTML que tengan el atributo "domain-option"
  let buttons = document.querySelectorAll("button[domain-option]");

  // Esta función espera a que se haga click en alguno de los botones para ser ejecutada
  buttons.forEach(button => button.addEventListener('click', () => {
    let domainOption = button.getAttribute("domain-option"); // Se guarda el valor del botón que ha sido clickado en la variable domainOption
    domainClicked(domainOption); // Ejecuta la función domainClicked pasándole el valor del botón que se ha sido presionado
  }));
};