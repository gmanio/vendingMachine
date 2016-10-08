const coinMap = new Map([
    ['.w50', 50],
    ['.w100', 100],
    ['.w500', 500],
    ['.w1000', 1000],
]);

const moneyDetector = new Map([
    ['.insert_papermoney', 'paper'],
    ['.insert_coin', 'coin']
])

export { coinMap, moneyDetector };