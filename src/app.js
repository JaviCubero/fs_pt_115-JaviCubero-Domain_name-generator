import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = ['.com', '.info', '.net', '.org', '.biz', '.edu'];

  let domain = pronoun.flatMap(pronoun =>
    adj.flatMap(adj =>
      noun.flatMap(noun =>
        end.map(end => `${pronoun}${adj}${noun}${end}`)
      )
    )
  )

  console.log(domain);

};