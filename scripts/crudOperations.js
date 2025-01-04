// post data to local storage
export const postData = (userData, bodyContent) => {
    console.log('post Data', userData, bodyContent)

    fetch(`https://unmarred-blue-delivery.glitch.me/users`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "users Data from API")

        let user = data.filter((el, i) => el.email == userData.email)
        if(user.length!=0) {
            //user found
            alert("User already registered, please login");
            window.location.href = "login.html";
        }
        else{
            //user not present
            fetch(`https://unmarred-blue-delivery.glitch.me/users`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: bodyContent
            })
            .then(() => {
                alert("Signup Successful");
                window.location.href = "login.html"
            });
        }
    })
    .catch((err) => {
        console.log(err)
        alert("Somthing went wrong, Please try again later")
    });
};
