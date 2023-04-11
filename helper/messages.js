module.exports = {
    name: "Name must be at least 3 characters",
    email: {
        required: 'Email is required',
        invalid: 'Invalid email format',
        taken: 'Email is already registered'
    },
    mobile: {
        required: 'Mobile number is required',
        invalid: 'Invalid mobile format',
        taken: 'Mobile number is already registered',
        length: 'Mobile number length should be between 10 and 15'
    },
    password: {
        required: 'Password is required',
        match:'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        length: 'Password must be at least 6 characters'
    },
    invalidCredentials: "Invalid credentials",
    serverError: "Internal server error",
    createUser: "User create successfully!",
    loginUser: "login successfully!"
}