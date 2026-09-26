let  potteryId = 1
export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight:  weight,
        height: height,
        id: potteryId
    }
 potteryId = potteryId + 1
    return pottery
}