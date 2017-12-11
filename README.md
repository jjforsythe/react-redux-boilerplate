# React-Redux App Boilerplate Code
This is an app to enable quicker set-up for redux applications, based on Tyler Buchea's great tutorial [here](
http://blog.tylerbuchea.com/super-simple-react-redux-application-example/).

Here are the steps I have taken to use and extend the original code:

 ```
 create-react-app boiler-plate
 ```
 ```
 npm install --save redux react-redux
 ```

* Update redux.js, App.js & index.js from the tutorial code

* Split redux.js into separate files: actions.js, reducers.js & store.js

* Split App.js into separate files: App.js & AppContainer.js

* Add support for [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) by updating line in store.js:
```javascript
  - const store = createStore(reducers, initialState);
  + const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```

* Re-factor as a simple counter app

In order to run simple clone or download the repository and run

```
npm install
npm start
```
