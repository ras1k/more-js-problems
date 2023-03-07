const phones = [
    {Name : 'Samsung', Camera : 50, Processor : 'Exynos', Color : 'Gold', Price : 999},
    {Name : 'Apple', Camera : 12, Processor : 'Bionic', Color : 'Gold', Price : 1099},
    {Name : 'Xiaomi', Camera : 102, Processor : 'Snapdragon', Color : 'Silver', Price : 699},
    {Name : 'Oneplus', Camera : 48, Processor : 'Mediatek', Color : 'Black', Price : 799},
    {Name : 'Huawei', Camera : 64, Processor : 'Hisilicon Kirin', Color : 'Pearl', Price : 899}
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i = 0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.Price < cheapest.Price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log('Cheapest phone is :', mySelection);