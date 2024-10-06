$("#form-account").validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
        },
        gender: {
            required: true,
        },
        age: {
            required: true
        },
        phone: {
            required: true
        },
        email: {
            required: true
        },
        address: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Name  is required",
            minlength: "Mininum 2 charecters"
        },
        gender: {
            required: "Please Enter Your Gender"
        },
        age: {
            required: "Enter your age"
        },

    }
}

)