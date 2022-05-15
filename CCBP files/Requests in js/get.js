let options = {
    method: "GET"
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