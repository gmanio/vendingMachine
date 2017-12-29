export const INCREASE_WALLET_MONEY = 'INCREASE MONEY';
export const DECREASE_WALLET_MONEY = 'DECREASE MONEY';

export function increaseWalletMoney() {
  return {
    type: INCREASE_WALLET_MONEY
  }
}

export function decreaseWalletMoney() {
  return {
    type: DECREASE_WALLET_MONEY
  }
}