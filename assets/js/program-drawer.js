const programData = {
    fikom: {
        badge: "Fakultas",
        title: "Fakultas Ilmu Komputer (FIKOM)",
        image: "assets/images/programs/teknik informatika.png",
        description:
            "Fakultas Ilmu Komputer Universitas Handayani Makassar berfokus pada pengembangan teknologi informasi, kecerdasan buatan, rekayasa perangkat lunak, keamanan siber, jaringan komputer, dan transformasi digital. Kurikulum dirancang mengikuti kebutuhan industri sehingga lulusan siap bersaing di tingkat nasional maupun internasional.",
        programs: [
            "S1 Sistem Komputer",
            "S1 Teknik Informatika",
          "S1 Sistem Informasi"
        ],

        facilities: [
            "Laboratorium Komputer",
            "Laboratorium Jaringan",
            "Laboratorium Multimedia",
            "Laboratorium Pemrograman",
            "Internet Berkecepatan Tinggi"
        ],

        careers: [
            "Software Engineer",
            "Web Developer",
            "Mobile Developer",
            "UI/UX Designer",
            "Network Engineer",
            "Cyber Security",
            "AI Engineer",
            "Data Analyst"
        ]
    },

    magister: {
        badge: "Program Pascasarjana",
        title: "Magister Sistem Komputer",
        image: "assets/images/programs/sistem informasi.png",
        description:
            "Program Magister Sistem Komputer mempersiapkan mahasiswa menjadi peneliti, dosen, analis sistem, dan pemimpin transformasi digital melalui pendidikan berbasis riset dan inovasi teknologi.",
        programs: [
            "S2 Sistem Komputer"
        ],

        facilities: [
            "Laboratorium Riset",
            "Digital Library",
            "Seminar Internasional",
            "Ruang Diskusi Modern"
        ],

        careers: [
         "Dosen",
            "Peneliti",
            "IT Consultant",
            "Chief Technology Officer",
            "System Architect"
        ]
    },

    fhis: {
        badge: "Fakultas",
        title: "Fakultas Hukum & Ilmu Sosial",
        image: "assets/images/programs/manajemen informatika.png",
        description:
            "Fakultas Hukum dan Ilmu Sosial menghasilkan lulusan yang profesional, berintegritas, memiliki kemampuan analisis hukum, administrasi publik, kewirausahaan, serta pendidikan teknologi informasi.",
        
            programs: [
            "S1 Hukum",
            "S1 Administrasi Publik",
            "S1 Kewirausahaan",
            "S1 Pendidikan Teknologi Informasi"
        ],

        facilities: [
            "Moot Court",
            "Laboratorium Administrasi",
            "Business Center",
            "Perpustakaan Digital"
        ],

        careers: [
            "Hakim",
            "Jaksa",
            "Advokat",
            "ASN",
            "Entrepreneur",
            "Guru"
        ]
    }
};

// ==========================================================
// ELEMENT
// ==========================================================

const drawer = document.getElementById("programDrawer");
const overlay = document.getElementById("drawerOverlay");
const closeButton = document.getElementById("drawerClose");
const drawerBadge = document.getElementById("drawerBadge");
const drawerTitle = document.getElementById("drawerTitle");
const drawerDescription = document.getElementById("drawerDescription");
const drawerImage = document.getElementById("drawerImage");
const drawerPrograms = document.getElementById("drawerPrograms");
const drawerFacilities = document.getElementById("drawerFacilities");
const drawerCareers = document.getElementById("drawerCareers");
const programButtons = document.querySelectorAll(".open-program");

// ==========================================================
// MEMBUKA DRAWER
// ==========================================================
function openProgram(program) {
    const data = programData[program];
    if (!data) return;
    drawerBadge.textContent = data.badge;
    drawerTitle.textContent = data.title;
    drawerDescription.textContent = data.description;
    drawerImage.src = data.image;
    drawerPrograms.innerHTML = "";
data.programs.forEach(program=>{
    drawerPrograms.innerHTML += `
        <li>
            <i class="ri-check-line"></i>
            ${program}
        </li>
    `;
});
    data.facilities.forEach(item => {
        drawerFacilities.innerHTML += `
            <li>${item}</li>
        `;
    });
    data.careers.forEach(item => {
        drawerCareers.innerHTML += `
            <li>${item}</li>
        `;
    });
    drawer.classList.add("show");
    document.body.style.overflow = "hidden";
}

// ==========================================================
// TOMBOL PROGRAM
// ==========================================================
programButtons.forEach(button => {
    button.addEventListener("click", function(e){
        e.preventDefault();
        openProgram(this.dataset.program);
    });
});

// ==========================================================
// MENUTUP DRAWER
// ==========================================================
function closeProgram(){
    drawer.classList.remove("show");
    document.body.style.overflow = "";
}

// ==========================================================
// TOMBOL CLOSE
// ==========================================================
if(closeButton){
    closeButton.addEventListener("click", closeProgram);
}

// ==========================================================
// KLIK OVERLAY
// ==========================================================
if(overlay){
    overlay.addEventListener("click", closeProgram);
}

// ==========================================================
// TOMBOL ESC
// ==========================================================
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeProgram();
    }
});

// ==========================================================
// ANIMASI CARD
// ==========================================================
programButtons.forEach(button=>{
    button.addEventListener("mouseenter",()=>{
        button.style.transform="scale(1.08) rotate(8deg)";
    });
    button.addEventListener("mouseleave",()=>{
        button.style.transform="";
    });
});

// ==========================================================
// RESET SCROLL SAAT DRAWER DIBUKA
// ==========================================================
const drawerContent=document.querySelector(".drawer-content");
function resetDrawerScroll(){
    if(drawerContent){
        drawerContent.scrollTop=0;
    }
}
const originalOpenProgram=openProgram;
openProgram=function(program){
    originalOpenProgram(program);
    resetDrawerScroll();
}