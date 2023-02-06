function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicket100Rate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const total = first100price + restTicketPrice;
        return total;
    }
    else{
        const first100price = first100Rate * 100;
        const second100price = 100 * second100Rate;
        const restTicketQuantity1 = ticketQuantity - 200;
        const restTicketPrice1 = restTicketQuantity1 * restTicket100Rate;
        const totalCost = first100price + second100price + restTicketPrice1;
        return totalCost; 
        
    }
}

const price = ticketPrice(270);
console.log(price);