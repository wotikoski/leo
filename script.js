// ============================================
// Gerenciamento de Tema (Claro/Escuro)
// ============================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;
const sunIcon = document.querySelector('.icon-sun');
const moonIcon = document.querySelector('.icon-moon');
const background = document.getElementById('background');

// Verificar preferência salva ou preferência do sistema
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    if (isDark) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

// Ativar modo escuro
function enableDarkMode() {
    body.classList.add('dark');
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateThemeIcons(true);
    updateBackground(true);
}

// Ativar modo claro
function enableLightMode() {
    body.classList.remove('dark');
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    updateThemeIcons(false);
    updateBackground(false);
}

// Atualizar ícones do tema
function updateThemeIcons(isDark) {
    if (isDark) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        themeToggle.title = 'Modo claro';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        themeToggle.title = 'Modo escuro';
    }
}

// Atualizar background baseado no tema
function updateBackground(isDark) {
    if (isDark) {
        background.style.backgroundImage = 'none';
    } else {
        background.style.backgroundImage = 'url(https://private-us-east-1.manuscdn.com/sessionFile/kUYhgpxWzHpmwnGIZPrGLB/sandbox/AEnZf0yti8GaAWbzxXTQ8V-img-1_1770559262000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1VZaGdweFd6SHBtd25HSVpQckdMQi9zYW5kYm94L0FFblpmMHl0aThHYUFXYnp4WFRROFYtaW1nLTFfMTc3MDU1OTI2MjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bnro5i30aMLRXsVvtpOi3QmJF-HWMlzi~lOKs9Ebg~lmqPetBvaLb3PD0YgOxVv3DnrnakHqkKTNQthGAlLP1gk8GFALrGrbuA7i4iJcs8WKX0308N7n4p~snH5m8PuK3uxKSupb1CvC8o30idGSzDYGTA5rFRzIMsmHQApat41~abud5EJkyUOcwCALv~rEkpnaNij57R-gdkcImW3aZipl5IMuCiZegsPwPkiF4atDpelpsH7Q0sibpxJDQXRCK4~yJCTh5frormqwqvPi0KMnshD4TnCzUZF~fHOFBfQcprY4znQxSaawLnxAx28Nlm7GzyJTv4fMkq5kZCnE1w__)';
    }
}

// Event Listener para botão de tema
themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark');
    if (isDark) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

// Monitorar mudanças na preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    }
});

// Inicializar tema ao carregar a página
document.addEventListener('DOMContentLoaded', initializeTheme);

// ============================================
// Smooth Scroll para Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Analytics (Opcional)
// ============================================

// Se você quiser adicionar Google Analytics ou similar, descomente e configure:
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_TRACKING_ID');
*/
