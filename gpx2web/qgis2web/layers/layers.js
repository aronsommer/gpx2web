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
var format_mergedgpxfiles_1 = new ol.format.GeoJSON();
var features_mergedgpxfiles_1 = format_mergedgpxfiles_1.readFeatures(json_mergedgpxfiles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergedgpxfiles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergedgpxfiles_1.addFeatures(features_mergedgpxfiles_1);
var lyr_mergedgpxfiles_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mergedgpxfiles_1, 
                style: style_mergedgpxfiles_1,
                interactive: true,
                title: '<img src="styles/legend/mergedgpxfiles_1.png" /> mergedgpxfiles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mergedgpxfiles_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mergedgpxfiles_1];
lyr_mergedgpxfiles_1.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_mergedgpxfiles_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_mergedgpxfiles_1.set('fieldLabels', {'name': 'no label', 'type': 'no label', });
lyr_mergedgpxfiles_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});