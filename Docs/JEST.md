### test()
==> test(name, fn, timeout)
* The first argument is the test name used to identify the test
* fn: is a functin that contains the expectations to test
* timeout: which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5 seconds

### Test Driven Development
Test driven development is a software development process where you write tests before writing the software code.

Once the tests have been written, then write the code to ensure the tests pass

1. Create tests that verify the functionality of a specific feature.
2. Write tests that will run the tests successfully when re-executed.
3. Refactor the code for optimization while ensuring the tests continue to pass.

Also called red-green testing as all tests go from a red failed state to a green passed state.