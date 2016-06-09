app.controller('quoteController', quoteCtrl);

  quoteCtrl.$inject = ['QuoteFactory'];

  function quoteCtrl(QuoteFactory) {
    var quoteCtrl = this;
    quoteCtrl.greeting = QuoteFactory;
  }