# Understanding This context

This project ilustrates the different contexts for this keyword in nodejs. It's based on the exceltent article [Fully Understanding the this Keyword](http://net.tutsplus.com/tutorials/javascript-ajax/fully-understanding-the-this-keyword/) which I higly recommend reading. I also highly recommend the [MDN article on this keyword](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/this)  and for a complete understanding of prototype chain, the Yehuda Kat'z article [Understanding prototypes in javascript](http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/).

## tl;dr

As per ECMAScript, when _"this"_ is called outside of any function it references the global context. This situation is a little harder to exploit in node.js since all module calls are embedded in a function to protect the global scope.

