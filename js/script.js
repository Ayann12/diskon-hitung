document.getElementById('originalPrice').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    e.target.value = value;
});

function calculateDiscount() {
    let originalPrice = document.getElementById('originalPrice').value;
    originalPrice = parseFloat(originalPrice.replace(/\./g, ''));
    const discount = parseFloat(document.getElementById('discount').value);
    let finalPrice = document.getElementById('finalPrice');

    if (isNaN(originalPrice) || originalPrice <= 0) {
        alert('Masukkan harga asli yang valid.');
        finalPrice.innerText = '-';
        return;
    }

    if (discount === 0) {
        alert('Pilih diskon yang valid.');
        finalPrice.innerText = '-';
        return;
    }

    const discountedPrice = originalPrice - (originalPrice * (discount / 100));
    finalPrice.innerText = 'Rp ' + discountedPrice.toLocaleString('id-ID');
}
