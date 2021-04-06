# asycnhronism_with_JS
Here you will find examples callbacks, promises and async await in their corresponding branches.

# Advantages / Disadvantages
* Callbacks

    | Advantages | Disadvantages |
    |------------|---------------|
    | Simple     |   Wild        |
    | Universal (all browsers)  |   Not intuitive|
    |               |callback hell| 
    |               |Not readable|
    |               |Exceptions not supported|

* Promises
    | Advantages | Disadvantages |
    |------------|---------------|
    |Easily linkable (then, return)|Exceptions not supported (catch needed at the end)|
    |Powerful (recommended fro developers)|Polyfill needed to be interpreted by all browsers (Babel)|

* Async await
    | Advantages | Disadvantages |
    |------------|---------------| 
    |Exceptions supported (try, catch)|Need a previous routine to be completed to execute the next routine|
    |Human readable|Polyfill needed to be interpreted by all browsers (Babel)|