document.getElementById('movie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Retrieve form data
    const movieName = document.getElementById('exampleFormControlSelect1').value;
    const ticketCount = document.getElementById('numberOfTickets').value;
    const movieSlot = document.getElementById('inputState').value;
    const firstName = document.querySelector('.full-name').value;
    const lastName = document.querySelectorAll('.full-name')[1].value; // Selecting the second full-name input for the last name
    const gender = document.querySelector('input[name="gridRadios"]:checked').nextElementSibling.textContent;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('contact-number').value;
    const customerName = `${firstName} ${lastName}`;
    const currentDate = new Date().toLocaleDateString();
  
    // Generate a unique Ticket ID (for simplicity, using the current timestamp)
    const ticketId = `TID${Date.now()}`;
  
    // Create a new table row using template literals
    const newRow = `
      <tr>
        <td>${ticketId}</td>
        <td>${movieName}</td>
        <td>${ticketCount}</td>
        <td>${customerName}</td>
        <td>${email}</td>
        <td>${phoneNumber}</td>
        <td>${movieSlot}</td>
        <td>${currentDate}</td>
      </tr>
    `;
  
    // Insert the new row into the table
    document.getElementById('table-content').insertAdjacentHTML('beforeend', newRow);
  
    // Clear the form inputs
    document.getElementById('movie-form').reset();
  });
  