module.exports = {
    // Login and register
    status:{
        required: 'Status is required',
    },
    name:{
        required: 'Name is required',
        length:"Name must be at least 3 characters"
    },
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
        length: 'Password must be at least 6 characters',
        matchToConfimPassword:"matchToConfimPassword",
        matchToPassword:"matchToPassword",
        confirmMatch:"The confirmation password does not match the password.",
        confirmRequired: 'Confirm assword is required',
        currentPasswordIncorrect:"Current password is incorrect",
        differentPassword:'New password must be different from the old password',
        passwordChange:'Password changed successfully'
    },
    // End
    // Property
    property:{
        price:'Price is required',
        getProperty: "Property fetch successfully!",
        createProperty: "Property added successfully!",
        updateProperty: "Property updated successfully!",
        deleteProperty: "Property has been deleted!",
        notFound:"User not found"
    },
    // End
    // Auth
    auth:{
        invalidCredentials: "Invalid credentials",
        serverError: "Internal server error",
        createUser: "User create successfully!",
        loginUser: "login successfully!",
        unauthenticated:"Please authenticate using a valid token",
        notFound:"Role not found",
        userNotFound: "User not found"
    },
    // End
     // Role
     role:{
        required: 'Role is required',
        taken: 'Name is already registered',
        getRole: "Role fetch successfully!",
        createRole: "Role added successfully!",
        updateRole: "Role updated successfully!",
        deleteRole: "Role has been deleted!"
    },
    // End
    // User
    user:{
        getUser: "User fetch successfully!",  
        updateUser: "User updated successfully!",
        deleteUser: "User has been deleted!",
        required: 'User is required',
        propertyRealtor: ' Property realtor is required',
        profileUpdated:"Profile updated"

    },
    // End
    // Dashboard
    dashBoardCount: 'Count fetch seccessfully!',
    // End
    notFound: 'Id not found',
    // inquiry
    inquiry:{
        message: "Message is required",
        property: "Property is required",
        getInquiry: "Inquiry fetch successfully!",
        createInquiry: "Inquiry added successfully!",
        updateInquiry: "Inquiry updated successfully!",
        deleteInquiry: "Inquiry has been deleted!",
        notFound:"Property not found",
        getRealtors: "Realtor fetch successfully!",
        notRealtorFound:"No realtors found"
    }
    // End
}