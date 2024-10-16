// In JavaScript, there's no need for interfaces. You define objects directly.

// Example structure of a Ticket object:
const Ticket = {
    id: '',           // string
    title: '',        // string
    tag: [],          // array of strings
    userId: '',       // string
    status: '',       // string
    priority: 0       // number
};

// Example structure of a User object:
const User = {
    id: '',           // string
    name: '',         // string
    available: false  // boolean
};

// Col can be represented as an object containing an array of tickets:
const Col = {
    col: []           // array of Ticket objects
};

// UserIdToData can be represented as an object with user data mapping:
const UserIdToData = {
    userData: {}      // Record of users with userId as key and User object as value
};
