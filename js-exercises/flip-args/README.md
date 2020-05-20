# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function () {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**

Taking some references from articles written on closures, partial functions & currying, different use cases are:

- To sort array in given order (ASC / DESC).
- Improve performance of a programs ( Basically the arguments are stored in a stack before being evaluated & if we consider a function with arguments containing a callback, this implies that my callback will the first to be evaluated, so in order to make our program more efficient we can reverse the arguments & data object or anything other param is referenced first thereby making some optimizations to the function call, I might be wrong here but yeah tried thinking on these lines a bit )

### **What test cases can you add to the test file?**

_Add the relevant test-cases in the test file_

# Restrictions

- Don't use any libraries
