let data = {
    name: "Subham",
    gender: "Male",
    email: "subhampanda@gmail.com",
    status: "Active"
};


let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 3e5a5082dfcd6f02fde85b837026a1ebc044b8be62ad5de99c13b8c06104a191"
    },

    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(
        function(response) {
            return response.text();
        })
    .then(
        function(data) {
            let pdata = JSON.parse(data)
            console.log(pdata)
        })