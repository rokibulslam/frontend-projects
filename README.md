# React Testing
* Jest and React Testing Library
* Fundamentals of writing a test
* Test components with user interactions
* Test components wrapped in a provider
* Test Components with mocking
* Static analysis testing

# Jest vs RTL
#### Jest
* Jest is a javascritp testing framework
* Jest is a test runner that finds tests, runs the tests, determines whether the tests passed or failde and reports it back in a human readable manner
### RTL
* Javascript testing utility that provides virtual DOM for testing React component.
* React Testing Library provides a virtual DOM which we can use to interact with and verify the behaviour of a react component.
* Testing library is infact a family of packages which helps test UI components.
* The core library is called DOM Testing library and RTL is simply a wrapper around this core library to test react applications in an easier way
### Types of Tests
  ### Unit Test
  * Focus is on testing the individual building blocks of an application such as a class or a function or a component.
  * Each unit or building block is tested in isolation, independent of other units
  * Dependencies are mocked
  * Unit test Run in a short time and make it very easy to pinpoint failures
  ### Integretion Test
  * Focus is on testing a combination of units and ensuring the work together
  ### End to end tests
  * Focus is on testing the entire application flow and ensuring it works as designed from start to finish
  * Involves in a real UI, a real backend database, real services etc
  * Have a cost implication as you interact with real APIs that may charge based on the number of requests

  # Unit Tests >> Integretion Test >> E2E Tests