document.addEventListener('DOMContentLoaded', () => {
  // --- LÓGICA DO MODO ESCURO ---
  const btnToggleTema = document.getElementById('btn-toggle-tema');
  const htmlElement = document.documentElement;

  if (btnToggleTema) {
    btnToggleTema.addEventListener('click', () => {
      htmlElement.classList.toggle('dark-theme');
      
      if (htmlElement.classList.contains('dark-theme')) {
        localStorage.setItem('tema', 'dark');
      } else {
        localStorage.setItem('tema', 'light');
      }
    });
  }

  // --- LÓGICA DO BOTAO DE LINKEDIN ---
  const btnLinkedin = document.getElementById('btn-mostrar-linkedin');
  const containerLinkedin = document.getElementById('container-linkedin');
  
  if (btnLinkedin && containerLinkedin) {
    btnLinkedin.addEventListener('click', () => {
      if (containerLinkedin.style.display === 'none') {
        containerLinkedin.style.display = 'block';
        btnLinkedin.innerHTML = '<i class="fa-solid fa-xmark"></i> Ocultar LinkedIn';
      } else {
        containerLinkedin.style.display = 'none';
        btnLinkedin.innerHTML = '<i class="fa-brands fa-linkedin"></i> Adicionar meu LinkedIn';
        document.getElementById('url-linkedin').value = '';
      }
    });
  }

  // --- VALIDAÇÃO DO LINKEDIN NO ENVIO DO FORMULÁRIO ---
  const formulario = document.querySelector('.formulario-contato');
  const inputLinkedin = document.getElementById('url-linkedin');

  if (formulario && inputLinkedin) {
    formulario.addEventListener('submit', (event) => {
      const urlDigitada = inputLinkedin.value.trim();

      if (urlDigitada.length > 0) {
        const regexLinkedIn = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_\/]+$/i;

        if (!regexLinkedIn.test(urlDigitada)) {
          event.preventDefault();
          alert('Por favor, insira uma URL válida do LinkedIn (ex: linkedin.com/in/seu-nome)');
          inputLinkedin.focus();
        }
      }
    });
  }
});