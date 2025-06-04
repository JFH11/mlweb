    function showLoader(event) {
      event.preventDefault();
      event.stopPropagation();
      let loader = document.getElementById("container-loader");
      loader.style.display = "grid";
  
      let targetUrl = event.currentTarget.href;
  
      setTimeout(function () {
          window.location.href = targetUrl;
      }, 1000);
  }
