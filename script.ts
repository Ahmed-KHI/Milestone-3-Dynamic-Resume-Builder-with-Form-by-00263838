
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


    // Get references to form elements using their IDs


    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const expierenceElement = document.getElementById('expierence') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    // Check if all form elements are present

    if (nameElement && emailElement && phoneElement && educationElement && expierenceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const expierence = expierenceElement.value;
        const skills = skillsElement.value;




        //create resume output
        const resumeOutput = `
    <h2>Resume</h2>
    
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number :</strong> ${phone} </p>
    
    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Expierence</h3>
    <p>${expierence}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>
    `;


        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
        } else {
            console.error('the resume output elements are missing')
        }
    } else {
        console.error('one or more output elements are missing')




    }
})