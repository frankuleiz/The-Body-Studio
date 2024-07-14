/* Sign up FUNCTION */

document.getElementById('signup-form').addEventListener('submit', function(event){
  event.preventDefault();

  /* Get values from the form */
  var firstname = document.getElementById('first-name').value;
  var lastname = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var selectedClass = document.getElementById('class').value;
  var plan = document.getElementById('plan').value;

  /* SET THE EMAIL PARAMETERS */
  var templateParams = {
    first_name: firstname,
    last_name: lastname,
    email: email,
    phone: phone,
    class: selectedClass,
    plan: plan
  };

  /* SEND THE EMAIL USING Emailjs API */
  emailjs.send('service_neu58o9', 'template_zttqjst', templateParams)
    .then(function(response) {
      alert('SUCCESS!', response.status, response.text);
    }, function(error) {
      alert('FAILED...', error);
    });
});

/* Initialize the emailjs function */
(function(){
  emailjs.init("Lo53YrgsZ7ciqie2S");
})();