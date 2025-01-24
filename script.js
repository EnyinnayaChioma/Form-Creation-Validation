// happen when html has loaded
document.addEventListener('DOMContentLoaded', ()=>{
  // call form
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback')

  form.addEventListener('submit', (e)=>{
    e.preventDefault()
   
      // call username
    const username =document.getElementById('username').value.trim();
    // call email
    const email =document.getElementById('email').value.trim();
    // call password
    const password =document.getElementById('password').value.trim();

    // declear a variable isValid and set to true

    let isValid =true;
    
    // array to store messages
    let messages = []

    //username validation
    if (!username.length >3) {
        isValid = false;
        messages.push('Username is too short')
    }

    // email validation

    if (!email.includes('@') && !email.includes('.')) {
      isValid = false;
     messages.push('Email must include @ and .')
    }

     //password validation
     if (!password.length >=8) {
      isValid = false;
      messages.push('password should have at least 8 characters')
  }
  

  feedbackDiv.style.display = 'block'

  if (isValid) {
    feedbackDiv.textContent = 'Registration successful!'
    feedbackDiv.style.color = '#28a745';
  } else {
     feedbackDiv.innerHTML = messages.join('<br>');
     feedbackDiv.style.color = '#dc3545';
  }


  })
})