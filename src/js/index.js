const charts = document.querySelectorAll(".chart .data");
const chartsPrice = document.querySelectorAll(".data-price");

for (let i = 0; i <= charts.length - 1; i++) {
    charts[i].addEventListener("mouseenter", () => {
        charts[i].classList.add("active")
        chartsPrice[i].classList.remove("hidden")
    })

    charts[i].addEventListener("mouseout", () => {
        charts[i].classList.remove("active")
        chartsPrice[i].classList.add("hidden")
    })
}