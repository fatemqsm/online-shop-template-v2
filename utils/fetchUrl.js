import windowHandler from './windowHandler'
const fetchUrl = async ({ url, method = 'GET', body = {} }) => {
  // const user = windowHandler.cookies.get('user')
  // console.log('user in cookie fetchurl', user)
  // const params = {
  //   method,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }

  // if (user && user.access_token) {
  //   params.headers['x-access-token'] = user.access_token
  // }
  if (method === 'GET') {
    // const user = windowHandler.cookies.get('user')
    // const params = {
    //   method,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }

    // if (user && user.access_token) {
    //   params.headers['x-access-token'] = user.access_token
    // }
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


// import windowHandler from './windowHandler'
// const fetchUrl = async ({ url, method = 'GET', body = {} }) => {

//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const user = windowHandler.cookies.get('user')
//       const params = {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//       if (user && user.access_token) {
//         params.headers['x-access-token'] = user.access_token
//       }
//       if (method === 'POST') {
//         params.body = JSON.stringify(body)
//       }
//       const response = await fetch(url, params)
//       resolve(await response.json())
//     }, 0)
//   })

// }
// export default fetchUrl
