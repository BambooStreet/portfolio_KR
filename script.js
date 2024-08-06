document.addEventListener('DOMContentLoaded', function() {
    // 언어 선택 기능 (변경 없음)
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const language = this.value;
            if (language === 'en') {
                window.location.href = 'https://bamboostreet.github.io/portfolio/';
            } else if (language === 'kr') {
                window.location.href = 'https://bamboostreet.github.io/portfolio_KR/';
            } else {
                window.location.href = 'https://bamboostreet.github.io/portfolio_JPN/';
            }
        });
    }

    // 수정된 카드 기능
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const reveal = this.querySelector('.card-reveal');
            if (reveal) {
                const revealHeight = reveal.offsetHeight;
                this.classList.add('active');
                this.style.marginBottom = `${revealHeight + 16}px`; // 16px는 기존 여백

                // 아래의 모든 카드들을 아래로 이동
                let nextCard = this.nextElementSibling;
                while (nextCard) {
                    nextCard.style.transform = `translateY(${revealHeight}px)`;
                    nextCard = nextCard.nextElementSibling;
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const reveal = this.querySelector('.card-reveal');
            if (reveal) {
                this.classList.remove('active');
                this.style.marginBottom = '';

                // 아래의 모든 카드들을 원위치로
                let nextCard = this.nextElementSibling;
                while (nextCard) {
                    nextCard.style.transform = '';
                    nextCard = nextCard.nextElementSibling;
                }
            }
        });
    });
});