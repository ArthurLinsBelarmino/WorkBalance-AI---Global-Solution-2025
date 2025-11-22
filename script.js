const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        this.classList.toggle('active-acc');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const msg = document.getElementById('mensagem');

        document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

        if (nome.value.length < 3) {
            showError(nome, 'Nome deve ter no mínimo 3 caracteres.');
            valid = false;
        }
        if (!email.value.includes('@') || !email.value.includes('.')) {
            showError(email, 'Insira um e-mail válido.');
            valid = false;
        }
        if (msg.value.length < 10) {
            showError(msg, 'Sua mensagem é muito curta.');
            valid = false;
        }

        if (valid) {
            alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato.');
            form.reset();
        }
    });
}

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.innerText = message;
    errorSpan.style.display = 'block';
}

function updateDashboard(metric) {
    const contentTitle = document.getElementById('dash-title');
    const contentData = document.getElementById('dash-data');

    document.querySelectorAll('.dash-menu-item').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');

    if (metric === 'bem-estar') {
        contentTitle.innerText = 'Análise de Bem-Estar da Equipe';
        contentData.innerHTML = `
            <div class="stat-box">Nível de Stress Médio: <span style="color:green">Baixo (12%)</span></div>
            <div class="stat-box">Satisfação Semanal: 4.8/5.0</div>
            <p>A IA detectou que a equipe está com boa energia hoje. Nenhuma intervenção necessária.</p>
        `;
    } else if (metric === 'produtividade') {
        contentTitle.innerText = 'Métricas de Produtividade';
        contentData.innerHTML = `
            <div class="stat-box">Tarefas Concluídas: 142</div>
            <div class="stat-box">Foco Médio: 3h 40m sem interrupções</div>
            <p>Pico de produtividade identificado entre 09:00 e 11:00.</p>
        `;
    } else if (metric === 'pausas') {
        contentTitle.innerText = 'Gerenciamento de Pausas';
        contentData.innerHTML = `
            <div class="stat-box">Pausas Sugeridas pela IA: 15</div>
            <div class="stat-box">Pausas Aceitas: 12</div>
            <p>O sistema sugeriu pausas ativas para 3 colaboradores que apresentaram sinais de fadiga visual.</p>
        `;
    }
}