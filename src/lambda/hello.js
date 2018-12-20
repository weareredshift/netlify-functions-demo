const obj = {
  fixed: 'Hello, World!'
};

export function handler(event, context, callback) {
  const query = event.queryStringParameters;

  console.log(JSON.stringify(event, null, 2));
  console.log(JSON.stringify(context, null, 2));

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      ...obj,
      query,
      env: process.env.ONLY_ON_NETLIFY || 'NA'
    })
  });
}
