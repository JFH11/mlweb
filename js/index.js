function showLoader(event) {
  event.preventDefault();
  event.stopPropagation();
  let loader = document.getElementById("container-loader");
  loader.style.display = "grid";

  let targetUrl = event.currentTarget.href;

  setTimeout(function () {
    window.location.href = targetUrl;
  }, 700);
}

const keranjangBtn = document.querySelector('.btn-keranjang');
const keranjang = document.querySelector('.container-keranjang');
const maink = document.querySelector('main');
let munculKeranjang = false;

keranjangBtn.addEventListener("click", () => {
  munculKeranjang = !munculKeranjang;
  keranjang.style.top = munculKeranjang ? '120px' : '-400px';
  keranjang.style.transform = munculKeranjang ? 'scale(1)' : 'scale(0)';
  maink.style.filter = munculKeranjang ? 'blur(5px)' : 'none';
  maink.style.pointerEvents = munculKeranjang ? 'none' : 'auto';
});

const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container');
const mainz = document.querySelector('main');
let menuMuncul = false;

menu.addEventListener('click', () => {
  menuMuncul = !menuMuncul;
  menuContainer.style.bottom = menuMuncul ? '0' : '-300px';
  mainz.style.filter = menuMuncul ? 'blur(5px)' : 'none';
  mainz.style.pointerEvents = menuMuncul ? 'none' : 'auto';
});

