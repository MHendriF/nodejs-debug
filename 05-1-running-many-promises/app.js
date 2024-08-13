const { getUserInfo, getUserOrders, getUserCartItems } = require('./utils');

async function getUserData(userId) {
  try {
    const [userInfo, userOrders, userCartItems] = await Promise.all([
      getUserInfo(userId),
      getUserOrders(userId),
      getUserCartItems(userId),
    ]);

    // return data
    return {
      userInfo,
      userOrders,
      userCartItems,
    };
  } catch (error) {
    return null;
  }
}

function main() {
  getUserData(1).then(console.log);
  getUserData(-1).then(console.log); // seharusnya mencetak "null"
}

main();

