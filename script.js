document.addEventListener('DOMContentLoaded', function() {
    // 언어 선택 기능 (변경 없음)
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const language = this.value;
            if (language === 'en') {
                window.location.href = 'https://bamboostreet.github.io/portfolio/'; // 영어 페이지 URL
            } else if (language === 'kr') {
                window.location.href = 'https://bamboostreet.github.io/portfolio_KR/'; // 한국어 페이지 URL
            } else {
                window.location.href = 'https://bamboostreet.github.io/portfolio_JPN/'; // 일본어 페이지 URL
            }
        });
    }

    // 수정된 카드 기능
    const cardContents = document.querySelectorAll('.card-content');
    
    cardContents.forEach(cardContent => {
        cardContent.addEventListener('mouseenter', function() {
            const reveal = this.querySelector('.card-reveal');
            if (reveal) {
                const revealHeight = reveal.offsetHeight;
                this.style.paddingBottom = `${revealHeight}px`;
                reveal.style.transform = 'translateY(0)';
            }
        });
        
        cardContent.addEventListener('mouseleave', function() {
            const reveal = this.querySelector('.card-reveal');
            if (reveal) {
                this.style.paddingBottom = '';
                reveal.style.transform = 'translateY(100%)';
            }
        });
    });
});