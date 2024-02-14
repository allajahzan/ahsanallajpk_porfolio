
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxqJhMIy6ALoov3h7nesNWVDmDANSxA4xjfXrpTTUtEQHaqfEAyVFucBphHjfxP9gL8HQ/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    form.querySelector('.loading').classList.add('d-block')
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        {   
            // alert("Succefully Send Message")
            // clear form
            form.reset();
            
            form.querySelector('.loading').classList.remove('d-block')           
            form.querySelector('.sent-message').classList.add('d-block')

            // Remove the 'd-block' class after 3 seconds
            setTimeout(() => {
            form.querySelector('.sent-message').classList.remove('d-block');
            }, 3000)


            
        })
      .catch(error => 
       
       { 

            // alert("Failed to Send Message")
            form.querySelector('.error-message').classList.add('d-block')
         
            // Remove the 'd-block' class after 3 seconds
            setTimeout(() => {
            form.querySelector('.error-message').classList.remove('d-block');
            }, 3000)
       }
      )
  });

