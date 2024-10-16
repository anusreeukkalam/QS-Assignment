import { Ticket, User } from "../models";

// Group tickets by their status
export const groupTicketsByStatus = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.status]) {
            result[ticket.status] = [];
        }
        result[ticket.status].push(ticket);
        return result;
    }, { "Backlog": [], "Todo": [], "In progress": [], "Done": [], "Canceled": [] });

    return groups;
};

// Group tickets by their priority
export const groupTicketsByPriority = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        if (!result[priority]) {
            result[priority] = [];
        }
        result[priority].push(ticket);
        return result;
    }, { "No priority": [], "Low": [], "Medium": [], "High": [], "Urgent": [] });

    return groups;
};

// Group tickets by user ID
export const groupTicketsByUserId = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.userId]) {
            result[ticket.userId] = [];
        }
        result[ticket.userId].push(ticket);
        return result;
    }, {});

    return groups;
};

// Map users by their ID
export const mapUsersByUserId = (users) => {
    const group = users.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});

    return group;
};

// Get priority label based on the priority number
const getPriorityLabel = (priority) => {
    switch (priority) {
        case 0: return "No priority";
        case 1: return "Low";
        case 2: return "Medium";
        case 3: return "High";
        case 4: return "Urgent";
        default: return "NA";
    }
};

// Order tickets by priority
const orderByPriority = (tickets) => tickets.sort((a, b) => (a.priority > b.priority ? -1 : 1));

// Order tickets by title
const orderByTitle = (tickets) => tickets.sort((a, b) => (a.title < b.title ? -1 : 1));

// Load tickets based on grouping and ordering
export const loadGrid = (tickets, grouping, ordering) => {
    let orderedTickets;
    if (ordering === "priority") {
        orderedTickets = orderByPriority(tickets);
    } else {
        orderedTickets = orderByTitle(tickets);
    }

    switch (grouping) {
        case "status": return groupTicketsByStatus(orderedTickets);
        case "priority": return groupTicketsByPriority(orderedTickets);
        case "user": return groupTicketsByUserId(orderedTickets);
        default: return groupTicketsByUserId(orderedTickets);
    }
};
