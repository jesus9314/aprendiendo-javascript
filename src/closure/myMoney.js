// function moneyBox(coins){
//     let saveCoins = 0
//     saveCoins += coins
//     console.log(`MoneyBox: S/${saveCoins}`)
// }
// moneyBox(5)
// moneyBox(5)
// /*
// MoneyBox: S/5
// MoneyBox: S/5
// No se está acumulando ya que saveCoin solo tiene un scope de function
// */

//con closure

function moneyBox(){
    let saveCoins = 0
    function countCoins(coins){
        saveCoins += coins
        console.log(`MoneyBox: S/${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)
/*
MoneyBox: S/5
MoneyBox: S/10
MoneyBox: S/25
*/

const moneyBoxAna = moneyBox()
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)
/*
MoneyBox: S/5
MoneyBox: S/10
MoneyBox: S/25
MoneyBox: S/10
MoneyBox: S/30
MoneyBox: S/35
*/