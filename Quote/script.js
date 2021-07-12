let currentQuote = "";
let currentAuthor = "";
let rand = -1;

/* quote bank */
const quoteData = [
  {
    quote: 'Our lives improve only when we take chances - and the first and most difficult risk we can take is to be honest with ourselves.',
    author: 'Walter Anderson'
  },
  {
    quote: 'It is impossible to go through life without trust: That is to be imprisoned in the worst cell of all, oneself.',
    author: 'Graham Greene'
  },
  {
    quote: 'The moment a man stops dreaming is the moment he petrifies inside...',
    author: 'Roger Ebert'
  },
  {
    quote: 'To accomplish great things we must not only act, but also dream; not only plan, but also believe.',
    author: 'Anatole France'
  },
  {
    quote: 'Remember that happiness is a way of travel - not a destination.',
    author: 'Roy M. Goodman'
  },
  {
    quote: 'The great thing in this world is not so much where you stand, as in what direction you are moving.',
    author: 'Oliver Wendell Holmes'
  },
  {
    quote: 'Where is there dignity unless there is honesty?',
    author: 'Cicero'
  },
  {
    quote: 'I would rather be accused of breaking precedents than breaking promises.',
    author: 'John F. Kennedy'
  },
];


$(document).ready(function () {
  getQuote();

});

function getQuote() {
  rand += Math.ceil(Math.random() * (quoteData.length - 1));
  rand %= quoteData.length;
  currentQuote = quoteData[rand].quote;
  currentAuthor = quoteData[rand].author;
  $("#text").text(currentQuote);
  $("#author").text(currentAuthor);
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
};