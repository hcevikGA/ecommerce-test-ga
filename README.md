# Mini E-commerce Application
A mini e-commerce application with a Node.js backend (using Express.js and MongoDB) and a React frontend.

## Test Overview
Build a mini e-commerce application that has both a backend (Node.js) and frontend (React). The application should have the following functionalities:
1. User Authentication: Register, Login, and Logout.
2. Product Management: CRUD operations on products.
3. Shopping Cart: Users should be able to add products to their cart, view their cart, and checkout.

### Requirements
#### Backend (Node.js):
##### Setup
- Use Express.js.
- Set up a database (e.g., MongoDB).
- Implement JWT or another form of token-based authentication.

##### APIs
- User APIs: Registration, Login, Logout.
- Product APIs: Add, Update, Delete, and List products.
- Cart APIs: Add to cart, Remove from cart, List items in the cart, Checkout.

##### Testing
- Implement unit and integration tests using tools like Jest.
- Mock database interactions for unit tests.

##### Security
- Ensure passwords are hashed before saving.
- Secure sensitive routes (like product management) to be accessible only by admin users.
---
### Frontend (React)
##### User Interface
- Responsive design.
- Product listing page with a search functionality.
- User profile and order history page.
- Basic Admin interface for product management.
- Shopping cart page.

##### Routing
- Use React Router to manage navigation.

##### Testing
- Implement unit and integration tests using tools like Jest.
- Optional: End-to-end tests using tools like Cypress.

##### Code Quality
- Ensure components are modular and reusable.
- Proper error handling, showing appropriate messages to users.
- Use of hooks, functional components, and other modern React best practices.
---
### Evaluation Criteria
1. Functionality: Does the application work without errors?
2. Code Quality: Is the code clean, modular, and maintainable?
3. Scalability: Is the solution designed to scale?
4. Security: Are there any security vulnerabilities?
5. Testing: Are the tests meaningful and covering important aspects?
6. Documentation: Is the code well-commented? Is there a README detailing setup instructions and architecture decisions?


## Project Structure

```bash
mini-ecommerce/
├── backend/                  - Node.js backend code
│   ├── config/               - Configuration files (e.g., database setup)
│   ├── models/               - Mongoose data models
│   ├── routes/               - API route definitions
│   ├── middleware/           - Middleware (e.g., authentication)
│   ├── tests/                - Backend tests
│   └── index.js              - Entry point
├── frontend/                 - React frontend code
│   ├── src/
│   │   ├── components/       - React components
│   │   ├── pages/            - Pages or views
│   │   ├── state/            - State management (Redux/Context)
│   │   ├── tests/            - Frontend tests
│   │   ├── App.js            - Main App component
│   │   └── index.js          - Entry point
│   └── package.json          - Frontend dependencies
└── README.md
```

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB

### Setup & Installation
1. Clone the Repository:
```bash
git clone https://github.com/hcevikGA/ecommerce-test-ga
cd ecommerce-test-ga
```

2. Install dependencies:
```bash
cd ecommerce-backend/
npm install
cd ../ecommerce-frontend/
npm install
```

### Running the Application
1. Run Backend:
```bash
cd ecommerce-backend/
npm run dev
```

2. Run Frontend:
```bash
cd ecommerce-frontend/
npm start
```
The React app should open automatically in your browser, typically at http://localhost:3000.


### Testing
1. Backend Tests:
```bash
cd ecommerce-backend/
npm test
```

2. Frontend Tests:
```bash
cd ecommerce-frontend/
npm test
```

For end-to-end tests using Cypress:
```bash
npm run cypress:open
```
   
