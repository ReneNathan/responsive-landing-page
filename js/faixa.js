const textosHTML = [
  '<img class="faixa_ico" src="img/icons/html.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/css.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/js.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/bootstrap.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/jquery.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/python.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/flask.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/git.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/github.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/c_sharp.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/mobile.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/sqlite.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/code.ico" alt="">',
  '<img class="faixa_ico" src="img/icons/studio.ico" alt="">'
];

const faixa = document.getElementById("faixa");

// Adiciona os itens com HTML
textosHTML.forEach(html => {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = html;
  faixa.appendChild(item);
});

// Duplica os itens para criar efeito contínuo
textosHTML.forEach(html => {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = html;
  faixa.appendChild(item);
});