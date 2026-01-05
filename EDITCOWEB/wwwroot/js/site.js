<script>
    function addToFavorites(btn) {

    const urun = {
        id: btn.dataset.id,
    ad: btn.dataset.ad,
    fiyat: btn.dataset.fiyat,
    resim: btn.dataset.resim
    };

    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

    const varMi = favoriler.some(x => x.id === urun.id);
    if (varMi) {
        alert("Bu ürün zaten favorilerde");
    return;
    }

    favoriler.push(urun);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));

    btn.classList.add("active");
    alert("Favorilere eklendi ❤️");
}
</script>
