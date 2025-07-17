
  const modal = document.getElementById("modalTransacao");
  const btnAbrir = document.querySelector(".btn-nova-transacao");
  const btnFechar = document.querySelector(".close-modal");
  const btnCancelar = document.getElementById("btnCancelar");
  const btnReceita = document.getElementById("btn-receita");
  const btnDespesa = document.getElementById("btn-despesa");

  // Abrir o modal
  btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Fechar o modal
  btnFechar.addEventListener("click", () => modal.style.display = "none");
  btnCancelar.addEventListener("click", () => modal.style.display = "none");

  // Alternar tipo de transação
  btnReceita.addEventListener("click", () => {
    btnReceita.classList.add("selected");
    btnDespesa.classList.remove("selected");
  });

  btnDespesa.addEventListener("click", () => {
    btnDespesa.classList.add("selected");
    btnReceita.classList.remove("selected");
  });

  // Fechar ao clicar fora do modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

