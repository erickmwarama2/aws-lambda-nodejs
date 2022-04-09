'use strict';


module.exports.hello = async (event) => {
  console.log("Function executed");

  await sleep(1000);

  // return "Hello-World";
  return process.env['env_variable'];
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
