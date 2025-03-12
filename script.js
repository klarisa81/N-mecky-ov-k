document.addEventListener('DOMContentLoaded', () => {
    // Výběr prvků z DOM
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const scrollTopButton = document.getElementById('scrollTop');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const passwordMessage = document.getElementById('password-message');
    const buttonZjistitVice = document.getElementById('zjistitVice');
    const zajimavostElement = document.getElementById('zajimavost');

    // Ovládání menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
        menuToggle.style.transform = 'rotate(90deg)';
        menuToggle.style.transition = 'transform 0.3s ease-in-out';
        setTimeout(() => {
            if (!navLinks.classList.contains('show')) {
                menuToggle.style.transform = 'rotate(0deg)';
            }
        }, 300);
    });

    // Přepínání tmavého režimu
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Zachování režimu po obnovení stránky
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }

    // Ovládání navigace při scrollování
    window.addEventListener('scroll', () => {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1000';
        if (window.scrollY > 50) {
            navbar.classList.add('fixed-navbar');
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.classList.remove('fixed-navbar');
            navbar.style.background = '';
        }

        // Zobrazení tlačítka zpět nahoru
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
            scrollTopButton.style.opacity = '1';
        } else {
            scrollTopButton.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    scrollTopButton.style.display = 'none';
                }
            }, 300);
        }
    });

    // Funkce tlačítka zpět nahoru
    scrollTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Kontrola shody hesel
    confirmPassword.addEventListener('input', () => {
        if (password.value !== confirmPassword.value) {
            passwordMessage.textContent = 'Hesla se neshodují!';
            passwordMessage.style.color = 'red';
            passwordMessage.style.transform = 'scale(1.1)';
            passwordMessage.style.transition = 'transform 0.2s ease-in-out';
        } else {
            passwordMessage.textContent = '';
            passwordMessage.style.transform = 'scale(1)';
        }
    });

    // Náhodná zajímavost o německém ovčákovi
    const zajimavosti = [
        "Je to pes pro zkušenějšího a sebevědomého majitele",
        "Má výborný vztah ke ‚svým‘ dětem a tak je vhodný i jako rodinný pes.",
        "Jeho majitel by měl mít rozhodně dostatek času na výcvik a práci s německým ovčákem, tento pes potřebuje vzhledem ke své inteligenci zaměstnat.",
        "Výchova vyrovnaného německého ovčáka ideální povahy vyžaduje důslednost a pevnou ruku optimálně zkušeného majitele již od štěněte.",
        "Může žít i v kotci, pokud bude vybaven zateplenou boudou a bude mít dostatečný kontakt se svým majitelem."
    ];

    // Zobrazení náhodné zajímavosti po kliknutí na tlačítko
    buttonZjistitVice.addEventListener('click', () => {
        const nahodnaZajimavost = zajimavosti[Math.floor(Math.random() * zajimavosti.length)];
        zajimavostElement.textContent = nahodnaZajimavost;
        zajimavostElement.style.display = 'block';
        zajimavostElement.style.opacity = '0';
        setTimeout(() => {
            zajimavostElement.style.opacity = '1';
            zajimavostElement.style.transition = 'opacity 0.5s ease-in-out';
        }, 100);

        buttonZjistitVice.style.transform = 'scale(1.1)';
        buttonZjistitVice.style.transition = 'transform 0.3s ease-in-out';
        setTimeout(() => {
            buttonZjistitVice.style.transform = 'scale(1)';
        }, 300);
    });
});


