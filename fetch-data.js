 const fetchUserData = async () =>{
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';

   const dataContainer = document.getElementById('api-data')

   try {
    // fetch function to asynchronously get data from apiUrl
    const response = await fetch(apiUrl)

    // convert the response to JSON
    const users = await response.json()
    
    // Before appending new content to dataContainer, clear its existing content

    dataContainer.innerHTML = ''
   
    // Create a <ul> element
   const userList = document.createElement('ul')

   users.forEach(user => {
   let eachUser = document.createElement('li').textContent = user.name

   eachUser.appendChild(userList)
    
   });

   userList.appendChild(dataContainer)
   } catch (error) {

      dataContainer.innerHTML = ''
      dataContainer.textContent('Failed to load user data.')
    
   }
}

document.addEventListener('DOMContentLoaded' , fetchUserData())