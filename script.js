let quoteText = document.getElementById("quote").innerText
let authorText = document.getElementById("author").innerText
let btnQuote = document.getElementById("btnQuote")

let quotesArray = [
    'Be the chief but never the lord.',
    'You can observe a lot just by watching.',
    'Self-complacency is fatal to progress.',
    'Difficulties increase the nearer we get to the goal.',
    'Nothing happens unless first we dream.',
    'Life is change. Growth is optional. Choose wisely.',
    'We can only learn to love by loving.',
    'Peace comes from within. Do not seek it without.',
    'Life is a learning experience, only if you learn.',
    "You'll see it when you believe it.",
    'Fate is in your hands and no one elses',
    'What you give is what you get.',
    'Today is the tomorrow we worried about yesterday.',
    "You'll see it when you believe it"
]

let authorArray = [
    'Margaret Sangster',
    'Yogi Berra',
    'Aristotle',
    'Johann Wolfgang von Goethe',
    'Wayne Dyer',
    'Buddha',
    'Iris Murdoch',
    'Byron Pulsifer',
    'Carl Sandburg',
    'Abraham Lincoln',
    'Thomas Edison',
    'Karen Clark',
    'Lao Tzu',
]

btnQuote.addEventListener('click', () => {
    // Generate a random index to pick a quote from the array
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    let randomAuthorIndex = Math.floor(Math.random() * authorArray.length);
    
    // Get the quote using the random index
    let randomQuote = quotesArray[randomIndex];
    let randomAuthor = authorArray[randomAuthorIndex];  

    // Update the inner HTML of the "quote" element
    document.getElementById("quote").innerHTML = randomQuote;
    document.getElementById("author").innerHTML = randomAuthor;
})