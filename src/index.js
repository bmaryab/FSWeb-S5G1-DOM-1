const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((item, index)=>{
  item.className = 'italic';
  item.textContent = siteContent.nav[`nav-item-${index+1}`];
})

/*const navLinks = document.querySelectorAll('header nav a');
navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];*/

document.querySelector('.cta h1').textContent = siteContent.cta.h1;
document.querySelector('.cta button').textContent = siteContent.cta.button;

const h4Elements = document.querySelectorAll('.text-content h4');
h4Elements[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4Elements[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
h4Elements[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4Elements[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4Elements[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const pElements = document.querySelectorAll('.text-content p');
pElements[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
pElements[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
pElements[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
pElements[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
pElements[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector('.contact h4').textContent = siteContent.iletisim["iletişim-h4"];

const pContact = document.querySelectorAll('.contact p');
pContact[0].textContent = siteContent.iletisim.adres;
pContact[1].textContent = siteContent.iletisim.telefon;
pContact[2].textContent = siteContent.iletisim.email;

const copy = document.querySelector('footer a');
copy.textContent = siteContent.footer.copyright;
copy.classList.toggle('bold');

document.querySelector('#logo-img').setAttribute('src', "http://localhost:9000/img/logo.png");
document.querySelector('#cta-img').setAttribute('src', "http://localhost:9000/img/cta.png");
document.querySelector('#middle-img').setAttribute('src', "http://localhost:9000/img/accent.png");


