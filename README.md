# Task 2 — Form & API Integration

## Project Overview

A professional, responsive contact form application with client-side validation and mock API integration. This project demonstrates modern front-end development practices using HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5.

The application validates user input on the client side, submits data to a mock API endpoint using the Fetch API, and provides clear feedback through loading, success, and error states.

## Features

- **Client-side Validation**: Real-time and on-submit validation for all form fields
- **Mock API Integration**: Submits form data to JSONPlaceholder using the Fetch API
- **Loading State**: Visual feedback during form submission with disabled button and spinner
- **Success State**: Clear success message with form reset after successful submission
- **Error Handling**: Graceful error handling with user-friendly error messages
- **Responsive Design**: Mobile-first approach using Bootstrap's grid system
- **Accessibility**: ARIA attributes, keyboard navigation, focus indicators, and semantic HTML
- **Professional UI**: Clean, modern design with gradient backgrounds and smooth transitions

## Technologies Used

- **HTML5**: Semantic markup and accessible form structure
- **CSS3**: Custom styling with responsive design and modern CSS features
- **JavaScript ES6+**: Modern JavaScript with async/await, arrow functions, and DOM manipulation
- **Bootstrap 5**: Responsive grid system and utility classes
- **Fetch API**: For making HTTP POST requests to the mock API
- **JSONPlaceholder**: Public mock API for testing form submissions

## Project Structure

```
form-api-integration/
│
├── index.html              # Main HTML file with form structure
├── README.md               # Project documentation (this file)
├── REPORT.md               # Detailed project report
├── css/
│   └── style.css           # Custom CSS styling
└── js/
    └── script.js           # Form validation and API integration logic
```

## How to Run the Project

1. **Download or clone the project** to your local machine
2. **Navigate to the project folder**: `cd form-api-integration`
3. **Open `index.html`** in a modern web browser (Chrome, Firefox, Edge, Safari)

No build process or server is required. The project runs entirely in the browser.

## API Information

This project uses the **JSONPlaceholder** mock API for form submission:

- **API Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **HTTP Method**: POST
- **Content Type**: application/json
- **Request Format**: JSON

The form sends the following data structure:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "subject": "Inquiry",
  "message": "Your message here",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Form Validation Rules

### Full Name
- Required field
- Minimum 3 characters
- Cannot contain only spaces

### Email Address
- Required field
- Must follow valid email format (e.g., user@example.com)

### Phone Number
- Required field
- Must contain at least 10 digits

### Subject
- Required field
- Minimum 3 characters

### Message
- Required field
- Minimum 10 characters

## Testing

The following test scenarios were performed:

| Test Scenario | Expected Result | Status |
|--------------|----------------|--------|
| Empty Form | Validation errors displayed for all required fields | Passed |
| Invalid Email | Email validation error displayed, API not called | Passed |
| Short Message | Message validation error displayed | Passed |
| Invalid Phone | Phone validation error displayed | Passed |
| Valid Submission | Loading state → API request → Success message → Form reset | Passed |
| API Error | Error message displayed, button re-enabled | Passed |

## Accessibility Features

- **Semantic HTML**: Proper use of `<main>`, `<header>`, `<form>`, `<label>`, and `<button>` elements
- **ARIA Attributes**: `aria-required`, `aria-describedby`, `aria-live`, `role="alert"`
- **Keyboard Navigation**: All form controls are keyboard accessible
- **Focus Indicators**: Visible focus states for all interactive elements
- **Screen Reader Support**: Proper label associations and error announcements
- **Color Independence**: Error states use icons and text, not just color
- **Required Field Indicators**: Clear visual and semantic markers for required fields

## Responsive Design

The application uses a mobile-first approach with breakpoints at:

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

The layout adapts seamlessly across all screen sizes with:
- Responsive grid system
- Flexible form card sizing
- Touch-friendly button sizes
- Readable typography at all scales
- No horizontal scrolling

## Browser Compatibility

The project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Improvements

Potential enhancements for future iterations:

1. **Backend Integration**: Connect to a real server with database storage
2. **Server-side Validation**: Add additional validation on the backend
3. **CAPTCHA Protection**: Implement spam prevention
4. **File Upload**: Add attachment support for messages
5. **Auto-save**: Draft saving functionality for better UX
6. **Multi-language Support**: Internationalization (i18n)
7. **Automated Testing**: Unit tests and end-to-end tests with Playwright or Cypress
8. **Rate Limiting**: Prevent form abuse
9. **Email Notifications**: Send confirmation emails to users
10. **Submission History**: Allow users to view past submissions
11. **Advanced Validation**: Add more sophisticated validation patterns
12. **Analytics**: Track form submissions and user behavior

## License

This project is created for educational purposes.

## Author

Developed as a demonstration of modern front-end development practices.
