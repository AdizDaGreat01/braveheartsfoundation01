// Initialize EmailJS (assuming this should be called first)
function myComponent() {
    emailjs.init({
        publicKey: "OVS5GwCfr3lYeiEeQ",
      });
    };


// Function to handle form submission and sessionStorage storage
function sendInfo(event) {


    event.preventDefault(); // Prevent form submission

    // Get form input values
    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;
    let email = document.getElementById("Email").value;
    let phoneNumber = document.getElementById("PhoneNumber").value;
    let textArea = document.getElementById("floatingTextarea").value;

    console.log("FirstName", firstName);
    console.log("LastName", lastName);
    console.log("Email", email);
    console.log("PhoneNumber", phoneNumber);
    console.log("floatingTextarea", textArea);

    // Store form data in sessionStorage
    sessionStorage.setItem("FirstName", firstName);
    sessionStorage.setItem("LastName", lastName);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("PhoneNumber", phoneNumber);
    sessionStorage.setItem("floatingTextarea", textArea);

    emailjs.init({
        publicKey: "OVS5GwCfr3lYeiEeQ",
      });

      emailjs.send("service_l1k8ncw", "brave_hearts11", {

        to_name: "braveheartsfoundation389@gmail.com",


        from_name: email,

        first_name:  firstName, 
        last_name:  lastName,
        user_email:  email,
        user_phonenumber:  PhoneNumber,
        feedback:  textArea,
}).then(function() {
    alert("Mail sent successfully");
}).catch(function(error) {
    console.error("Error sending email:", error);
    alert("Error sending email");
});
    // Assuming you want to send email on form submission
   
}

// Function to handle another action (assuming its purpose)
function myFunction(event) {


    event.preventDefault();

    let Firstname = document.getElementById("firstName").value;
    let Lastname = document.getElementById("lastName").value;
    let emaIl = document.getElementById("eMail").value;
    let Phonenumber = document.getElementById("phoneNumber").value;
    let TextArea = document.getElementById("FloatingtextArea").value;

    console.log("firstName", Firstname);
    console.log("lastName", Lastname);
    console.log("eMail", emaIl);
    console.log("phoneNumber", Phonenumber);
    console.log("FloatingtextArea", TextArea);

    // Store data in sessionStorage or perform other actions
    sessionStorage.setItem("FirstName", Firstname);
    sessionStorage.setItem("LastName", Lastname);
    sessionStorage.setItem("Email", emaIl);
    sessionStorage.setItem("PhoneNumber", Phonenumber);
    sessionStorage.setItem("floatingTextarea", TextArea);


    emailjs.init({
        publicKey: "OVS5GwCfr3lYeiEeQ",
      });

    emailjs.send("service_l1k8ncw", "brave_hearts11", {

        to_name: "braveheartsfoundation389@gmail.com",

        from_name:  emaIl,

        first_name:  Firstname, 
        last_name:  Lastname,
        user_email:  emaIl,
        user_phonenumber:  Phonenumber,
        feedback:  TextArea,
}).then(function() {
    alert("Mail sent successfully");
}).catch(function(error) {
    console.error("Error sending email:", error);
    alert("Error sending email");
});
    // Example of another action you might perform here
    // e.g., updating UI, making another API call, etc.
}

// Add event listeners
// Add event listener for another action button (if exists)
// document.getElementById("anotherButtonId").addEventListener("click", myFunction);

// Initialize EmailJS


// myComponent();

const textElement = document.getElementById('changingText');

const texts = [
  { text: 'LOVED', color: 'green' },
  { text: 'VALUED', color: 'orange' },
  { text: 'CHERISHED', color: 'purple' },
  { text: 'SUPPORTED', color: 'cyan' }
];

let index = 0;

function changeTextAndColor() {
  textElement.textContent = texts[index].text;
  textElement.style.color = texts[index].color;
  
  index++;
  if (index >= texts.length) {
    index = 0;
  }
}

// Change text and color every 2 seconds
setInterval(changeTextAndColor, 2000);

function changeLanguage(langCode) {
    // Define language mappings (you can extend this as needed)
    const languageMap = {
        'en': {
            'content': ''
        },
        'fr': {
            'content': ''
        }
        // Add more translations here
    };
    
    // Get the content element
    const contentElement = document.querySelector('languages');
    
    // Update the content based on selected language
    if (languageMap.hasOwnProperty(langCode)) {
        // contentElement.textContent = languageMap[langCode]['content'];
    } else {
        console.error('Translation not found for language code:', langCode);
    }
}




 function readMe(){
    const readMore = document.getElementById("readMore");
 }

 function backButton(){
    return window.location.href = `index.html`
};

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })