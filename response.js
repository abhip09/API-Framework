function JsonArrayTraversal(object) {
    for (let key in object) {
        if (typeof object[key] === 'object') {
            JsonArrayTraversal(object[key]);
        } else {
            console.log(object[key]);
        }
    }
}
 
let jsonArray = {
    "name": "GeeksforGeeks",
    "location": "Noida",
    "Courses": [
        "DSA self paced course",
        "DevOps Bootcamp",
        "GATE preparation course"
    ],
    "data": {
        "scope": "openid profile email",
        "access_token": "eyJhbGciOiJSUzI1NiIsI"}
    }

 
JsonArrayTraversal(jsonArray);