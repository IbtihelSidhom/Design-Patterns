# Singleton Pattern
Restricts the instantiation of a class to one "single" instance.

### What do we do exactly?
We export an instance of our object instead of a class.


### After applying the Singleton Pattern:
We got a single object shared amongst a bunch of different resources throughout the application without having to recreate that object 
or losing the information inside of it.

### Common use case:
- State objects: a single object that have shared resource amongst different parts of the app.
- DB connection