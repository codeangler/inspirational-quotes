app.factory('QuoteFactory', [quoteStorage])

  function quoteStorage(){
    var quoteObject = {
  "cols": 
  [
      "Author",
      "Quote",
      "Rating",
  ],
  "data": 
  [
      [
          "Your mind will answer most questions if you learn to relax and wait for the answer.",
          "William S. Burroughs",
          "5"
      ],
      [
        "Being ignorant is not so much a shame, as being unwilling to learn.",
        "Benjamin Franklin",
        "5"
      ],
      [
        "I am still learning.",
        "Michelangelo",
        "5"
      ],
      [
        "People often say that motivation doesn't last. Well, either does bathing - that's why we recommend it daily.",
        "Zig Ziglar",
        "5"
      ],
      [
        "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love",
        "Marcus Aurelius",
        "5"
      ]
  ]
}
    console.log(quoteObject)
    return quoteObject;
  }