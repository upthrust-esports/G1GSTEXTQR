document.addEventListener('DOMContentLoaded', () => {
    const rizzyTextElement = document.getElementById('rizzy-text');

    const rizzyTexts = [
        "i’m jealous of your heart cuz it’s pumping inside of you and im not",
        "I just checked my schedule and I can have you pregnant by christmas",
        "i hope you brought your costco card cuz you’re ab to get dick in bulk",
        "are you a scientist cuz i wanna do u a table periodically",
        "heard u have good grades, hope this won’t hurt",
        "ik i’m not a dentist but i can give you a filling",
        "there has to be a mirror in your pant bc i see myself in them",
        "is your name winter? bc w me, u won’t be coming very soon",
        "are you abe lincoln cuz there’s an uprising down south",
        "do u like sushi cuz i have crabs",
        "wanna play barbies, i’ll be ken and u can be the box i come in",
        "I know a great way to burn off the calories in that drink.",
        "Let’s play Titanic. You’ll be the iceberg, and I’ll go down.",
        "How do you like your sausage; smoked or blown?",
        "The only heaven I’ll be sent to is when I’m alone with you.",
        "Is it hot in here, or is it just you?",
        "If looks could kill, you’d definitely be a heartbreaker.",
        "I must be a snowflake because I’ve fallen for you."
    ];

    const fetchRizzyText = () => {
        const randomIndex = Math.floor(Math.random() * rizzyTexts.length);
        rizzyTextElement.textContent = rizzyTexts[randomIndex];
    };

    // Display initial rizzy text on page load
    fetchRizzyText();
});