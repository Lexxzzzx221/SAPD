document.addEventListener("DOMContentLoaded", () => {
  // Highlight navbar active
  const path = window.location.pathname;
  if (path.includes("index.html") || path.endsWith("/")) {
    document.getElementById("nav-home")?.classList.add("active");
  } else if (path.includes("list.html")) {
    document.getElementById("nav-list")?.classList.add("active");
  } else if (path.includes("sapd.html")) {
    document.getElementById("nav-list")?.classList.add("active");
  }

  // Cek halaman form
  const params = new URLSearchParams(window.location.search);
  const template = params.get("template");
  const formContainer = document.getElementById("dynamic-form");
  const title = document.getElementById("form-title");

  if (!formContainer) return;

  if (template === "applicant") {
    title.textContent = "LICENSES HEAVY/LORY/LUMBER";
    formContainer.innerHTML = `
      <label>Full Name: <input type="text" id="fullname" placeholder="Example: Christoper Bione"></label><br>
      <label>Gender: <input type="text" id="gender" placeholder="Example: Male/Female"></label><br>
      <label>Date of Birth: <input type="text" id="dob" placeholder="Example: 12/12/2000"></label><br>
      <label>Residential Address: <input type="text" id="address" placeholder="Example: Idlewood, Richman, Temple, Etc"></label><br>
      <label>Contact Number: <input type="text" id="phone" placeholder="Example: 12345"></label><br>
      <label>License Image Link: <input type="text" id="license" placeholder="Only link imgur or upload.ee"></label><br>
      <label>Today's Date: <input type="text" id="ttl" placeholder="Enter the date when you make a license"></label><br>
      <button type="button" onclick="generateApplicant()">Generate BBCode</button>
    `;
  } else if (template === "certificate") {
    title.textContent = "Certificate of Good Conduct";
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
      <label>Today's Date: <input type="text" id="ttl"></label><br>
      <button type="button" onclick="generateCertificate()">Generate BBCode</button>
    `;
  } else if (template === "Accept") {
    title.textContent = "Respon Accept";
    formContainer.innerHTML = `
      <label>Full Name User: <input type="text" id="name"></label><br>
      <label>Mr/Ms: <input type="text" id="mrorms"></label><br>
      <label>Your Signature: <input type="text" id="signature"></label><br>
      <label>Your Rank: <input type="text" id="rank"></label><br>
      <label>Your Name: <input type="text" id="name1"></label><br>
      <button type="button" onclick="generateAccept()">Generate BBCode</button>
    `;
  }  else if (template === "Pending") {
    title.textContent = "Respon Pending";
    formContainer.innerHTML = `
      <label>Full Name User: <input type="text" id="name"></label><br>
      <label>Mr/Ms: <input type="text" id="mrorms"></label><br>
      <label>Reasons:</label><textarea id="reasons"></textarea><br>
      <label>Your Signature: <input type="text" id="signature"></label><br>
      <label>Your Rank: <input type="text" id="rank"></label><br>
      <label>Your Name: <input type="text" id="name1"></label><br>
      <button type="button" onclick="generatePending()">Generate BBCode</button>
    `;
  } else if (template === "Denied") {
    title.textContent = "Respon Denied";
    formContainer.innerHTML = `
      <label>Full Name User: <input type="text" id="name"></label><br>
      <label>Mr/Ms: <input type="text" id="mrorms"></label><br>
      <label>Reasons:</label><textarea id="reasons"></textarea><br>
      <label>Your Signature: <input type="text" id="signature"></label><br>
      <label>Your Rank: <input type="text" id="rank"></label><br>
      <label>Your Name: <input type="text" id="name1"></label><br>
      <button type="button" onclick="generatePending()">Generate BBCode</button>
    `;
  } else if (template === "Paid") {
    title.textContent = "Respon Paid";
    formContainer.innerHTML = `
      <label>Enter valid until here: <input type="text" id="valid"></label><br>
      <button type="button" onclick="generatePaid()">Generate BBCode</button>
    `;
  } else if (template === "Expired") {
    title.textContent = "Respon Expired";
    formContainer.innerHTML = `
      <label>Enter the expired date: <input type="text" id="expired"></label><br>
      <button type="button" onclick="generateExpired()">Generate BBCode</button>
    `;
  } else if (template === "Accept1") {
    title.textContent = "Respon Accept";
    formContainer.innerHTML = `
      <label>Full Name User: <input type="text" id="name"></label><br>
      <label>Mr/Ms: <input type="text" id="mrorms"></label><br>
      <label>Your Signature: <input type="text" id="signature"></label><br>
      <label>Your Rank: <input type="text" id="rank"></label><br>
      <label>Your Name: <input type="text" id="name1"></label><br>
      <button type="button" onclick="generateAccept1()">Generate BBCode</button>
    `;
  }  else if (template === "Pending1") {
    title.textContent = "Respon Pending";
    formContainer.innerHTML = `
      <label>Full Name User: <input type="text" id="name"></label><br>
      <label>Mr/Ms: <input type="text" id="mrorms"></label><br>
      <label>Reasons:</label><textarea id="reasons"></textarea><br>
      <label>Your Signature: <input type="text" id="signature"></label><br>
      <label>Your Rank: <input type="text" id="rank"></label><br>
      <label>Your Name: <input type="text" id="name1"></label><br>
      <button type="button" onclick="generatePending1()">Generate BBCode</button>
    `;
  } else if (template === "Denied1") {
    title.textContent = "Respon Denied";
    formContainer.innerHTML = `
      <label>Full Name User: <input type="text" id="name"></label><br>
      <label>Mr/Ms: <input type="text" id="mrorms"></label><br>
      <label>Reasons:</label><textarea id="reasons"></textarea><br>
      <label>Your Signature: <input type="text" id="signature"></label><br>
      <label>Your Rank: <input type="text" id="rank"></label><br>
      <label>Your Name: <input type="text" id="name1"></label><br>
      <button type="button" onclick="generatePending1()">Generate BBCode</button>
    `;
  } else if (template === "Checking") {
    title.textContent = "Respon Checking Result";
    formContainer.innerHTML = `
      <label>Full Name User: <input type="text" id="name"></label><br>
      <label>Date of Birth: <input type="text" id="dob"></label><br>
      <label>Place of Birth: <input type="text" id="pob"></label><br>
      <label>Gender: <input type="text" id="gender"></label><br>
      <label>Current Adress: <input type="text" id="adress"></label><br>
      <label>Certificate Number: <input type="text" id="certificate"></label><br>
      <label>Valid From: <input type="text" id="validf"></label><br>
      <label>Valid To: <input type="text" id="validt"></label><br>
      <label>Your Signature: <input type="text" id="signature"></label><br>
      <label>Your Rank: <input type="text" id="rank"></label><br>
      <label>Your Name: <input type="text" id="name1"></label><br></br>
      <button type="button" onclick="generateChecking()">Generate BBCode</button>
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
  const ttl = document.getElementById("ttl").value;

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

Los Santos, ${ttl}  

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
  const ttl = document.getElementById("ttl").value;

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

Los Santos, ${ttl}
[u]${signame}[/u]  
[/divbox]`;
}

// Fungsi generate Accept
function generateAccept() {
  const name = document.getElementById("name").value;
  const mrorms = document.getElementById("mrorms").value;
  const signature = document.getElementById("signature").value;
  const rank = document.getElementById("rank").value;
  const name1 = document.getElementById("name1").value;

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=193]https://i.imgur.com/HfiJgbV.png[/img-resize]  [img-resize=200]https://i.imgur.com/gEdaiX7.png[/img-resize][/center]
[center][size=150][b]Compliance & Development Bureau - Regulatory Licensing 
& Enforcement Unit Division[/b][/size][/center]
[hr]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Trucking License[/color][/b][/size][/center][/divbox]

Dear ${mrorms} ${name},

We have reviewed your application and records, and after much consideration, we would like to inform you that your application has been [b][color=#00BF00]ACCEPTED[/color][/b]. However, this is not the final step. You are required to pay the administration fee in advance by visiting one of our head offices when we are [url=https://sapd.legacyrealityproject.com/viewtopic.php?p=184#p184]available[/url].

[b]Note(s):[/b]
[list]
[*]You have 7 days to complete the administration. [url=https://sapd.legacyrealityproject.com/viewtopic.php?p=184#p184]RLE Hours[/url].[/list]


Sincerely,
[img]${signature}[/img]
[b]${rank}[/b], ${name1}[/divbox]`;
}

// Fungsi generate Pending
function generatePending() {
  const name = document.getElementById("name").value;
  const mrorms = document.getElementById("mrorms").value;
  const reasonsInput = document.getElementById("reasons").value;
  const signature = document.getElementById("signature").value;
  const rank = document.getElementById("rank").value;
  const name1 = document.getElementById("name1").value;
  
  const reasons = formatReasons(reasonsInput);

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=193]https://i.imgur.com/HfiJgbV.png[/img-resize]  [img-resize=200]https://i.imgur.com/gEdaiX7.png[/img-resize][/center]
[center][size=150][b]Compliance & Development Bureau - Regulatory Licensing 
& Enforcement Unit Division[/b][/size][/center]
[hr]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Trucking License[/color][/b][/size][/center][/divbox]

Dear ${mrorms} ${name},

We have received your application and after further review, and after much consideration, we would like to inform you that your application has entered the [b][color=#FF8000]PENDING[/color][/b] stage for the following reasons:

[b]Reason(s):[/b]
${reasons}

[b]Note(s):[/b]
[list]
[*]You have 7 days to correct this
[/list]

Sincerely,
[img]${signature}[/img]
[b]${rank}[/b], ${name1}[/divbox]`;
}

// Fungsi generate Denied
function generateDenied() {
  const name = document.getElementById("name").value;
  const mrorms = document.getElementById("mrorms").value;
  const reasonsInput = document.getElementById("reasons").value;
  const signature = document.getElementById("signature").value;
  const rank = document.getElementById("rank").value;
  const name1 = document.getElementById("name1").value;
  
  const reasons = formatReasons(reasonsInput);

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=193]https://i.imgur.com/HfiJgbV.png[/img-resize]  [img-resize=200]https://i.imgur.com/gEdaiX7.png[/img-resize][/center]
[center][size=150][b]Compliance & Development Bureau - Regulatory Licensing 
& Enforcement Unit Division[/b][/size][/center]
[hr]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Trucking License[/color][/b][/size][/center][/divbox]

Dear ${mrorms} ${name},

We have received your application and after further review, and after careful consideration, we would like to inform you that your application has been [color=#FF0000][b]DENIED[/b][/color] for the following reasons:

[b]Reason(s):[/b]
${reasons}

[b]Note(s):[/b]
[list]
[*]You can create a new thread if you want this license
[/list]


Sincerely,
[img]${signature}[/img]
[b]${rank}[/b], ${name1}[/divbox]`;
}

// Fungsi generate Paid
function generatePaid() {
  const valid = document.getElementById("valid").value;

  document.getElementById("bbcode-output").value = `[divbox=WHITE]
[center][SIZE=200][b][color=#00BF00]PAID[/color][/b][/SIZE][/center][/divbox]
[divbox=white]
[center][SIZE=100][b]VALID UNTIL ${valid}[/b][/SIZE][/center]
[/divbox]`;
}

// Fungsi generate Expired
function generateExpired() {
  const expired = document.getElementById("expired").value;

  document.getElementById("bbcode-output").value = `[divbox=WHITE]
[center][SIZE=200][b][color=RED]EXPIRED[/color][/b][/SIZE][/center][/divbox]
[divbox=white]
[center][SIZE=100][b]We will archive your topic after the date ${expired} has passed.[/b][/SIZE][/center]
[/divbox]`;
}

// Fungsi generate Accept CGC
function generateAccept1() {
  const name = document.getElementById("name").value;
  const mrorms = document.getElementById("mrorms").value;
  const signature = document.getElementById("signature").value;
  const rank = document.getElementById("rank").value;
  const name1 = document.getElementById("name1").value;

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=193]https://i.imgur.com/HfiJgbV.png[/img-resize]  [img-resize=200]https://i.imgur.com/gEdaiX7.png[/img-resize][/center]
[center][size=150][b]Compliance & Development Bureau - Regulatory Licensing 
& Enforcement Unit Division[/b][/size][/center]
[hr]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Certificate of Good Conduct[/color][/b][/size][/center][/divbox]

Dear ${mrorms} ${name},

We have reviewed your application and records, and after much consideration, we would like to inform you that your application has been [b][color=#00BF00]ACCEPTED[/color][/b]. However, this is not the final step. You are required to pay the administration fee in advance by visiting one of our head offices when we are [url=https://sapd.legacyrealityproject.com/viewtopic.php?p=184#p184]available[/url].

[b]Note(s):[/b]
[list]
[*]You have 7 days to complete the administration. [url=https://sapd.legacyrealityproject.com/viewtopic.php?p=184#p184]RLE Hours[/url].[/list]


Sincerely,
[img]${signature}[/img]
[b]${rank}[/b], ${name1}[/divbox]`;
}

// Fungsi generate Pending
function generatePending1() {
  const name = document.getElementById("name").value;
  const mrorms = document.getElementById("mrorms").value;
  const reasonsInput = document.getElementById("reasons").value;
  const signature = document.getElementById("signature").value;
  const rank = document.getElementById("rank").value;
  const name1 = document.getElementById("name1").value;
  
  const reasons = formatReasons(reasonsInput);

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=193]https://i.imgur.com/HfiJgbV.png[/img-resize]  [img-resize=200]https://i.imgur.com/gEdaiX7.png[/img-resize][/center]
[center][size=150][b]Compliance & Development Bureau - Regulatory Licensing 
& Enforcement Unit Division[/b][/size][/center]
[hr]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Certificate of Good Conduct[/color][/b][/size][/center][/divbox]

Dear ${mrorms} ${name},

We have received your application and after further review, and after much consideration, we would like to inform you that your application has entered the [b][color=#FF8000]PENDING[/color][/b] stage for the following reasons:

[b]Reason(s):[/b]
${reasons}

[b]Note(s):[/b]
[list]
[*]You have 7 days to correct this
[/list]

Sincerely,
[img]${signature}[/img]
[b]${rank}[/b], ${name1}[/divbox]`;
}

// Fungsi generate Denied
function generateDenied1() {
  const name = document.getElementById("name").value;
  const mrorms = document.getElementById("mrorms").value;
  const reasonsInput = document.getElementById("reasons").value;
  const signature = document.getElementById("signature").value;
  const rank = document.getElementById("rank").value;
  const name1 = document.getElementById("name1").value;
  
  const reasons = formatReasons(reasonsInput);

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=193]https://i.imgur.com/HfiJgbV.png[/img-resize]  [img-resize=200]https://i.imgur.com/gEdaiX7.png[/img-resize][/center]
[center][size=150][b]Compliance & Development Bureau - Regulatory Licensing 
& Enforcement Unit Division[/b][/size][/center]
[hr]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Certificate of Good Conduct[/color][/b][/size][/center][/divbox]

Dear ${mrorms} ${name},

We have received your application and after further review, and after careful consideration, we would like to inform you that your application has been [color=#FF0000][b]DENIED[/b][/color] for the following reasons:

[b]Reason(s):[/b]
${reasons}

[b]Note(s):[/b]
[list]
[*]You can create a new thread if you want this license
[/list]


Sincerely,
[img]${signature}[/img]
[b]${rank}[/b], ${name1}[/divbox]`;
}

// Fungsi generate Denied
function generateChecking() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const pob = document.getElementById("pob").value;
  const gender = document.getElementById("gender").value;
  const adress = document.getElementById("adress").value;
  const certificate = document.getElementById("certificate").value;
  const validf = document.getElementById("validf").value;
  const validt = document.getElementById("validt").value;
  const signature = document.getElementById("signature").value;
  const rank = document.getElementById("rank").value;
  const name1 = document.getElementById("name1").value;

  document.getElementById("bbcode-output").value = `[divbox=white][center][img-resize=193]https://i.imgur.com/HfiJgbV.png[/img-resize]  [img-resize=200]https://i.imgur.com/gEdaiX7.png[/img-resize][/center]
[center][size=150][b]Compliance & Development Bureau - Regulatory Licensing 
& Enforcement Unit Division[/b][/size][/center]
[hr]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Applicant Information[/color][/b][/size][/center][/divbox]

[list]
[*][b]Full name:[/b] ${name}
[*][b]Date of Birth:[/b] ${dob}
[*][b]Place of Birth:[/b] ${pob}
[*][b]Gender:[/b] ${gender}
[*][b]Current Address:[/b] ${adress}
[/list]
[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Checking Result[/color][/b][/size][/center][/divbox]

Based on the MDC examination that has been carried out on the person with the information above, it is stated that the person with the information above is [b]clear from any criminal record[/b] during his life in the state of San Andreas.

[divbox=#0000BF][center][size=100][b][color=#FFFFFF]Checking Result[/color][/b][/size][/center][/divbox]

[list]
[*][b]Certificate Number:[/b] ${certificate}
[*][b]Valid From:[/b] ${validf}
[*][b]Valid To:[/b] ${validt}
[/list]

Sincerely,
[img]${signature}[/img]
[b]${rank}[/b], ${name1}[/divbox]`;
}

function copyOutput() {
  let textarea = document.getElementById("bbcode-output");
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("✅ BBCode berhasil disalin!");
}

function formatReasons(inputText) {
  return "[list]\n" + 
    inputText
      .split("\n")                   // pecah per baris
      .map(r => r.trim())            // hapus spasi depan/belakang
      .filter(r => r.length > 0)     // buang baris kosong
      .map(r => "[*] " + r)          // tambahkan bullet BBCode
      .join("\n") + 
    "\n[/list]";
}

function copyCommand() {
  const cmd = document.getElementById("commandText");
  cmd.select();
  cmd.setSelectionRange(0, 99999); // for mobile
  navigator.clipboard.writeText(cmd.value);
  alert("Command copied: " + cmd.value);
}
