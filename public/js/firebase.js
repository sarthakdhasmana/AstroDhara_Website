// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMMuWuHXqgca9bhNvhY6JgFbdJRublMe4",
    authDomain: "astrodhara-website.firebaseapp.com",
    projectId: "astrodhara-website",
    storageBucket: "astrodhara-website.appspot.com",
    messagingSenderId: "462679883179",
    appId: "1:462679883179:web:2d2d6558da875013cfe6ee",
    measurementId: "G-J9PTYDL9YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//app analytics added
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);





const submit = document.querySelector('.formSubmitBtn');

submit.addEventListener('click', () => {
    //on click of submit save the value of user
    addUserValue();
})


async function addUserValue() {

    var Name = returnUserValues('form_UserName');
    var Dob = returnUserValues('form_UserDob');
    var PhoneNo = returnUserValues('form_UserPhoneNo');
    var Message = returnUserValues('form_UserMessage');

    try {

        const docRef = await addDoc(collection(db, "Website_User"), {
            name: Name,
            dob: Dob,
            phoneNo: PhoneNo,
            message: Message
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

//get the data of Form
function returnUserValues(Selector) {
    var value = document.getElementById(Selector).value;
    return value;
}

