var vg_1 = "car_imports.vg.json";

var vg_2 = "car_exports.vg.json";

vegaEmbed("#first_vis", vg_1).then(function(result) {
    ("https://vega.github.io/vega/docs/api/view/")

}).catch(console.error);

vegaEmbed("#second_vis", vg_2).then(function(result) {
    ("https://vega.github.io/vega/docs/api/view/")

}).catch(console.error);
