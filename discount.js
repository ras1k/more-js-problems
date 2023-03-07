function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const third100Rate = 70;

    if (ticketQuantity <= 100){
        const price = ticketQuantity*first100Rate;
        return price;
    }
    else if (ticketQuantity <=200){
        const first100Price = 100*first100Rate;
        const restTicketQuantity = ticketQuantity-100;
        const restTicketPrice = restTicketQuantity*90;
        const totalPrice = first100Price+restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100*first100Rate;
        const second100Price = 100*second100Rate;
        const restTicketQuantity = ticketQuantity-200;
        const restTicketPrice = restTicketQuantity * 70;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;

    }

}
console.log(ticketPrice(270));