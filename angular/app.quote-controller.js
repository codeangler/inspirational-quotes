app.controller('quoteController', qCtrl);

  qCtrl.$inject = ['QuoteFactory'];

  function qCtrl(QuoteFactory) {
    var qCtrl = this;
    qCtrl.greeting = "HI";
    qCtrl.eachQuote = QuoteFactory.data;

  }