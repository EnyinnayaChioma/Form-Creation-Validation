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
    // Create a <li> element.
   let eachUser = document.createElement('li')
   
  //  Set the text content of the <li> to the user’s name
   eachUser.textContent = user.name

  //  Append the <li> to userList.
   userList.appendChild(eachUser)
    
   });


  //  After the loop, append userList to dataContainer.
   dataContainer.appendChild(userList)
   } catch (error) {

      dataContainer.innerHTML = ''
      dataContainer.textContent('Failed to load user data.')
    
   }
}

document.addEventListener('DOMContentLoaded' , fetchUserData)