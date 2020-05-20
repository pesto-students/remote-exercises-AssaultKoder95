# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

One of the use cases where we can implement this is:

- Inside functions that do heavy computations

### **What _extra_ test cases can you add to the test file?**

_Add relevant test-cases in the test file_
