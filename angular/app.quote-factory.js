angular.module('quoteApp')
.factory('QuoteFactory', quoteStorage)

  function quoteStorage(){
  //  see dummy data below
  // todo.items = [{name:"Gym", complete: false}, {name:"Tanning", complete: false}, {name:"Laundry", complete: false}]

    var quoteArray = [
      {
        quote: "Your mind will answer most questions if you learn to relax and wait for the answer.",
        author: "William S. Burroughs",
        rating: "5"
      },
      {
        quote: "Being ignorant is not so much a shame, as being unwilling to learn.",
        author: "Benjamin Franklin",
        rating:"4"
      },
      {
        quote: "I am still learning.",
        author: "Michelangelo",
        rating:"2"
      },
      {
        quote: "People often say that motivation doesn't last. Well, either does bathing - that's why we recommend it daily.",
        author: "Zig Ziglar",
        rating:"4"
      },
      {
        quote: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love",
        author: "Marcus Aurelius",
        rating:"1"
      }
    ]
    return quoteArray;
  }





  // var quoteObject = {
  // "cols": 
  // [
  //     "Author",
  //     "Quote",
  //     "Rating",
  // ],
  // "data": 
  // [
  //     [
  //         "Your mind will answer most questions if you learn to relax and wait for the answer.",
  //         "William S. Burroughs",
  //         "5"
  //     ],
  //     [
  //       "Being ignorant is not so much a shame, as being unwilling to learn.",
  //       "Benjamin Franklin",
  //       "5"
  //     ],
  //     [
  //       "I am still learning.",
  //       "Michelangelo",
  //       "5"
  //     ],
  //     [
  //       "People often say that motivation doesn't last. Well, either does bathing - that's why we recommend it daily.",
  //       "Zig Ziglar",
  //       "5"
  //     ],
  //     [
  //       "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love",
  //       "Marcus Aurelius",
  //       "5"
  //     ]
  // ]