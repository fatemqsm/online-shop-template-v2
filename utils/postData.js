async function postData({ url = 'https://62711f28e1c7aec428fc31ae.mockapi.io/users', data = {} }) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  } catch (e) {
    console.log("error in postData", e);
  }
}
export default postData
