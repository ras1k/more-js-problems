const names = ['rahim','karim','rahman','karim','rahman','karim','mizan'];
function removeDuplicate(names){
    const unique = [];
    for(let i =0; i < names.length; i++){
        const name = names[i];
        // console.log(name);
        if (unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniquenames = removeDuplicate(names);
console.log(uniquenames);