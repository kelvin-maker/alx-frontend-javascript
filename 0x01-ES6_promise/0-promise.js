function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // make an API call or perform some async operation
    // if the operation is successful, call resolve with the result
    resolve();
    // if the operation fails, call reject with the error
    reject();
  });
}

export default getResponseFromAPI;
