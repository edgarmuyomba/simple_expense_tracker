document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form #new').addEventListener('click', function(event) {
        event.preventDefault();
    
        const form = document.getElementById('expense-form');
        const formData = new FormData(form);
    
        fetch(form.action, {
            method: 'POST',
            headers: {
                'X-CSRFToken': formData.get('csrfmiddlewaretoken'), // Include CSRF token in headers
            },
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the success response
            console.log('Success:', data);
            // close the new_expense field
            closeNewExpense();
            // clear the form
            form.reset();
            alert(data.message); // Display a message or perform any action
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
            showFailed();
        });
    });
});

const closeNewExpense = () => {
    const container = document.querySelector("div.newExpenseContainer");
    container.style.display = 'none';
}

const openNewExpense = () => {
    const container = document.querySelector("div.newExpenseContainer");
    container.style.display = '';
}

const showSuccess = () => {

}

const showFailed = () => {
    const error = document.querySelector('.new_expense p.error');
    error.textContent = 'Failed to create new expense! Try again.';
    error.style.display = '';
    setTimeout(
        () => { 
            error.style.display = 'none';
            error.textContent = '';
         },
        4000
    );
}