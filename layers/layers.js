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
var format_Route_Mli_Clip_1 = new ol.format.GeoJSON();
var features_Route_Mli_Clip_1 = format_Route_Mli_Clip_1.readFeatures(json_Route_Mli_Clip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Mli_Clip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Mli_Clip_1.addFeatures(features_Route_Mli_Clip_1);
var lyr_Route_Mli_Clip_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_Mli_Clip_1, 
                style: style_Route_Mli_Clip_1,
                interactive: true,
                title: '<img src="styles/legend/Route_Mli_Clip_1.png" /> Route_Mli_Clip'
            });
var format_QIPs2018_2019_2 = new ol.format.GeoJSON();
var features_QIPs2018_2019_2 = format_QIPs2018_2019_2.readFeatures(json_QIPs2018_2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QIPs2018_2019_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QIPs2018_2019_2.addFeatures(features_QIPs2018_2019_2);
var lyr_QIPs2018_2019_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QIPs2018_2019_2, 
                style: style_QIPs2018_2019_2,
                interactive: true,
                title: '<img src="styles/legend/QIPs2018_2019_2.png" /> QIPs2018_2019'
            });
var format_Ville_3 = new ol.format.GeoJSON();
var features_Ville_3 = format_Ville_3.readFeatures(json_Ville_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ville_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ville_3.addFeatures(features_Ville_3);
var lyr_Ville_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_3, 
                style: style_Ville_3,
                interactive: true,
                title: '<img src="styles/legend/Ville_3.png" /> Ville'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Route_Mli_Clip_1.setVisible(true);lyr_QIPs2018_2019_2.setVisible(true);lyr_Ville_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Route_Mli_Clip_1,lyr_QIPs2018_2019_2,lyr_Ville_3];
lyr_Route_Mli_Clip_1.set('fieldAliases', {'f_code': 'f_code', 'f_code_des': 'f_code_des', 'acc': 'acc', 'acc_descri': 'acc_descri', 'exs': 'exs', 'exs_descri': 'exs_descri', 'med': 'med', 'med_descri': 'med_descri', 'rtt': 'rtt', 'rtt_descri': 'rtt_descri', 'tile_id': 'tile_id', 'edg_id': 'edg_id', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'Source': 'Source', 'SHAPE_Le_1': 'SHAPE_Le_1', 'Revetement': 'Revetement', 'Observatio': 'Observatio', 'Innondable': 'Innondable', 'SHAPE_Le_2': 'SHAPE_Le_2', 'Pays': 'Pays', 'Bapteme': 'Bapteme', 'SHAPE_Le_3': 'SHAPE_Le_3', 'Praticabil': 'Praticabil', 'SHAPE_Le_4': 'SHAPE_Le_4', 'km': 'km', 'Shape_Le_5': 'Shape_Le_5', });
lyr_QIPs2018_2019_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Annee': 'Annee', 'Sponsor': 'Sponsor', 'Beneficiai': 'Beneficiai', 'Titre_du_P': 'Titre_du_P', 'Secteur': 'Secteur', 'Sous_Secte': 'Sous_Secte', 'Village': 'Village', 'Commune': 'Commune', 'Cercle': 'Cercle', 'Region': 'Region', 'Montant_XO': 'Montant_XO', 'Montont_US': 'Montont_US', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Ville_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'POP2_': 'POP2_', 'POP2_ID': 'POP2_ID', 'TYPE': 'TYPE', 'NAME': 'NAME', 'LOCAL_NAME': 'LOCAL_NAME', 'CNTY_CODE': 'CNTY_CODE', 'POLYGONID': 'POLYGONID', 'SCALE': 'SCALE', 'ANGLE': 'ANGLE', });
lyr_Route_Mli_Clip_1.set('fieldImages', {'f_code': '', 'f_code_des': '', 'acc': '', 'acc_descri': '', 'exs': '', 'exs_descri': '', 'med': '', 'med_descri': '', 'rtt': '', 'rtt_descri': '', 'tile_id': '', 'edg_id': '', 'Nom': '', 'SHAPE_Leng': '', 'Source': '', 'SHAPE_Le_1': '', 'Revetement': '', 'Observatio': '', 'Innondable': '', 'SHAPE_Le_2': '', 'Pays': '', 'Bapteme': '', 'SHAPE_Le_3': '', 'Praticabil': '', 'SHAPE_Le_4': '', 'km': '', 'Shape_Le_5': '', });
lyr_QIPs2018_2019_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'Annee': 'TextEdit', 'Sponsor': 'TextEdit', 'Beneficiai': 'TextEdit', 'Titre_du_P': 'TextEdit', 'Secteur': 'TextEdit', 'Sous_Secte': 'TextEdit', 'Village': 'TextEdit', 'Commune': 'TextEdit', 'Cercle': 'TextEdit', 'Region': 'TextEdit', 'Montant_XO': 'TextEdit', 'Montont_US': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Ville_3.set('fieldImages', {'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'POP2_': '', 'POP2_ID': '', 'TYPE': '', 'NAME': '', 'LOCAL_NAME': '', 'CNTY_CODE': '', 'POLYGONID': '', 'SCALE': '', 'ANGLE': '', });
lyr_Route_Mli_Clip_1.set('fieldLabels', {'f_code': 'no label', 'f_code_des': 'no label', 'acc': 'no label', 'acc_descri': 'no label', 'exs': 'no label', 'exs_descri': 'no label', 'med': 'no label', 'med_descri': 'no label', 'rtt': 'no label', 'rtt_descri': 'no label', 'tile_id': 'no label', 'edg_id': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'Source': 'no label', 'SHAPE_Le_1': 'no label', 'Revetement': 'no label', 'Observatio': 'no label', 'Innondable': 'no label', 'SHAPE_Le_2': 'no label', 'Pays': 'no label', 'Bapteme': 'no label', 'SHAPE_Le_3': 'no label', 'Praticabil': 'no label', 'SHAPE_Le_4': 'no label', 'km': 'no label', 'Shape_Le_5': 'no label', });
lyr_QIPs2018_2019_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'Annee': 'no label', 'Sponsor': 'no label', 'Beneficiai': 'no label', 'Titre_du_P': 'no label', 'Secteur': 'no label', 'Sous_Secte': 'no label', 'Village': 'no label', 'Commune': 'no label', 'Cercle': 'no label', 'Region': 'no label', 'Montant_XO': 'no label', 'Montont_US': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Ville_3.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'POP2_': 'no label', 'POP2_ID': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'LOCAL_NAME': 'no label', 'CNTY_CODE': 'no label', 'POLYGONID': 'no label', 'SCALE': 'no label', 'ANGLE': 'no label', });
lyr_Ville_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});