// Add event listeners for buttons
document.getElementById('addBtn').addEventListener('click', addRegistration);
document.getElementById('getAllBtn').addEventListener('click', getAllRegistrations);
document.getElementById('getByIdBtn').addEventListener('click', getRegistrationById);
document.getElementById('updateBtn').addEventListener('click', updateRegistration);
document.getElementById('deleteBtn').addEventListener('click', deleteRegistration);

// Function to add a new registration (POST)
async function addRegistration(event) {
    event.preventDefault();

    const registrationData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
    };

    const response = await fetch('http://localhost:8080/registrations/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
    });

    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result);
}

// Function to get all registrations (GET)
async function getAllRegistrations() {
    const response = await fetch('http://localhost:8080/registrations/get-list');
    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result);
}

// Function to get a registration by ID (GET)
async function getRegistrationById() {
    const id = document.getElementById('registrationId').value;
    const response = await fetch(`http://localhost:8080/registrations/get/${id}`);
    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result);
}

// Function to update a registration (PUT)
async function updateRegistration() {
    const id = document.getElementById('registrationId').value;

    const updatedData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
    };

    const response = await fetch(`http://localhost:8080/registrations/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });

    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result);
}

// Function to delete a registration by ID (DELETE)
async function deleteRegistration() {
    const id = document.getElementById('registrationId').value;

    const response = await fetch(`http://localhost:8080/registrations/delete/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.getElementById('response').innerText = `Registration with ID ${id} deleted successfully.`;
    } else {
        document.getElementById('response').innerText = `Error deleting registration with ID ${id}.`;
    }
}
