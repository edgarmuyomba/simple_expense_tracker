document.addEventListener('DOMContentLoaded', function() {
    // display the new form
    document.querySelector('.aside > .footer > .new').addEventListener('click', () => {
        document.querySelector('div.newExpenseContainer').style.display = '';
    })

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
            showSuccess(data.message);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
            showFailed();
        });
    });

    // cancel the addition
    document.querySelector('form input#cancel').addEventListener('click', () => {
        console.log(this);
        document.querySelector('div.newExpenseContainer').style.display = 'none';
    })
});

const closeNewExpense = () => {
    const container = document.querySelector("div.newExpenseContainer");
    container.style.display = 'none';
}

const openNewExpense = () => {
    const container = document.querySelector("div.newExpenseContainer");
    container.style.display = '';
}

const showSuccess = (message) => {
    const success = document.querySelector('div.success');
    const info = success.querySelector('p.message');
    info.textContent = message;
    success.style.display = '';
    setTimeout(
        () => {
            success.style.display = 'none';
            info.textContent = '';
        },
        5000
    );
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