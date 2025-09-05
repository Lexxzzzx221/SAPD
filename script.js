document.addEventListener("DOMContentLoaded", () => {
  // Highlight navbar active
  const path = window.location.pathname;
  if (path.includes("index.html") || path.endsWith("/")) {
    document.getElementById("nav-home")?.classList.add("active");
  } else if (path.includes("list.html")) {
    document.getElementById("nav-list")?.classList.add("active");
  }

  // Cek halaman form
  const params = new URLSearchParams(window.location.search);
  const template = params.get("template");
  const formContainer = document.getElementById("dynamic-form");
  const title = document.getElementById("form-title");

  if (!formContainer) return;

  if (template === "applicant") {
    title.textContent = "Applicant Form Generator";
    formContainer.innerHTML = `
      <label>Full Name: <input type="text" id="fullname"></label><br>
      <label>Gender: <input type="text" id="gender"></label><br>
      <label>Date of Birth: <input type="text" id="dob"></label><br>
      <label>Residential Address: <input type="text" id="address"></label><br>
      <label>Contact Number: <input type="text" id="phone"></label><br>
      <label>License Image Link: <input type="text" id="license"></label><br>
      <button type="button" onclick="generateApplicant()">Generate BBCode</button>
    `;
  } else if (template === "certificate") {
    title.textContent = "Certificate Form Generator";
    formContainer.innerHTML = `
      <label>Full Name: <input type="text" id="fullname"></label><br>
      <label>Date of Birth: <input type="text" id="dob"></label><br>
      <label>Place of Birth: <input type="text" id="pob"></label><br>
      <label>Gender: <input type="text" id="gender"></label><br>
      <label>Current Address: <input type="text" id="address"></label><br>
      <label>Phone Number: <input type="text" id="phone"></label><br>
      <label>Nationality: <input type="text" id="nationality"></label><br>
      <label>Occupation: <input type="text" id="occupation"></label><br>
      <label>Purpose: <input type="text" id="purpose"></label><br>
      <label>Your Name (Signature): <input type="text" id="signame"></label><br>
      <button type="button" onclick="generateCertificate()">Generate BBCode</button>
    `;
  }
});

// Fungsi generate applicant
function generateApplicant() {
  const name = document.getElementById("fullname").value;
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const license = document.getElementById("license").value;

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=140]https://www.upload.ee/image/18558723/LICENSING_ENFORCEMENT_UNIT.png[/img-resize][/center]

[divbox=black][color=white][center]APPLICANT INFORMATION[/center][/color][/divbox]
[list=none]
[b]1.[/b] Full Name [b]:[/b]
[list=none]
${name}
[/list]
[b]2.[/b] Gender [b]:[/b]
[list=none]
${gender}
[/list]
[b]3.[/b] Date of Birth (DD/MM/YYYY) [b]:[/b]
[list=none]
${dob}
[/list]
[b]4.[/b] Residential Address [b]:[/b]
[list=none]
${address}
[/list]
[b]5.[/b] Contact Number [b]:[/b]
[list=none]
${phone}
[/list]
[b]6.[/b] Driving Licenses [b]:[/b]
[list=none]
[altspoiler=License Attachments][img]${license}[/img][/altspoiler]
[/list][/list]

[divbox=black][color=white][center]RULES & AGREEMENT[/center][/color][/divbox]
[quote]By submitting this application, I acknowledge that the information provided is true and accurate.  
I fully understand and accept that any violation of Trucking License Regulations or SAPD Penal Code may result in penalties, including but not limited to:  
[b]Revocation of my license, truck impoundment, fines, and/or legal consequences.[/b]  
I agree to abide by all traffic laws and regulations as stated by the authorities and will uphold responsible trucking conduct at all times.[/quote]

Los Santos, [b]DD/MMM/YYYY[/b]  

[i]${name}[/i]
[/divbox]`;
}

// Fungsi generate certificate
function generateCertificate() {
  const name = document.getElementById("fullname").value;
  const dob = document.getElementById("dob").value;
  const pob = document.getElementById("pob").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const nationality = document.getElementById("nationality").value;
  const occupation = document.getElementById("occupation").value;
  const purpose = document.getElementById("purpose").value;
  const signame = document.getElementById("signame").value;

  document.getElementById("bbcode-output").value = `[divbox=white]
[divbox=black][color=white][center]PERSONAL INFORMATION[/center][/color][/divbox]

[list] 
[*] [b]Full Name:[/b] ${name} 
[*] [b]Date of Birth:[/b] ${dob} 
[*] [b]Place of Birth:[/b] ${pob} 
[*] [b]Gender:[/b] ${gender} 
[*] [b]Current Address:[/b] ${address} 
[*] [b]Phone Number:[/b] ${phone} 
[*] [b]Nationality:[/b] ${nationality} 
[*] [b]Occupation:[/b] ${occupation} 
[/list]

[divbox=black][color=white][center]ADDITIONAL INFORMATION[/center][/color][/divbox]

[list] 
[*] [b]Purpose:[/b] ${purpose} 
[/list]

[divbox=black][color=white][center]TERMS AND AGREEMENTS[/center][/color][/divbox]

[i]This Certificate has been requested to the Police Department. All the data above will be permanently stored in our Administrative Service Offices. This certificate will display all of your records and database entries during your time in San Andreas, including any past charges.[/i]  

[hr][/hr]  

[center][b]${name}[/b][/center]  

[hr][/hr]  

[right]  
Commanding Officer of the Detective Bureau  
Commander Salvador Moreira
[/right]  

[hr][/hr]  

[divbox=transparent]  
[divbox=black][color=white][center]LICENSE APPLICATION DECLARATION[/center][/color][/divbox]  

[list=none][b]Deklarasi:[/b]  
[quote]Saya, ${name}, telah membaca halaman [url=]GCLU Hours[/url] dengan teliti dan memahami jadwal kedatangan yang telah ditetapkan.  
Saya, ${name}, juga menyetujui bahwa jika saya [b]MASIH[/b] menggunakan [i]666 / 911[/i] untuk menanyakan informasi yang telah tersedia dalam GCLU Hours, maka saya menerima konsekuensi berupa [b]penolakan langsung[/b] atas formulir saya.[/quote][/list]  

[list=none][b]Declaration:[/b]  
[quote]I, ${name}, have read and understood the [url=]GCLU Hours[/url] page and acknowledge the designated appointment times.  
I, ${name}, also agree that if I [b]STILL[/b] use [i]666 / 911[/i] to ask about something already explained in the GCLU Hours, my form will be [b]DENIED immediately[/b].[/quote][/list]  

Los Santos, DD/MMM/YYYY  
[u]${signame}[/u]  
[/divbox]`;
}

function copyOutput() {
  let textarea = document.getElementById("bbcode-output");
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("✅ BBCode berhasil disalin!");
}
