import AuthenticationService from './authentication'
class HttpService {
  
  client(endpoint, { body, ...customConfig } = {}) {
    const token = AuthenticationService.getToken() 
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : null
    }
    const config = {
      method: customConfig.method ? customConfig.method : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
  
    if (body) {
      config.body = JSON.stringify(body)
    }
  
    return window
      .fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`, config)
      .then(async response => {
        const data = await response.json()
        if (response.ok) {
          return Promise.resolve(data)
        } else {
          return Promise.reject(data)
        }
      })
  }

  clientImage(file) {
    const token = AuthenticationService.getToken() 
    const headers = {
      'Authorization': token ? `Bearer ${token}` : null
    }
    let formdata = new FormData();
    formdata.append("avatar", file);

    var requestOptions = {
      method: 'POST',
      headers: headers,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_BASE_URL}/users/me/avatar`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
}

export default new HttpService()