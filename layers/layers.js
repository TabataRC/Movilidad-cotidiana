var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Ruta1_1 = new ol.format.GeoJSON();
var features_Ruta1_1 = format_Ruta1_1.readFeatures(json_Ruta1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1_1.addFeatures(features_Ruta1_1);
var lyr_Ruta1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1_1, 
                style: style_Ruta1_1,
                popuplayertitle: 'Ruta 1',
                interactive: false,
                title: '<img src="styles/legend/Ruta1_1.png" /> Ruta 1'
            });
var format_Ruta2_2 = new ol.format.GeoJSON();
var features_Ruta2_2 = format_Ruta2_2.readFeatures(json_Ruta2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2_2.addFeatures(features_Ruta2_2);
var lyr_Ruta2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2_2, 
                style: style_Ruta2_2,
                popuplayertitle: 'Ruta 2',
                interactive: false,
                title: '<img src="styles/legend/Ruta2_2.png" /> Ruta 2'
            });
var format_CienciasSociales_3 = new ol.format.GeoJSON();
var features_CienciasSociales_3 = format_CienciasSociales_3.readFeatures(json_CienciasSociales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CienciasSociales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CienciasSociales_3.addFeatures(features_CienciasSociales_3);
var lyr_CienciasSociales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CienciasSociales_3, 
                style: style_CienciasSociales_3,
                popuplayertitle: 'Ciencias Sociales',
                interactive: false,
                title: '<img src="styles/legend/CienciasSociales_3.png" /> Ciencias Sociales'
            });
var format_Casa_4 = new ol.format.GeoJSON();
var features_Casa_4 = format_Casa_4.readFeatures(json_Casa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa_4.addFeatures(features_Casa_4);
var lyr_Casa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casa_4, 
                style: style_Casa_4,
                popuplayertitle: 'Casa',
                interactive: false,
                title: '<img src="styles/legend/Casa_4.png" /> Casa'
            });
var format_Paradas_5 = new ol.format.GeoJSON();
var features_Paradas_5 = format_Paradas_5.readFeatures(json_Paradas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradas_5.addFeatures(features_Paradas_5);
var lyr_Paradas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradas_5, 
                style: style_Paradas_5,
                popuplayertitle: 'Paradas',
                interactive: false,
                title: '<img src="styles/legend/Paradas_5.png" /> Paradas'
            });
var format_Puntoscrticos_6 = new ol.format.GeoJSON();
var features_Puntoscrticos_6 = format_Puntoscrticos_6.readFeatures(json_Puntoscrticos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntoscrticos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntoscrticos_6.addFeatures(features_Puntoscrticos_6);
var lyr_Puntoscrticos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntoscrticos_6, 
                style: style_Puntoscrticos_6,
                popuplayertitle: 'Puntos críticos',
                interactive: false,
                title: '<img src="styles/legend/Puntoscrticos_6.png" /> Puntos críticos'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Ruta1_1.setVisible(true);lyr_Ruta2_2.setVisible(true);lyr_CienciasSociales_3.setVisible(true);lyr_Casa_4.setVisible(true);lyr_Paradas_5.setVisible(true);lyr_Puntoscrticos_6.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Ruta1_1,lyr_Ruta2_2,lyr_CienciasSociales_3,lyr_Casa_4,lyr_Paradas_5,lyr_Puntoscrticos_6];
lyr_Ruta1_1.set('fieldAliases', {'fid': 'fid', 'Origen ': 'Origen ', 'Destino': 'Destino', 'Medio de transporte': 'Medio de transporte', });
lyr_Ruta2_2.set('fieldAliases', {'fid': 'fid', 'Origen': 'Origen', 'Destino': 'Destino', 'Medio de transporte': 'Medio de transporte', });
lyr_CienciasSociales_3.set('fieldAliases', {'fid': 'fid', 'Destino': 'Destino', });
lyr_Casa_4.set('fieldAliases', {'fid': 'fid', 'Origen': 'Origen', });
lyr_Paradas_5.set('fieldAliases', {'fid': 'fid', 'Destino': 'Destino', });
lyr_Puntoscrticos_6.set('fieldAliases', {'fid': 'fid', 'Puntos críticos': 'Puntos críticos', });
lyr_Ruta1_1.set('fieldImages', {'fid': 'TextEdit', 'Origen ': 'TextEdit', 'Destino': 'TextEdit', 'Medio de transporte': 'TextEdit', });
lyr_Ruta2_2.set('fieldImages', {'fid': 'TextEdit', 'Origen': 'TextEdit', 'Destino': 'TextEdit', 'Medio de transporte': 'TextEdit', });
lyr_CienciasSociales_3.set('fieldImages', {'fid': 'TextEdit', 'Destino': 'TextEdit', });
lyr_Casa_4.set('fieldImages', {'fid': 'TextEdit', 'Origen': 'TextEdit', });
lyr_Paradas_5.set('fieldImages', {'fid': 'TextEdit', 'Destino': 'TextEdit', });
lyr_Puntoscrticos_6.set('fieldImages', {'fid': 'TextEdit', 'Puntos críticos': 'TextEdit', });
lyr_Ruta1_1.set('fieldLabels', {'fid': 'header label - always visible', 'Origen ': 'no label', 'Destino': 'no label', 'Medio de transporte': 'no label', });
lyr_Ruta2_2.set('fieldLabels', {'fid': 'header label - visible with data', 'Origen': 'no label', 'Destino': 'no label', 'Medio de transporte': 'no label', });
lyr_CienciasSociales_3.set('fieldLabels', {'fid': 'header label - always visible', 'Destino': 'no label', });
lyr_Casa_4.set('fieldLabels', {'fid': 'header label - always visible', 'Origen': 'no label', });
lyr_Paradas_5.set('fieldLabels', {'fid': 'header label - always visible', 'Destino': 'no label', });
lyr_Puntoscrticos_6.set('fieldLabels', {'fid': 'header label - always visible', 'Puntos críticos': 'no label', });
lyr_Puntoscrticos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});