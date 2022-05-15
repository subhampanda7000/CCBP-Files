let options = {
    method: "DELETE",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 3e5a5082dfcd6f02fde85b837026a1ebc044b8be62ad5de99c13b8c06104a191"
    },


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