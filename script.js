document.addEventListener('DOMContentLoaded', () => {
    const rizzyTextElement = document.getElementById('rizzy-text');

    const rizzyTexts = [
        'Bold Move', 'Stay Classy', 'Dream Big', 'Chill Vibes', 'Epic Journey',
        'Fresh Start', 'Game On', 'High Hopes', 'Infinite Loop', 'Just Breathe',
        'Keep Going', 'Limitless Sky', 'Magic Hour', 'No Regrets', 'On Point',
        'Pure Bliss', 'Quick Wit', 'Rise Up', 'Stay True', 'Think Big'
    ];

    const fetchRizzyText = () => {
        const randomIndex = Math.floor(Math.random() * rizzyTexts.length);
        rizzyTextElement.textContent = rizzyTexts[randomIndex];
    };

    // Display initial rizzy text on page load
    fetchRizzyText();
});