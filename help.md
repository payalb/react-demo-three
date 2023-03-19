props can allow simple type liek string integer, to complex types like array, functions, objects.
Component sending data is called parent and receiving data is called a child component. Parent can send same data to multiple child components. It is one directional communication. You cannot send data from child to parent using props.
Pure function: that will always return the same value for same argument. SO when passing props, a function should never modify it's own props.
