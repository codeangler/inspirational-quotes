angular.module('quoteApp')
.controller('quoteController', qCtrl);

  qCtrl.$inject = ['QuoteFactory'];

  function qCtrl(QuoteFactory) {
    var qCtrl = this;
    qCtrl.author = "";
    qCtrl.quote = "";
    qCtrl.rating = "";
    qCtrl.quoteBlock = QuoteFactory;
    console.log(qCtrl.quoteBlock);

    qCtrl.submitQuote = function(){
      qCtrl.quoteBlock.push({quote:qCtrl.quote, author:qCtrl.author, rating:qCtrl.rating})
      qCtrl.author = "";
      qCtrl.quote = "";
      qCtrl.rating = "";
      console.log(qCtrl.quoteBlock)
    }

    qCtrl.quoteArr = function(){
      console.log(qCtrl.quoteBlock);
    }
  }