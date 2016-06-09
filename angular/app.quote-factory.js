app.factory('QuoteFactory', [quoteStorage])

  function quoteStorage(){
    var quotes = {};
    quotes.inspiration = ["You choose.", "What do you mean by that?"]
    console.log(quotes)
    return quotes;
  }