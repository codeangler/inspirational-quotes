angular.module('quoteApp')
.controller('quoteController', qCtrl);

  qCtrl.$inject = ['QuoteFactory'];

  function qCtrl(QuoteFactory) {
    var qCtrl = this;
    qCtrl.author = "";
    qCtrl.quote = "";
    qCtrl.rating = "";
    qCtrl.quoteBlock = QuoteFactory;

    // Sort array returned from QuoteFactory 
    qCtrl.quoteBlock.sort(function(obj1, obj2){
        return obj1.rating - obj2.rating;
      });

    console.log(qCtrl.quoteBlock);

    // .push() new object 
    qCtrl.submitQuote = function(){
      qCtrl.quoteBlock.push({quote:qCtrl.quote, author:qCtrl.author, rating:qCtrl.rating})
      qCtrl.quoteBlock.sort(function(obj1, obj2){
        return obj1.rating - obj2.rating;
      });
      qCtrl.author = "";
      qCtrl.quote = "";
      qCtrl.rating = "";
      console.log(qCtrl.quoteBlock)
    }

    // Delete Array item at $index
    qCtrl.deleteQuote = function($puppy){
      var toDelete = qCtrl.quoteBlock[$puppy];
      console.log(toDelete);
      qCtrl.quoteBlock.splice($puppy,1);
    }

    // Btn Hover on in and out for each quote
    qCtrl.hoverIn = function(){
      this.hoverEdit = true;
    }
    qCtrl.hoverOut = function(){
      this.hoverEdit = false;
    }

    // Report quoteBlock Array with button click to console
    qCtrl.quoteArr = function(){
      console.log(qCtrl.quoteBlock);
    }
  }