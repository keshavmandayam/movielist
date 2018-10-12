0. git init npm init -y
1. Copy three files on the webpack main page (src/index.js, src/bar.js, webpack.config.js)
2. ***Install webpack npm install webpack
3. ***npx webpack to run it. prompted to install webpck-cli, say yes (should now have dist bundle.js)
4. copy final file from webpack pack page.html file.
5. Confirm bundle and html are linked by opening html in browser and check console.
6. ---- WEBPACK done. Not react.
7. *** Go to babel loader docs by searching npm install babel loader
8. Use npm install -D babel-loader @babel/core @babel/preset-env webpack
9. Copy/pasge config object into webpack config
10. Install react, react-dom, and the babel react preset 'npm install react react-dom'
11. also install babel react preset 'npm install --save-dev @babel/preset-react'
12. The 'save-dev' are dependencies you only need while developing app. afterwards, the bundle.js only needs regular dependancies
13. Add "@babel/preset-react" to presets in webpack.config.js
14. webpack setup for react now add react to test
15. makes a src/components app.jax file ( copy form react docs tutorial)
16.refactor index.js to import app and reacdom.render APP (add dom element to html file)
17. rename html to index.html and delete bar.js
18. react is setup and full stck is not
19. Move all client code into a client folder (But not webpack config or package.json) and adjust file paths in webpack.config