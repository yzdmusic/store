function sendMessage(product) {
    var phoneNumber = '6281218141079';
    var message = "Hello, saya tertarik dengan t-shirt; " + product + ". Mohon informasinya";
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url);
  }