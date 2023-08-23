const PRODUCTS = [
	['apple', 10],
	['banana', 8],
	['mango', 20],
	['grape', 18]
];

function getPrice(products, seasonFunc) {
    let copiedProducts = JSON.parse(JSON.stringify(products));
    
    if (seasonFunc) {
        for (let i = 0; i < copiedProducts.length; i++) {
            copiedProducts[i][1] = seasonFunc(copiedProducts[i][1]);
        }
    }

    let result = 0;
    for (let i = 0; i < copiedProducts.length; i++) {
        result += copiedProducts[i][1];
    }

    return result;
}

function summerValue(value) {
    return value * 0.8;
}

function winterValue(value) {
    return value * 2;
}

summerResult = getPrice(PRODUCTS, summerValue);
winterResult = getPrice(PRODUCTS, winterValue);
defaultResult = getPrice(PRODUCTS);



console.log(`Summer value : ${summerResult},\n Winter value : ${winterResult},\n Default sum : ${defaultResult}.`);