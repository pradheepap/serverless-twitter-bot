'use strict';

module.exports.hello = async (event) => {
  console.log(`Events ${JSON.stringify(event)}`)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Lambda Executed',
        input: event,
      },
      null,
      2
    ),
  };
};
