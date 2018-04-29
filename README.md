# Intro to Redux - Weather App



## Learned in this Project ##

- bind(this) - making ```this``` available to event handelers - see example in [search-bar container](./src/containers/search-bar.js)

- middleware  - using ```redux-promise``` middleware 
  - when it recognises *promise* passed as a payload it stops the action, waits for the promise to resolve and **replaces the promise in the payload with the results of the promise**
  - For example, see [index.js](./src/actions/index.js)

- In a reducer, do not change state directly (same as in React state). Instead, build a new instance of state - see example and commnets in [reducer-weather](./src/reducers/reducer-weather.js)

- See [Google Map Component](./src/components/google-map.js) for an example how to reference embeded components using ```componentDidMount()```



## To Do - Further practice ##

- Introduce error check if the city is not found
- Introduce possibility to choose cities from other countries
