const jobDivisions = {
    "Manajemen": [
        'Manajer Proyek',
        'HR Manager',
        'Product Manager'
    ],
    "Teknologi Informasi": [
        'Software Engineer',
        'Web Developer',
        'Frontend Developer',
        'Backend Developer',
        'IT Support Specialist',
        'Database Administrator',
        'Quality Assurance Engineer'
    ],
    "Desain": [
        'Desainer Grafis',
        'Digital Marketing Manager'
    ],
    "Pemasaran": [
        'Marketing Specialist',
        'Sales Associate'
    ],
    "Analisis": [
        'Analis Data',
        'Business Analyst',
        'Technical Writer',
        'Customer Service Representative'
    ],
    "Keuangan": [
        'Account Executive',
        'Staf Akuntansi'
    ]
};

const RAdress = [
    'Jl. Merdeka No. 1, Jakarta',
    'Jl. Pahlawan No. 2, Surabaya',
    'Jl. Raya No. 3, Bandung',
    'Jl. Sudirman No. 4, Medan',
    'Jl. Ahmad Yani No. 5, Semarang',
    'Jl. Diponegoro No. 6, Yogyakarta',
    'Jl. Kebangsaan No. 7, Makassar',
    'Jl. Kuningan No. 8, Palembang',
    'Jl. Jendral Soedirman No. 9, Denpasar',
    'Jl. Gatot Subroto No. 10, Banjarmasin',
    'Jl. Budi Utomo No. 11, Jakarta',
    'Jl. Pahlawan No. 12, Bandung',
    'Jl. Cempaka No. 13, Surabaya',
    'Jl. Mutiara No. 14, Medan',
    'Jl. Cendana No. 15, Semarang',
    'Jl. Kenanga No. 16, Yogyakarta',
    'Jl. Anggrek No. 17, Makassar',
    'Jl. Melati No. 18, Palembang',
    'Jl. Mawar No. 19, Denpasar',
    'Jl. Flamboyan No. 20, Banjarmasin'
];
const RNumber = [
    1234, 5678, 2345, 6789, 3456,
    7890, 4321, 8765, 2346, 6780,
    3457, 8901, 4567, 8902, 5679,
    1235, 2347, 3458, 4568, 5670,
    6781
];
const RNames = [
    'Agus', 'Budi', 'Citra', 'Dewi', 'Eka', 'Fajar',
    'Gita', 'Hadi', 'Indah', 'Joko', 'Kirana', 'Lina',
    'Maya', 'Nina', 'Oka', 'Putra', 'Rina', 'Sari',
    'Toni', 'Utami'
];


const Nomor = document.querySelectorAll(".no");
const Kode = document.querySelectorAll(".code");
const Nama = document.querySelectorAll(".name");
const Email = document.querySelectorAll(".email");
const Alamat = document.querySelectorAll(".adress");
const Pekerjaan = document.querySelectorAll(".jobs");
const KodeJob = document.querySelectorAll('.codejob');
const Divisi = document.querySelectorAll('.division');
const KodeDiv = document.querySelectorAll('.codediv');
const allJobs = [];
const allDiv = Object.keys(jobDivisions);
for (const division in jobDivisions) {
    allJobs.push(...jobDivisions[division]); // Menggabungkan jabatan ke dalam allJobs
}



for (let i = 0; i < 20; i++) {
    // Cek jika elemen tidak kosong sebelum mengisi innerHTML
    if (Nomor[i]) {
        Nomor[i].innerHTML = i + 1;
    }
    if (Kode[i]) {
        Kode[i].innerHTML = "J" + RNumber[i];
    }
    if (Nama[i]) {
        Nama[i].innerHTML = RNames[i];
    }
    if (Email[i]) {
        Email[i].innerHTML = RNames[i] + "@gmail.com";
    }
    if (Alamat[i]) {
        Alamat[i].innerHTML = RAdress[i];
    }
    if (Pekerjaan[i]) {
        Pekerjaan[i].innerHTML = allJobs[i];
    }
    if (KodeJob[i]) {
        if(i + 1 < 10){
            KodeJob[i].innerHTML = "JAB00" + (i+1);
        }else{
        KodeJob[i].innerHTML = "JAB0" + (i+1);
        }
    }
    if (KodeDiv[i]) {
        if(i + 1 < 10){
            KodeDiv[i].innerHTML = "DIV00" + (i+1);
        }else{
        KodeDiv[i].innerHTML = "DIV0" + (i+1);
        }
    }
    if (Divisi[i]) {
        Divisi[i].innerHTML = allDiv[i];
    }
}



