import {baseUrl} from './baseUrl.js';

// post data to local storage
export const postData = (userData, bodyContent) => {
    console.log('post Data', userData, bodyContent)

    fetch(`${baseUrl}/users`)
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

export const getData = async (token) => {
    let dataArr;
    try{
        const response = await fetch(`${baseUrl}/${token}`)
        if(!response.ok){
            throw new Error(`error in status: ${response.status}`);
        }
        const data = await response.json();
        console.log('fetched data', data);
        return data; 
    } catch (err) {
        console.log(err)
        alert("Error while fetching the data")
    };
}