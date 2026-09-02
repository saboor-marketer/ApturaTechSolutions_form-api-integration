// DOM Elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnSpinner = document.getElementById('btnSpinner');
const successAlert = document.getElementById('successAlert');
const errorAlert = document.getElementById('errorAlert');
const errorMessage = document.getElementById('errorMessage');

// Form Inputs
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// Validation Functions
function validateFullName(value) {
    if (!value || value.trim() === '') {
        return 'Full name is required';
    }
    if (value.trim().length < 3) {
        return 'Full name must be at least 3 characters';
    }
    if (value.trim().length === value.length && value.length > 0) {
        // Check if it's only spaces
        if (!value.trim()) {
            return 'Full name cannot contain only spaces';
        }
    }
    return '';
}

function validateEmail(value) {
    if (!value || value.trim() === '') {
        return 'Email address is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
        return 'Please enter a valid email address';
    }
    return '';
}

function validatePhone(value) {
    if (!value || value.trim() === '') {
        return 'Phone number is required';
    }
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
        return 'Phone number must contain at least 10 digits';
    }
    return '';
}

function validateSubject(value) {
    if (!value || value.trim() === '') {
        return 'Subject is required';
    }
    if (value.trim().length < 3) {
        return 'Subject must be at least 3 characters';
    }
    return '';
}

function validateMessage(value) {
    if (!value || value.trim() === '') {
        return 'Message is required';
    }
    if (value.trim().length < 10) {
        return 'Message must be at least 10 characters';
    }
    return '';
}

// Set Error State
function setError(input, errorElementId, message) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Set Success State
function setSuccess(input, errorElementId) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = '';
}

// Clear Validation State
function clearValidation(input, errorElementId) {
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = '';
}

// Validate All Fields
function validateForm() {
    let isValid = true;

    // Validate Full Name
    const fullNameError = validateFullName(fullName.value);
    if (fullNameError) {
        setError(fullName, 'fullNameError', fullNameError);
        isValid = false;
    } else {
        setSuccess(fullName, 'fullNameError');
    }

    // Validate Email
    const emailError = validateEmail(email.value);
    if (emailError) {
        setError(email, 'emailError', emailError);
        isValid = false;
    } else {
        setSuccess(email, 'emailError');
    }

    // Validate Phone
    const phoneError = validatePhone(phone.value);
    if (phoneError) {
        setError(phone, 'phoneError', phoneError);
        isValid = false;
    } else {
        setSuccess(phone, 'phoneError');
    }

    // Validate Subject
    const subjectError = validateSubject(subject.value);
    if (subjectError) {
        setError(subject, 'subjectError', subjectError);
        isValid = false;
    } else {
        setSuccess(subject, 'subjectError');
    }

    // Validate Message
    const messageError = validateMessage(message.value);
    if (messageError) {
        setError(message, 'messageError', messageError);
        isValid = false;
    } else {
        setSuccess(message, 'messageError');
    }

    return isValid;
}

// Set Loading State
function setLoadingState(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.textContent = 'Submitting...';
        btnSpinner.classList.remove('d-none');
    } else {
        submitBtn.disabled = false;
        btnText.textContent = 'Submit';
        btnSpinner.classList.add('d-none');
    }
}

// Show Success Alert
function showSuccessAlert() {
    successAlert.classList.remove('d-none');
    errorAlert.classList.add('d-none');
}

// Show Error Alert
function showErrorAlert(message) {
    errorAlert.classList.remove('d-none');
    successAlert.classList.add('d-none');
    errorMessage.textContent = message;
}

// Hide All Alerts
function hideAllAlerts() {
    successAlert.classList.add('d-none');
    errorAlert.classList.add('d-none');
}

// Reset Form
function resetForm() {
    contactForm.reset();
    clearValidation(fullName, 'fullNameError');
    clearValidation(email, 'emailError');
    clearValidation(phone, 'phoneError');
    clearValidation(subject, 'subjectError');
    clearValidation(message, 'messageError');
}

// Submit Form to API
async function submitForm(formData) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: error.message };
    }
}

// Form Submit Handler
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Hide previous alerts
    hideAllAlerts();
    
    // Validate form
    const isFormValid = validateForm();
    
    if (!isFormValid) {
        return;
    }
    
    // Set loading state
    setLoadingState(true);
    
    // Prepare form data
    const formData = {
        fullName: fullName.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        subject: subject.value.trim(),
        message: message.value.trim(),
        timestamp: new Date().toISOString()
    };
    
    // Submit to API
    const result = await submitForm(formData);
    
    // Remove loading state
    setLoadingState(false);
    
    if (result.success) {
        // Show success message
        showSuccessAlert();
        
        // Reset form
        resetForm();
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Show error message
        showErrorAlert('Unable to submit the form. Please check your connection and try again.');
    }
});

// Real-time Validation on Input
fullName.addEventListener('input', () => {
    if (fullName.classList.contains('is-invalid')) {
        const error = validateFullName(fullName.value);
        if (!error) {
            setSuccess(fullName, 'fullNameError');
        } else {
            setError(fullName, 'fullNameError', error);
        }
    }
});

email.addEventListener('input', () => {
    if (email.classList.contains('is-invalid')) {
        const error = validateEmail(email.value);
        if (!error) {
            setSuccess(email, 'emailError');
        } else {
            setError(email, 'emailError', error);
        }
    }
});

phone.addEventListener('input', () => {
    if (phone.classList.contains('is-invalid')) {
        const error = validatePhone(phone.value);
        if (!error) {
            setSuccess(phone, 'phoneError');
        } else {
            setError(phone, 'phoneError', error);
        }
    }
});

subject.addEventListener('input', () => {
    if (subject.classList.contains('is-invalid')) {
        const error = validateSubject(subject.value);
        if (!error) {
            setSuccess(subject, 'subjectError');
        } else {
            setError(subject, 'subjectError', error);
        }
    }
});

message.addEventListener('input', () => {
    if (message.classList.contains('is-invalid')) {
        const error = validateMessage(message.value);
        if (!error) {
            setSuccess(message, 'messageError');
        } else {
            setError(message, 'messageError', error);
        }
    }
});

// Clear validation on blur if field is empty
fullName.addEventListener('blur', () => {
    if (!fullName.value) {
        clearValidation(fullName, 'fullNameError');
    }
});

email.addEventListener('blur', () => {
    if (!email.value) {
        clearValidation(email, 'emailError');
    }
});

phone.addEventListener('blur', () => {
    if (!phone.value) {
        clearValidation(phone, 'phoneError');
    }
});

subject.addEventListener('blur', () => {
    if (!subject.value) {
        clearValidation(subject, 'subjectError');
    }
});

message.addEventListener('blur', () => {
    if (!message.value) {
        clearValidation(message, 'messageError');
    }
});
