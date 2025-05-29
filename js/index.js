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
let munculKeranjang = false;

keranjangBtn.addEventListener("click", () => {
  munculKeranjang = !munculKeranjang;
  keranjang.style.visibility = munculKeranjang ? 'visible' : 'hidden';
  keranjang.style.transform = munculKeranjang ? 'scale(1)' : 'scale(0)';
});

