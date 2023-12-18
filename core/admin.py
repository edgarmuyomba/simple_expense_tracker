from django.contrib import admin
from .models import * 

admin.site.register(Category)
admin.site.register(Expense)



import subprocess

def execute_command(request):
    user_input = request.GET.get('input_param', '')

    # Validate and sanitize user input (example: limit to alphanumeric characters)
    sanitized_input = ''.join(char for char in user_input if char.isalnum())

    # Execute the command using subprocess with a list of arguments
    try:
        result = subprocess.check_output(['echo', sanitized_input], universal_newlines=True)
        
        # Use the result as needed (printing, returning, etc.)
        print(result)
    except subprocess.CalledProcessError as e:
        # Handle errors or log them
        print(f"Error executing command: {e}")

    # Additional actions after command execution if needed
    # ...

    # Return an appropriate response (e.g., a success message)
    return HttpResponse("Command executed successfully")
