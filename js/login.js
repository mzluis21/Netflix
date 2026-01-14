const form = document.getElementById("loginForm");
const msg = document.getElementById("erro");
const texto = document.getElementById("texto");
const container = document.getElementById("loginContainer");

let timer;

function mostrarMensagem(tipo, mensagem) {
  clearTimeout(timer);

  // Reset
  msg.className = "mensagem";
  void msg.offsetWidth; // reinicia animação

  texto.innerText = mensagem;
  msg.classList.add(tipo);

  // Blur fundo
  container.classList.add("blur");

  // Auto fechar
  timer = setTimeout(() => {
    msg.className = "mensagem";
    container.classList.remove("blur");
  }, 3000);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (email === "" || senha === "") {
    mostrarMensagem("erro", "Preencha todos os campos.");
    return;
  }

  if (senha.length < 6) {
    mostrarMensagem("erro", "Senha muito curta.");
    return;
  }

  mostrarMensagem("sucesso", "Login confirmado com sucesso!");
});


function mostrarMensagem(tipo, texto) {
  const msg = document.getElementById("erro");

  msg.className = "mensagem";
  void msg.offsetWidth; // reinicia animação

  msg.innerText = texto;
  msg.classList.add(tipo);
}
