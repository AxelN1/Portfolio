function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        message: document.getElementById("msg").value
    };

    emailjs.send("gmail", "template_1opay9z", tempParams)
        .then(function(res) {
            console.log("success", res.status);
        })
    }