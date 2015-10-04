# Javascript guideline

## Table of Contents

* [Coffee or not?](#coffee-or-not)
* [Code style](#code-style)
* [Lint tools](#lint-tools)
* [Testing](#testing)
* [Frameworks and tools](#frameworks-and-tools)
* Design patterns
* [Resources](#resources)

## Coffee or not?

After everything, CoffeeScript is for people who hate JavaScript. JavaScript warts should be avoided by education and understanding of the core language, not by simply ignoring them and cool features like how CoffeeScript handles Classes, or even loops, can easily be fixed with a much smaller codebase with no need to compile by using a simple homebrewed library or something like underscore.js, jQuery, etc.

**[⬆ back to top](#table-of-contents)**

## Code style

Currently we use [ES5 Vizzuality's code style](https://github.com/Vizzuality/workflow-style-guide/blob/master/javascript/es5.md).

### About ECMAScript 6

* [ES5 Compatibility table](http://kangax.github.io/compat-table/es5/)
* [ES6 Compatibility table](http://kangax.github.io/compat-table/es6/)

Current support for ES6 is quite limited and a lot of the ES6 spec is still in draft form.  We can look forward to these features (and much more) in the near future, but I wouldn’t recommend using them now.

Otherwhise, to practice and use ES6 the best tool is [Babel.js](https://babeljs.io/) (a JavaScript compiler).

Some ES6 references:

* [ES6 Features](http://es6-features.org/)
* [ES6 in Depth series](http://ponyfoo.com/articles/tagged/es6-in-depth)

**[⬆ back to top](#table-of-contents)**

# Lint tools

I recommend use these tools in all projects. They help us to detect errors and potential problems in code.

* [JSHint](http://www.jshint.com/) - [Vizzuality Style .jshintrc](https://github.com/Vizzuality/workflow-style-guide/blob/master/javascript/files/.jshintrc)
* [JSCS](https://github.com/jscs-dev/node-jscs) - [Vizzuality Style .jscsrc](https://github.com/Vizzuality/workflow-style-guide/blob/master/javascript/files/.jscsrc)

**[⬆ back to top](#table-of-contents)**

# Testing

For testing we use [Mocha](http://mochajs.org/). It is a feature-rich JavaScript test framework running on node and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

**Configuring test**:

    // package.json
    ...
    "scripts": {
        "test": "node_modules/.bin/mocha"
    }
    ...
    "devDependencies": {
       "mocha": "^2.2.5",
       "chai": "^3.0.0"
    }
    ...

Install dependencies with `npm install`.

**Creating a test case**:

    describe('addition', function () {
        it('should add 1+1 correctly', function (done) {
            var onePlusOne = 1 + 1;
            expect(onePlusOne).to.be.equal(2);
            // must call done() so that mocha know that we are... done.
            // Useful for async tests.
            done();
        });
    });

**Running test with node**:

    npm test

    // Result
    addition
    ✓ should add 1+1 correctly
    ✔ 1 test complete (3ms)

**Test directory and file structure**:

    /test
        /specs
            router_spec.js
            /views
            	map_view_spec.js
        /helpers
            some_helper.js
        index.html // to run in browser

**Other useful tools**:

* [Chai](http://chaijs.com/) is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [Sinon](http://sinonjs.org/) Standalone test spies, stubs and mocks for JavaScript.
* [Teaspoon](https://github.com/modeset/teaspoon) Front end test gem for rails projects.

**Tutorials**:

* [Backbone Chai Gist](https://gist.github.com/michaelcox/3800736)
* [Mocha + Chai + Sinon](https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/)
* [Node Js and Chai](http://code.tutsplus.com/tutorials/testing-in-nodejs--net-35018)

**[⬆ back to top](#table-of-contents)**

# Frameworks and tools

* **[Backbone.js](http://backbonejs.org/)** gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface. [Example and file structure](https://github.com/Vizzuality/workflow-style-guide/blob/master/examples/backbone-way).

* **[Rails](http://backbonejs.org/)** is the most well thought-out web development framework I've ever used. Before Ruby on Rails, web programming required a lot of verbiage, steps and time. After researching the market, Ruby on Rails stood out as the best choice. [Example and file structure](https://github.com/Vizzuality/workflow-style-guide/blob/master/examples/rails-way).

**Front end dependencies manager**

* [Bower](http://bower.io/): Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you. **We're not going to use it for Rails applications**.
* [Rails assets](https://rails-assets.org/). It automatically converts the packaged components into gems that are easily droppable into your asset pipeline and stay up to date. **We only use it for Rails applications**


**Task runner**

* [Grunt](http://gruntjs.com/): Automation, performing repetitive tasks like minification, compilation, unit testing and linting. **We're not going to use it for Rails applications**.


**Modules loader**

* [Require.js](http://requirejs.org/) is a must. It is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.

* [Webpack](http://webpack.github.io/) is a module bundler. This means webpack takes modules with dependencies and emits static assets representing those modules.

**[⬆ back to top](#table-of-contents)**

## Resources

### Performance

  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)

### Further Reading

  - [Understanding JavaScript Closures](http://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
  - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

### Books

  - [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](http://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](http://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](http://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](http://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](http://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](http://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](http://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/) - Julien Bouquillon
  - [Third Party JavaScript](http://manning.com/vinegar/) - Ben Vinegar and Anton Kovalyov
  - [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182) - David Herman
  - [Eloquent JavaScript](http://eloquentjavascript.net) - Marijn Haverbeke
  - [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - Kyle Simpson

### Blogs

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](http://weblog.bocoup.com/)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](http://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://net.tutsplus.com/?s=javascript)

### Podcasts

  - [JavaScript Jabber](http://devchat.tv/js-jabber/)


**[⬆ back to top](#table-of-contents)**
