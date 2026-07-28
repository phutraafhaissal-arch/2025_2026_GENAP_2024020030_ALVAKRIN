/*
===============================================
NEWS MODAL
===============================================
*/

const modal=document.getElementById("newsModal");

const modalBody=document.getElementById("newsModalBody");

const closeModal=document.querySelector(".news-modal-close");

const buttons=document.querySelectorAll(".news-button");

const newsData={

news1:{

title:"Seminar Nasional Artificial Intelligence",

image:"assets/images/news/news1.jpg",

content:`

<p>

Universitas Handayani Makassar sukses menyelenggarakan Seminar Nasional Artificial Intelligence yang menghadirkan akademisi, praktisi industri, serta mahasiswa dari berbagai perguruan tinggi.

</p>

<p>

Kegiatan ini membahas perkembangan AI, Machine Learning, Big Data, serta implementasi Artificial Intelligence di dunia industri dan pemerintahan.

</p>

<p>

Melalui seminar ini diharapkan mahasiswa mampu memahami perkembangan teknologi terbaru dan mempersiapkan diri menghadapi era transformasi digital.

</p>

`

},

news2:{

title:"Wisuda Periode Genap 2026",

image:"assets/images/news/news2.jpg",

content:`

<p>

Universitas Handayani Makassar meluluskan lebih dari 850 mahasiswa dari berbagai program studi.

</p>

<p>

Prosesi wisuda berlangsung secara khidmat dengan menghadirkan orang tua mahasiswa, dosen, alumni, dan berbagai mitra industri.

</p>

`

},

news3:{

title:"Kerjasama Internasional",

image:"assets/images/news/news3.jpg",

content:`

<p>

Universitas Handayani Makassar memperluas jaringan kerja sama internasional dengan berbagai universitas di Asia.

</p>

<p>

Kerja sama meliputi student exchange, joint research, visiting professor serta pengembangan kurikulum internasional.

</p>

`

}

};

buttons.forEach(button=>{

button.onclick=()=>{

const id=button.dataset.modal;

const data=newsData[id];

modalBody.innerHTML=`

<h2>${data.title}</h2>

<img src="${data.image}" alt="">

${data.content}

`;

modal.classList.add("show");

document.body.style.overflow="hidden";

};

});

function closeNews(){

modal.classList.remove("show");

document.body.style.overflow="";

}

closeModal.onclick=closeNews;

modal.onclick=(e)=>{

if(e.target===modal){

closeNews();

}

}

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeNews();

}

});