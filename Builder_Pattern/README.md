# Builder Pattern

### What do we do exactly?
We have 2 ways:
- Traditional:
    Use the Builder class, which has methods to set the optional properties. We actually can chain these methods after each other, however we want
    according to what properties are needed (avoid putting undefined).
    This gives you a nice clean interface for setting the different properties of an object.

- JS-specific:
    Make changes to the class itself: keep the required parameters and pass in the optional parameters as JS object.
    It's even possible to put defaults values. Overall it takes much less code.


### Common use case:
Usually usefull to create objects that have many inter-linking parts or many optional and required fields.