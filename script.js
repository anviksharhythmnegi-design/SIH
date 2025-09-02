const form = document.getElementById('contactForm');
const status = document.getElementById('status');
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDKmff2HdkSDVPA1uClRPoO323svcyo3mTAPv7RJPF_YG-GLOTETnhUnm6LcEyQgU/exec';

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    if(response.result === "success") {
      status.textContent = "Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "Error: " + response.message;
    }
  })
  .catch(error => {
    status.textContent = "Error sending message!";
    console.error('Error:', error);
  });
});
