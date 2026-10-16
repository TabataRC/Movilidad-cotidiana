var size = 0;
var placement = 'point';

var style_CienciasSociales_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "16.900000000000002px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.6000000000000005;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Destino") !== null) {
        labelText = String(feature.get("Destino"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
