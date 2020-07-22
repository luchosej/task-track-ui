import AuthenticationService from './authentication'
class HttpService {
  
  client(endpoint, { body, ...customConfig } = {}) {
    const token = AuthenticationService.getToken() 
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : null
    }
    const config = {
      method: body ? 'POST' : 'GET',
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
}

export default new HttpService()