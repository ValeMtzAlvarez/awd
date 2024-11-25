const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Your limitation—it's only your imagination.",
    "Dream it. Wish it. Do it."
  ];
  
  const button = document.getElementById("dareButton");
  const quoteElement = document.getElementById("quote");
  let interval;
  
  // Function to display a random quote
  const showRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
  
    // Add fade-in effect
    quoteElement.style.opacity = 0; // Start fade-out
    setTimeout(() => {
      quoteElement.style.opacity = 1; // Fade-in
    }, 50);
  };
  
  // Button click event to start changing quotes
  button.addEventListener("click", () => {
    quoteElement.style.display = "block";
    showRandomQuote();
  
    // Start the interval to change quotes every 3 seconds
    if (!interval) {
      interval = setInterval(showRandomQuote, 3000); // Change quote every 3 seconds
    }
  });
  