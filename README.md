# Testing framework evaluation

### Criteria 
1. Speed of running
2. Time to develope test code
  1. mocking
  2. DOM api
3. Browser support 
4. Code coverage generate

### Run test 

1. Jest: `npm run jest`
2. Enzyme: `npm run enzyme`


Comparison 

**Jest**
Pros
1. Auto mock everything by default
2. Build in code coverage
3. Snapshot testing https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing
4. Build in Jasmine (v2) which we don't need to require assertion library

Cons:
1. Need to create browser enviroment if needed (e.g. jsdom)
2. 

**Enzyme**
Props
1. Mimicking jQuery's API for DOM manipulation

Cons
1. Need to integrate with `istanbul` for code coverage
2. 

