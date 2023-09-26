var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Polygon_Surakarta_1 = new ol.format.GeoJSON();
var features_Polygon_Surakarta_1 = format_Polygon_Surakarta_1.readFeatures(json_Polygon_Surakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygon_Surakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_Surakarta_1.addFeatures(features_Polygon_Surakarta_1);
var lyr_Polygon_Surakarta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polygon_Surakarta_1, 
                style: style_Polygon_Surakarta_1,
                interactive: true,
    title: 'Polygon_Surakarta<br />\
    <img src="styles/legend/Polygon_Surakarta_1_0.png" /> Banjarsari<br />\
    <img src="styles/legend/Polygon_Surakarta_1_1.png" /> Jebres<br />\
    <img src="styles/legend/Polygon_Surakarta_1_2.png" /> Laweyan<br />\
    <img src="styles/legend/Polygon_Surakarta_1_3.png" /> Pasar Kliwon<br />\
    <img src="styles/legend/Polygon_Surakarta_1_4.png" /> Serengan<br />'
        });
var format_Polyline_Jalan_2 = new ol.format.GeoJSON();
var features_Polyline_Jalan_2 = format_Polyline_Jalan_2.readFeatures(json_Polyline_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polyline_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polyline_Jalan_2.addFeatures(features_Polyline_Jalan_2);
var lyr_Polyline_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polyline_Jalan_2, 
                style: style_Polyline_Jalan_2,
                interactive: true,
    title: 'Polyline_Jalan<br />\
    <img src="styles/legend/Polyline_Jalan_2_0.png" /> Jalan Arteri/Utama<br />\
    <img src="styles/legend/Polyline_Jalan_2_1.png" /> Jalan Kolektor<br />'
        });
var format_Point_Pemerintahan_Single_Part_3 = new ol.format.GeoJSON();
var features_Point_Pemerintahan_Single_Part_3 = format_Point_Pemerintahan_Single_Part_3.readFeatures(json_Point_Pemerintahan_Single_Part_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Pemerintahan_Single_Part_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Pemerintahan_Single_Part_3.addFeatures(features_Point_Pemerintahan_Single_Part_3);
var lyr_Point_Pemerintahan_Single_Part_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Point_Pemerintahan_Single_Part_3, 
                style: style_Point_Pemerintahan_Single_Part_3,
                interactive: true,
    title: 'Point_Pemerintahan_Single_Part<br />\
    <img src="styles/legend/Point_Pemerintahan_Single_Part_3_0.png" /> Kantor Camat<br />\
    <img src="styles/legend/Point_Pemerintahan_Single_Part_3_1.png" /> Kantor Lurah<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Polygon_Surakarta_1.setVisible(true);lyr_Polyline_Jalan_2.setVisible(true);lyr_Point_Pemerintahan_Single_Part_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Polygon_Surakarta_1,lyr_Polyline_Jalan_2,lyr_Point_Pemerintahan_Single_Part_3];
lyr_Polygon_Surakarta_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', });
lyr_Polyline_Jalan_2.set('fieldAliases', {'LAYER': 'LAYER', 'KETERANGAN': 'KETERANGAN', 'LENGTH_FEE': 'LENGTH_FEE', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LE_1': 'SHAPE_LE_1', });
lyr_Point_Pemerintahan_Single_Part_3.set('fieldAliases', {'LAYER': 'LAYER', 'KETERANGAN': 'KETERANGAN', 'ORIG_FID': 'ORIG_FID', });
lyr_Polygon_Surakarta_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_KEC': 'Range', 'KODE_KAB': 'Range', 'SHAPE_LENG': 'TextEdit', 'KODE_PROP': 'Range', 'KABUPATEN': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', });
lyr_Polyline_Jalan_2.set('fieldImages', {'LAYER': 'TextEdit', 'KETERANGAN': 'TextEdit', 'LENGTH_FEE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', });
lyr_Point_Pemerintahan_Single_Part_3.set('fieldImages', {'LAYER': 'TextEdit', 'KETERANGAN': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Polygon_Surakarta_1.set('fieldLabels', {'PROVINSI': 'no label', 'KECAMATAN': 'inline label', 'KODE_KEC': 'no label', 'KODE_KAB': 'no label', 'SHAPE_LENG': 'no label', 'KODE_PROP': 'no label', 'KABUPATEN': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AREA': 'no label', });
lyr_Polyline_Jalan_2.set('fieldLabels', {'LAYER': 'no label', 'KETERANGAN': 'inline label', 'LENGTH_FEE': 'inline label', 'SHAPE_LENG': 'no label', 'SHAPE_LE_1': 'no label', });
lyr_Point_Pemerintahan_Single_Part_3.set('fieldLabels', {'LAYER': 'no label', 'KETERANGAN': 'inline label', 'ORIG_FID': 'no label', });
lyr_Point_Pemerintahan_Single_Part_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});