const access_token = localStorage.getItem('access_token');

const postData = (url = ``, data = {}) => {
  // Default options are marked with *

  return fetch(url,
    {
      method:"POST",
      'Authorization': access_token,
      'content-type': 'application/json',
      body: JSON.stringify(data),
    }
  )
  .then(response => response.json())
  .catch(error => {
    console.log(`Fetch Error`, error)
  })

}

const getData = (url = ``) => {
  // Default options are marked with *

  fetch(url,
    {
      method:"POST",
      'Authorization': access_token,
      'content-type': 'application/json'
    }
  )
  .then(response => response.json())
  .catch(error => {
    console.log(`Fetch Error`, error)
  })

}

export { postData, getData }