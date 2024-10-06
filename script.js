$("#form-account").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        gender: {
            required: true,
            minlength: 4,
            maxlength: 15
        },
        age: {
            required: true,
            maxlenght:3
        },
        phone: {
            required: true,
            minlenght: 10,
            maxlenght: 14
        },
        email: {
            required: true
        },
        address: {
            required: false,
            maxlenght:50
        }
    },
    messages: {
        name: {
            required: "Name  is required",
            minlength: "Mininum 2 charecters",
            maxlength: "Do not exceed 50 characters"
        },
        gender: {
            required: "Please Enter Your Gender",
            minlength: "minmum 4 characters",
            maxlength: "maximum 15 characters"
        },
        age: {
            required: "should be above 18"
        
        },
        address: {
            maxlenght:"Do not exceed 50 charatcters"
        },
        phone: {
            required: "Please enter your Phone Number ",
            minlenght: "minimum 10 digits",
            maxlenght: "maximum 14 digits"
        },

    }
}

)