# Javascript guideline

## Table of Contents

* [Coffee or not?](#coffee-or-not)
* [Code style](#code-style)
* [Testing](#testing)
* [Frameworks and tools](#frameworks-and-tools)
* [Resources](#resources)

## Coffee or not?

After everything, CoffeeScript is for people who hate JavaScript. JavaScript warts should be avoided by education and understanding of the core language, not by simply ignoring them and cool features like how CoffeeScript handles Classes, or even loops, can easily be fixed with a much smaller codebase with no need to compile by using a simple homebrewed library or something like underscore.js, jQuery, etc.

**[⬆ back to top](#table-of-contents)**

## Code style

By default we are going to use ES6 way.

* [Javascript ES5](./es5.md) (deprecated)
* [Javascript ES6](./es6.md)
* [React](./react.md)

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

* [React Mocha test](http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/)
* [Backbone Chai Gist](https://gist.github.com/michaelcox/3800736)
* [Mocha + Chai + Sinon](https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/)
* [Node Js and Chai](http://code.tutsplus.com/tutorials/testing-in-nodejs--net-35018)

**[⬆ back to top](#table-of-contents)**

# Frameworks and tools

* **[Redux](https://facebook.github.io/react/)** is a predictable state container for JavaScript apps.

* **[React.js](http://backbonejs.org/)** makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

* **[Backbone.js](http://backbonejs.org/)** gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.

* **[Rails](http://backbonejs.org/)** is the most well thought-out web development framework I've ever used. Before Ruby on Rails, web programming required a lot of verbiage, steps and time. After researching the market, Ruby on Rails stood out as the best choice.

**Front end dependencies manager**

* [Browserify](http://browserify.org): Browserify lets you require('modules') in the browser by bundling up all of your dependencies. **We're not going to use it in Rails applications**.

* [Rails assets](https://rails-assets.org/). It automatically converts the packaged components into gems that are easily droppable into your asset pipeline and stay up to date. **We only use it in Rails applications**


**Task runner**

* [Grunt](http://gruntjs.com/): Automation, performing repetitive tasks like minification, compilation, unit testing and linting. **We're not going to use it for Rails applications**.


**Modules loader**

* [Webpack](http://webpack.github.io/) is a module bundler. This means webpack takes modules with dependencies and emits static assets representing those modules.

**[⬆ back to top](#table-of-contents)**

## Resources

**Learning ES6**

  - [Draft ECMA 2015 (ES6) Spec](https://people.mozilla.org/~jorendorff/es6-draft.html)
  - [ExploringJS](http://exploringjs.com/)
  - [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
  - [Comprehensive Overview of ES6 Features](http://es6-features.org/)

**Read This**

  - [Standard ECMA-262](http://www.ecma-international.org/ecma-262/6.0/index.html)

**Tools**

  - Code Style Linters
    + [ESlint](http://eslint.org/) - [Airbnb Style .eslintrc](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc)
    + [JSHint](http://jshint.com/) - [Airbnb Style .jshintrc](https://github.com/airbnb/javascript/blob/master/linters/.jshintrc)
    + [JSCS](https://github.com/jscs-dev/node-jscs) - [Airbnb Style Preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json)

**Other Style Guides**

  - [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
  - [jQuery Core Style Guidelines](https://contribute.jquery.org/style-guide/js/)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

**Other Styles**

  - [Naming this in nested functions](https://gist.github.com/cjohansen/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52) - Ross Allen
  - [Popular JavaScript Coding Conventions on Github](http://sideeffect.kr/popularconvention/#javascript) - JeongHoon Byun
  - [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) - Ben Alman

**Further Reading**

  - [Understanding JavaScript Closures](https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
  - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

**Books**

  - [JavaScript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](https://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](https://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](https://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](https://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](https://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](https://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/) - Julien Bouquillon
  - [Third Party JavaScript](https://www.manning.com/books/third-party-javascript) - Ben Vinegar and Anton Kovalyov
  - [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182) - David Herman
  - [Eloquent JavaScript](http://eloquentjavascript.net/) - Marijn Haverbeke
  - [You Don't Know JS: ES6 & Beyond](http://shop.oreilly.com/product/0636920033769.do) - Kyle Simpson

**Blogs**

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](https://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](https://bocoup.com/weblog)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](https://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://code.tutsplus.com/?s=javascript)

**Podcasts**

  - [JavaScript Air](https://javascriptair.com/)
  - [JavaScript Jabber](https://devchat.tv/js-jabber/)

**[⬆ back to top](#table-of-contents)**
