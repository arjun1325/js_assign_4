$("#form-account").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        age: {
            required: true,
            minlenght: 1,
            maxlength: 2
        },
        gender: {
            required: true,
            minlength: 4,
            maxlength: 15
        },
        phone: {
            required: true,
            minlenght: 10,
            maxlength: 14
        },
        email: {
            required: true,
            email: true
        },
        address: {
            required: false,
            maxlength: 50
        }
    },



    messages: {
        name: {
            required: "Please enter your name",
            minlength: "Minumum 3 characters required",
            maxlength: "Cannot exceed 50 characters"
        },
        age: {
            required: "Mininum 18 years old",
        },
        gender: {
            required: "Type your gender",
            minlength: "Minumum 4 characters required",
            maxlength: "Cannot exceed 15 characters"
        },
        phone: {
            required: "Enter your phone number",
            minlenght: "Minumum 10 characters required",
            maxlength: "Cannot exceed 14 characters"
        },
        email: {
          required:"Enter mail id",
            email: "Enter a valid email id"
        },
        address: {
            required: "Not manditory",
            maxlength: "cannot exceed  50 characters"
        }
    }


}

)




