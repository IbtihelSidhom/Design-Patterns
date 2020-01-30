# Facade Pattern
The idea is to create a facade between your complex code and your actual business logic.

### What do we do exactly?
Hide the details of implementation behind another function that takes the necessary parameters.

### After applying the Singleton Pattern:
Makes refactoring easier because we only have to change our code in one place.
Improve readability by masking interaction with more complex components behind a single API.

### Common use case:
Typically used when:
- a simple interface is required to access a complex system,
- a system is very complex or difficult to understand,
- an entry point is needed to each level of layered software, or
- the abstractions and implementations of a subsystem are tightly coupled.