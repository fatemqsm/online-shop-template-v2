const fetchUrl = async ({ url, method = 'GET', body = {} }) => {
  if (method === 'GET') {
    const response = await fetch(url)
    const resault = await response.json()
    return JSON.stringify(resault)
  } else {
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
      body: JSON.stringify(body)
    });
    return response.json();
  }

}
export default fetchUrl
