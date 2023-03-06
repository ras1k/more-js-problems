function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWoord = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    const chairWood = perChairWoord * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = bedQuantity * perbedWood;

    const totalWood = chairWood + tableWood + bedWood;
    // console.log(chairWood, tableWood, bedWood, totalWood);

    return totalWood;
}
 const totalWood = woodCalculator(0,0,10);
 console.log('wood needed :',totalWood,'CFT');