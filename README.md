### Adidas wishlist coding challenge

Hello and thank you for giving an opportunity to build this SPA. It was both challenging and exciting to work on this take-home project. Please read instructions on how to run and what to expect from this app.

----------


#### How to install

Before instlalling, make sure you have Node.js and npm installed on your PC/Mac, as this app is purely based on Node.

1. Download all files or clone from here to the desired directory on your computer.

2. Open terminal and **cd** to the directore where you just extracted all source files. E.g. ``` cd Documents/Adidas ```

3. Install all dependencies using npm ``` npm install ```

4. Finally run the app with gulp ``` gulp ```

5. That's it! Your app is run on http://127.0.0.1:3000 and API is on http://127.0.0.1:3001

#### About this app

This is a single page app that lets you to wishlist Adidas products. It first takes products from given Adidas API. For the sake of convenience, we store our wishlist using **json-server**, as it lets us manipulate data without a database.

The following is the stack of tools and dependencies used in this project.

 - Node Express JS as the foundation
 - React, React-Router, Redux - for object state manipulation, plus we use very handy tool **react-router**, as it replaces original routing by giving us the possibility to flawlessly go through pages within a SPA.
 - Babel and ES6 as it's a good manner to write JS in ES6 nowadays
 - Webpack for wrapping all js/css/img in pushing it to the browser
 - Axios for asynchronous API calling
 - Gulp for automation

**This is a private take-home interview coding project, it's not intended for third parties to be edited.**

Thank you and if you have any questions, please contact me on mangazbayev@gmail.com