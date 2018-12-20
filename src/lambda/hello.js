const obj = {
  fixed: 'Hello, World!'
};

export function handler(event, context, callback) {
  const query = event.queryStringParameters;
  const { input } = query;

  const inputNum = parseInt(input);
  if (input && input === inputNum.toString()) {
    obj['2x'] = (inputNum * 2).toString();
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      ...obj,
      query,
      env: process.env.ONLY_ON_NETLIFY || 'NA'
    })
  });
}