angular.module('quoteApp')
.controller('quoteController', qCtrl);

  qCtrl.$inject = ['QuoteFactory'];

  function qCtrl(QuoteFactory) {
    var qCtrl = this;
    qCtrl.author = "";
    qCtrl.aquote = "";
    qCtrl.rating = "";
    qCtrl.quoteBlock = QuoteFactory;
    console.log(qCtrl.quoteBlock);

    qCtrl.submitQuote = function(){
      // qCtrl.quoteBlock.push({qCtrl.quote, qCtrl.author, qCtrl.rating})
      qCtrl.author = "";
      qCtrl.quote = "";
      qCtrl.rating = "";
      console.log(qCtrl.quoteBlock)

    }
  }