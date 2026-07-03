const processUser = (user) => {
  const { street } = user || {};
  // Perform any additional processing with the street value
  console.log(street);
};

module.exports = { processUser };
