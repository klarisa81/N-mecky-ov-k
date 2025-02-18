 (function setupLightbox() {
        document.querySelectorAll('.img-grid img').forEach(img => {
            img.addEventListener('click', () => {
                const lightbox = document.createElement('div');
                lightbox.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                `;

                const imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    border: 5px solid white;
                `;

                lightbox.appendChild(imgElement);
                document.body.appendChild(lightbox);

                lightbox.addEventListener('click', () => {
                    lightbox.remove();
                });
            });
        });
    })();

    
    (function setupPageLoadAnimation() {
        window.addEventListener('load', () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transition = 'opacity 1s ease';
                setTimeout(() => section.style.opacity = '1', 500);
            });
        });
    })();

    
    (function setupModal() {
        document.querySelector('#zjistitVice').addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.textContent = 'Německý ovčák je symbolem oddanosti, inteligence a síly. Je to pes, který vás bude chránit a stát při vás za všech okolností.';
            modal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                background-color: white;
                border: 2px solid black;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 1000;
            `;

            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 999;
            `;

            document.body.appendChild(overlay);
            document.body.appendChild(modal);

            overlay.addEventListener('click', () => {
                modal.remove();
                overlay.remove();
            });
        });
    })();

    
    (function setupScrollTopButton() {
        const scrollTopButton = document.getElementById('scrollTop');

        window.addEventListener('scroll', () => {
            scrollTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();

    
    (function setupActivityGuessGame() {
        const activities = ["Aportování míčku", "Běhání v lese", "Hraní s dětmi", "Hlídání domu"];
        const chosenActivity = activities[Math.floor(Math.random() * activities.length)];
        let attempts = 3;

        const submitButton = document.getElementById('submitGuess');
        const resultElement = document.getElementById('activityResult');

        if (submitButton && resultElement) {
            submitButton.addEventListener('click', () => {
                const userGuess = document.getElementById('userGuess').value;

                if (userGuess.toLowerCase() === chosenActivity.toLowerCase()) {
                    resultElement.textContent = `Gratulujeme! Uhodli jste správně: ${chosenActivity}.`;
                    resultElement.style.color = 'green';
                } else {
                    attempts--;
                    if (attempts > 0) {
                        resultElement.textContent = `Nesprávné. Zbývají ${attempts} pokusy.`;
                        resultElement.style.color = 'orange';
                    } else {
                        resultElement.textContent = `Bohužel, neuhodli jste. Správná odpověď byla: ${chosenActivity}.`;
                        resultElement.style.color = 'red';
                    }
                }
            });
        }
    })();

   
    (function setupLearnMoreToggle() {
        document.getElementById('learnMore').addEventListener('click', () => {
            const facts = document.getElementById('interestingFacts');
            facts.style.display = facts.style.display === 'none' || !facts.style.display ? 'block' : 'none';
        });
    })();

    
    (function setupHoverEffects() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.color = '#ff6347';
                link.style.transform = 'scale(1.1)';
                link.style.transition = 'all 0.3s ease';
            });

            link.addEventListener('mouseleave', () => {
                link.style.color = 'white';
                link.style.transform = 'scale(1)';
            });
        });

        document.querySelectorAll('.img-grid img').forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.filter = 'sepia(1)';
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'all 0.3s ease';
            });

            img.addEventListener('mouseleave', () => {
                img.style.filter = 'sepia(0)';
                img.style.transform = 'scale(1)';
            });
        });
    })();
