document.addEventListener('DOMContentLoaded', () => {
  const toggleCheckbox = document.getElementById('dark-mode-toggle');

  // 1. Verifica se já existe uma preferência salva no localStorage
  const temaSalvo = localStorage.getItem('tema');

  if (temaSalvo === 'dark') {
    toggleCheckbox.checked = true;
    document.body.classList.add('dark-theme');
  } else if (temaSalvo === 'light') {
    toggleCheckbox.checked = false;
    document.body.classList.remove('dark-theme');
  } else {
    // 2. Se não houver preferência salva, verifica o sistema operacional
    const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleCheckbox.checked = prefereEscuro;
    if (prefereEscuro) {
      document.body.classList.add('dark-theme');
    }
  }

  // 3. Escuta a mudança no botão (checkbox) e salva no localStorage
  toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('tema', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('tema', 'light');
    }
  });
});document.addEventListener('DOMContentLoaded', () => {
  const toggleCheckbox = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;

  // Sincroniza o estado inicial do checkbox com a classe já aplicada no <html>
  if (htmlElement.classList.contains('dark-theme')) {
    toggleCheckbox.checked = true;
  }

  // Evento de clique para alternar o tema
  toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
      htmlElement.classList.add('dark-theme');
      localStorage.setItem('tema', 'dark');
    } else {
      htmlElement.classList.remove('dark-theme');
      localStorage.setItem('tema', 'light');
    }
  });
});document.addEventListener('DOMContentLoaded', () => {
  // ... seu código do modo escuro aqui ...

  // Lógica para mostrar/esconder o campo do LinkedIn
  const btnLinkedin = document.getElementById('btn-mostrar-linkedin');
  const containerLinkedin = document.getElementById('container-linkedin');
  
  if (btnLinkedin && containerLinkedin) {
    btnLinkedin.addEventListener('click', () => {
      // Alterna entre mostrar (block) e esconder (none)
      if (containerLinkedin.style.display === 'none') {
        containerLinkedin.style.display = 'block';
        btnLinkedin.innerHTML = '<i class="fa-solid fa-xmark"></i> Ocultar LinkedIn';
      } else {
        containerLinkedin.style.display = 'none';
        btnLinkedin.innerHTML = '<i class="fa-brands fa-linkedin"></i> Adicionar meu LinkedIn';
        // Opcional: limpa o campo se o usuário ocultar
        document.getElementById('url-linkedin').value = '';
      }
    });
  }
});