// Function to download the resume as PDF
function downloadResumeAsPDF() {
    const { jsPDF } = window.jspdf;  // Get jsPDF from global window object
    const doc = new jsPDF();

    // Get the resume content
    const name = (document.getElementById('name') as HTMLElement).innerText;
    const email = (document.getElementById('email') as HTMLElement).innerText;
    const phone = (document.getElementById('phone') as HTMLElement).innerText;
    const education = (document.getElementById('education') as HTMLElement).innerText;
    const experience = (document.getElementById('experience') as HTMLElement).innerText;
    const skills = (document.getElementById('skills') as HTMLElement).innerText;

    // Add the content to the PDF
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Education:`, 10, 40);
    doc.text(education, 10, 50);
    doc.text(`Work Experience:`, 10, 60);
    doc.text(experience, 10, 70);
    doc.text(`Skills:`, 10, 80);
    doc.text(skills, 10, 90);

    // Save the PDF with the name of the user
    doc.save(`${name}_resume.pdf`);
}

// Attach event listener to the button
const downloadButton = document.getElementById('download-btn');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadResumeAsPDF);
}

