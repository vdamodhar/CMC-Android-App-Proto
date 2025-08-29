var map;
var gpsStatus = false;
var ro = 0;
var landScapeMode = false;
var dMarkerPos = [5, 100];
var trashCirclePos = [50, 200];
var activeStations = ["cb0102", "cb0201", "cb0301", "cb0402", "cb0601", "cb0701", "cb0801", "cb0901", "cb1001", "cb1101", "cb1201", "cb1301", "cc0101", "cc0401", "cp0101", "db0301", "db0501", "g06010", "g08010", "g09010", "gl0101", "gl0201", "gl0301",
    "hb0201", "hb0301", "hb0401", "jx0101", "jx0201", "jx0302", "jx0401", "jx0501", "jx0601", "jx0701", "lc0101", "lc0201", "lc0301", "lm0101", "lm0201", "mb0301", "mb0401", "mc0101", "mg0101", "mi0101", "mi0201", "mi0301", "n03020", "nb0201", "nb0301",
    "nl0101", "s06010", "s08010", "s09010", "s10010", "sn0101", "sn0201", "sn0301", "sn0401", "sn0501", "sn0601", "sn0701", "t01010", "t02010", "t03010" ];
var hours = new Date().getHours();
var isDayTime = hours > 6 && hours < 20;
var gpsMarker;
var offlineMap = false;

var prj1 = "EPSG:3857";
var prj2 = "EPSG:4326";
var prj3 = "EPSG:900913";
var displayModeObject;
var onlongtouch;
var timer, lockTimer;
var touchduration = 300;

Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
    return yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]);
};

var startday = new Date(new Date() - (24 * 60 * 60 * 1000));
var endday = new Date();
var begindate = startday.yyyymmdd();
var enddate = endday.yyyymmdd();
var stationsLayer;
var strotation = [], stspeed = [];

var pointEntitySource, pointEntityVector;
var layerSwitcher;
var GroupUsage1, GroupUsage2, GroupUsage3, GroupUsage4, GroupUsage5, GroupUsage6, NavAids, NavHazards, Soundings,sounding321, layerEncBase, OSM, SatilliteLayer, Others_centroid, Others;
$(document).ready(function() {

       if(localStorage.getItem('onboardfirsttime')){

       }else{
            localStorage.setItem('onboardfirsttime','yes');
       }

       if(localStorage.getItem('onboardfirsttime') == 'yes'){
            openTour();
       }

       load_day_images();
       load_night_images();
        var x1 = -82.8024594254927;
        var y1 = 27.8010035982999;
        var x2 = x1 + (0.00797815496271307 * 600);
        var y2 = y1 - (0.00797815496271307 * 550);
        var ul = ol.proj.transform([x1, y1], prj2, prj1);
        var lr = ol.proj.transform([x2, y2], prj2, prj1);
        var scaleLineControl = new ol.control.ScaleLine();
        var startView = new ol.View({
            center : ol.proj.transform([ 0,0],prj2, prj1),
            zoom: 13,
            maxZoom:19
        });

       

        // vectorTileUrlPrefix = geoserverurl + 'gwc/service/wmts?layer=';
        // vectorTileUrlSuffix = '&tilematrixset='+prj3+'&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix='+prj3+':{z}&TileCol={x}&TileRow={y}';

        // GroupUsage1 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload: 0,
        //     renderMode: 'image',
        //     minResolution : 610.984,
        //     maxResolution : 2444,
        //     style : set_genericStyle,
        //     crossOrigin : 'anonymous',
        //     source : new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url : vectorTileUrlPrefix + workspace +':vt_group1' + vectorTileUrlSuffix
        //     })
        // });

        // GroupUsage2 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload: 0,
        //     renderMode: 'image',
        //     minResolution : 152.746,
        //     maxResolution : 610.984,
        //     style : set_genericStyle,
        //     crossOrigin: 'anonymous',
        //     source : new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url : vectorTileUrlPrefix + workspace +':vt_group2' + vectorTileUrlSuffix
        //     })
        // });

        // GroupUsage3 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload: 0,
        //     renderMode: 'image',
        //     minResolution : 19.093,
        //     maxResolution : 152.746,
        //     style : set_genericStyle,
        //     crossOrigin : 'anonymous',
        //     source : new ol.source.VectorTile({
        //        tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url : vectorTileUrlPrefix + workspace +':vt_group3' + vectorTileUrlSuffix
        //     })
        // });

        // GroupUsage4 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload: 0,
        //     renderMode: 'image',
        //     style : set_genericStyle,
        //     minResolution : 4.773,
        //     maxResolution : 19.093,
        //     crossOrigin : 'anonymous',
        //     source : new ol.source.VectorTile({
        //        tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url : vectorTileUrlPrefix + workspace +':vt_group4' + vectorTileUrlSuffix
        //     })
        // });

        // GroupUsage5 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload: 0,
        //     renderMode: 'image',
        //     minResolution : 0.298,
        //     maxResolution : 4.773,
        //     style : set_genericStyle,
        //     crossOrigin : 'anonymous',
        //     source : new ol.source.VectorTile({
        //     tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url : vectorTileUrlPrefix + workspace +':vt_group5' + vectorTileUrlSuffix
        //     })
        // });

        // GroupUsage6 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload: 0,
        //     renderMode: 'image',
        //     minResolution : 0.298,
        //     maxResolution : 4.773,
        //     style : set_genericStyle,
        //     crossOrigin : 'anonymous',
        //     source : new ol.source.VectorTile({
        //       tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url : vectorTileUrlPrefix + workspace +':vt_group6' + vectorTileUrlSuffix
        //     })
        // });

        // layerEncBase = new ol.layer.Group({
        //     title: 'ENC Base',
        //     type : 'wmtsgroup',
        //     visible : true,
        //     layers: [GroupUsage1, GroupUsage2, GroupUsage3, GroupUsage4, GroupUsage5, GroupUsage6]
        // });

        // NavAids4 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     renderMode: 'image',
        //     style: set_genericStyle,
        //     minResolution: 4.773,
        //     maxResolution: 19.093,
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_navaids_u4' + vectorTileUrlSuffix
        //     })
        //   });

        // NavAids5 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     renderMode: 'image',
        //     style: set_genericStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_navaids_u5' + vectorTileUrlSuffix
        //     })
        //   });

        // NavAids6 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     renderMode: 'image',
        //     style: set_genericStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_navaids_u6' + vectorTileUrlSuffix
        //     })
        // });

        // NavAids = new ol.layer.Group({
        //     title: 'Navigational Aids',
        //     type : 'wmtsgroup',
        //     visible : true,
        //     layers: [NavAids4, NavAids5, NavAids6]
        // });

        // NavHazards4 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     visible : true,
        //     preload : 0,
        //     style: set_genericStyle,
        //     minResolution: 4.773,
        //     maxResolution: 19.093,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_navhazards_u4' + vectorTileUrlSuffix
        //     })
        //   });

        // NavHazards5 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     visible : true,
        //     style: set_genericStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_navhazards_u5' + vectorTileUrlSuffix
        //     })
        //   });

        // NavHazards6 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     visible : true,
        //     style: set_genericStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_navhazards_u6' + vectorTileUrlSuffix
        //     })
        // });

        // NavHazards = new ol.layer.Group({
        //     title: 'Navigational Hazards',
        //     type : 'wmtsgroup',
        //     visible : true,
        //     layers: [NavHazards4, NavHazards5, NavHazards6]
        // });

        // Soundings4 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     renderMode: 'image',
        //     style: set_genericStyle,
        //     crossOrigin: 'anonymous',
        //     minResolution: 4.773,
        //     maxResolution: 9.547,
        //     source: new ol.source.VectorTile({
        //         tileGrid:ol.tilegrid.createXYZ(),
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_sounding_u4' + vectorTileUrlSuffix
        //     })
        //   });

        // Soundings5 = new ol.layer.VectorTile({
        //         type : 'wmts',
        //         preload : 0,
        //         renderMode: 'image',
        //         style: set_genericStyle,
        //         crossOrigin: 'anonymous',
        //         minResolution: 0.298,
        //         maxResolution: 4.773,
        //         source: new ol.source.VectorTile({
        //             tileGrid:ol.tilegrid.createXYZ(),
        //             format : new ol.format.MVT(),
        //             url: vectorTileUrlPrefix + 'NCWorkspace:vt_sounding_u5' + vectorTileUrlSuffix
        //         })
        //       });

        // Soundings6 = new ol.layer.VectorTile({
        //         type : 'wmts',
        //         preload : 0,
        //         renderMode: 'image',
        //         style: set_genericStyle,
        //         crossOrigin: 'anonymous',
        //         minResolution: 0.298,
        //         maxResolution: 4.773,
        //         source: new ol.source.VectorTile({
        //             tileGrid:ol.tilegrid.createXYZ(),
        //             format : new ol.format.MVT(),
        //             url: vectorTileUrlPrefix + 'NCWorkspace:vt_sounding_u6' + vectorTileUrlSuffix
        //         })
        // });
        //     sounding321 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     declutter: true,
        //     renderMode: 'image',
        //     style: set_genericStyle,
        //     crossOrigin: 'anonymous',
        //     minResolution: 9.547,
        //     maxResolution: 2444,
        //     source: new ol.source.VectorTile({
        //         format : new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_sounding' + vectorTileUrlSuffix
        //     })
        //   });

        // Soundings = new ol.layer.Group({
        //     title: 'Soundings',
        //     type : 'wmtsgroup',
        //     visible : true,
        //     layers: [sounding321,Soundings4, Soundings5, Soundings6]
        // });

        // OSM = new ol.layer.Tile({
        //   title:'OpenStreetMap',
        //   visible:true,
        //   source: new ol.source.OSM()
        // });

        // Tide_StationsLayer = new ol.layer.Tile({
        //     title: 'Tide Stations',
        //     type: 'wms',
        //     visible: false,
        //     source: new ol.source.TileWMS({
        //         url: wmsurl,
        //         params: {
        //             'LAYERS': workspace + ':Tide_Stations'
        //         },
        //         serverType: 'geoserver'
        //     })
        // });

       
        // // radarimgs = new ol.layer.Image({
        // //     title: 'Radar Overlay',
        // //     type: 'datalayer',
        // //     visible: false,
        // //     source: new ol.source.ImageStatic({
        // //        url: 'https://mapservices.weather.noaa.gov/eventdriven/services/radar/radar_base_reflectivity/MapServer/WMSServer?request=GetCapabilities&service=WMS',
        // //        projection: prj1,
        // //         imageExtent: [ul[0], lr[1], lr[0], ul[1]]
        // //     })
        // // });
       
        
        // radarimgs=new ol.layer.Tile({
        //     title: 'Radar Overlay',
        //     type: 'datalayer',
        //     visible: false,
        //     source: new ol.source.TileWMS({
        //         url: 'https://mapservices.weather.noaa.gov/eventdriven/services/radar/radar_base_reflectivity/MapServer/WMSServer',
        //         params: {
        //             'LAYERS': '1',
        //             'FORMAT': 'image/png',
        //             'VERSION': '1.3.0',
        //             'CRS': 'EPSG:4326', // Use 'CRS' instead of 'SRS' for version 1.3.0
        //             'STYLES': ''
        //         },
        //     })
        // })
        
       
        // SatilliteLayer = new ol.layer.Tile({
        //     title: 'Satillite Imagery',
        //     type: 'datalayer',
        //     visible: false,
        //     source : new ol.source.BingMaps({
        //         key : 'AtRJu52pIf1CINdLfRGGJz27bXzXkGc8STzexLhnwtQecuzCnF-C_4RQI5KNKA88',
        //         crossOrigin : 'anonymous',
        //         imagerySet : 'Aerial',
        //         params : {
        //             'LAYERS' : "BingMaps"
        //         }
        //     })
        // });

        // Others4 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     visible : true,
        //     style: set_genericStyle,
        //     minResolution: 4.773,
        //     maxResolution: 19.093,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid: ol.tilegrid.createXYZ(),
        //         format: new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_other_u4' + vectorTileUrlSuffix
        //     })
        // });

        // Others5 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     visible : true,
        //     style: set_genericStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid: ol.tilegrid.createXYZ(),
        //         format: new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_other_u5' + vectorTileUrlSuffix
        //     })
        // });

        // Others6 = new ol.layer.VectorTile({
        //     type : 'wmts',
        //     preload : 0,
        //     visible : true,
        //     style: set_genericStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid: ol.tilegrid.createXYZ(),
        //         format: new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_other_u6' + vectorTileUrlSuffix
        //     })
        // });

        // var Other_u4_centroid = new ol.layer.VectorTile({
        //     type : 'wmts1',
        //     preload : 0,
        //     visible : true,
        //     style: centroidStyle,
        //     minResolution: 4.773,
        //     maxResolution: 19.093,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid: ol.tilegrid.createXYZ(),
        //         format: new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_other_u4_c' + vectorTileUrlSuffix
        //     })
        //   });

        // Other_u5_centroid = new ol.layer.VectorTile({
        //     type : 'wmts1',
        //     preload : 0,
        //     visible : true,
        //     style: centroidStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid: ol.tilegrid.createXYZ(),
        //         format: new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_other_u5_c' + vectorTileUrlSuffix
        //     })
        //   });

        // Other_u6_centroid = new ol.layer.VectorTile({
        //     type : 'wmts1',
        //     preload : 0,
        //     visible : true,
        //     style: centroidStyle,
        //     minResolution: 0.298,
        //     maxResolution: 4.773,
        //     renderMode: 'image',
        //     crossOrigin: 'anonymous',
        //     source: new ol.source.VectorTile({
        //         tileGrid: ol.tilegrid.createXYZ(),
        //         format: new ol.format.MVT(),
        //         url: vectorTileUrlPrefix + 'NCWorkspace:vt_other_u6_c' + vectorTileUrlSuffix
        //     })
        //   });

        // Others_centroid = new ol.layer.Group({
        //     type : 'wmts1',
        //     visible : true,
        //     layers: [Other_u4_centroid, Other_u5_centroid, Other_u6_centroid]
        // });

        // Others = new ol.layer.Group({
        //     title: 'ENC Base(others)',
        //     type : 'wmts',
        //     visible : true,
        //     layers: [Others4, Others5, Others6, Others_centroid]
        // });

        // const map = new ol.Map({
        //     target: 'map',
        //     controls: ol.control.defaults({}).extend([scaleLineControl]),
        //     interactions:ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false}),
        //     layers: [
        //     new ol.layer.Tile({
        //         source: new ol.source.OSM()
        //     }),
        //     new ol.layer.Tile({
        //         source: new ol.source.XYZ({
        //         url: '/sdcard/Documents/tiles/{z}/{x}/{y}.png'
        //         })
        //     })
        //     ],
        //     view: new ol.View({
        //     center: ol.proj.fromLonLat([-123.1216, 49.2827]),
        //     zoom: 12
        //     })
        // });

          let osm = new ol.layer.Tile({
        title: 'OSM',
        source: new ol.source.OSM()
    });

    const geoJsonSource = new ol.source.Vector({
        url: "file:///storage/emulated/0/Android/data/com.iic.naavic/files/NAVLINE.geojson", // URL to the GeoJSON filesdcard/Android/data/com.google.android.videos/files/Download/s128.geojson', // URL to the GeoJSON file
        format: new ol.format.GeoJSON()
    });

     const geoJsonSource2 = new ol.source.Vector({
        url: "www/resources/geojson/RECTRC.geojson", // URL to the GeoJSON filesdcard/Android/data/com.google.android.videos/files/Download/s128.geojson', // URL to the GeoJSON file
        format: new ol.format.GeoJSON()
    })

    const geoJsonStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
            color: 'rgba(0, 153, 255, 1)', // Blue stroke
            width: 2
        })
    });

    const geoJsonLayer = new ol.layer.Vector({
        source: geoJsonSource,
        style: geoJsonStyle,
        title: 'CMC passage plan data3',
        visible: true // Set to true to display this layer
    });

     const geoJsonLayer2 = new ol.layer.Vector({

        source: geoJsonSource2,
        style: geoJsonStyle,
        title: 'CMC passage plan data1',
        visible: true // Set to true to display this layer

    });

    const localTileUrl = 'www/resources/geojson/RECTRC.geojson';

    const localTileSource = new ol.source.XYZ({
        url: localTileUrl,
    });

    const localTileLayer = new ol.layer.Tile({
        title: 'CMC passage plan data2',
        source: localTileSource,
    });

        map = new ol.Map({
            controls: ol.control.defaults({}).extend([scaleLineControl]),
            interactions:ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false}),
            target: 'map',
            view: startView,
            layers: [osm, localTileLayer, geoJsonLayer , geoJsonLayer2]
            
                });

   $('#displaymodegroup input[type=radio]').change(function(){
        displayModeObject = modeChanged();
        map.getLayers().forEach(function(layer, i) {
            if (layer instanceof ol.layer.Group) {
              layer.getLayers().forEach(function(sublayer, j) {
               if (sublayer instanceof ol.layer.Group) {
                 sublayer.getLayers().forEach(function(ssublayer, j) {
                   var source = ssublayer.getSource();
                   source.tileCache.expireCache({});
                   source.tileCache.clear();
                   source.refresh();
                 });
               }else{
                    var source = sublayer.getSource();
                    source.tileCache.expireCache({});
                    source.tileCache.clear();
                    source.refresh();
               }
              });
            }
        });

        map.render();
        map.renderSync();
        map.updateSize();
   });

   $('#selectDepths').change(function(){
           map.getLayers().forEach(function(layer, i) {
               if (layer instanceof ol.layer.Group) {
                 layer.getLayers().forEach(function(sublayer, j) {
                  if (sublayer instanceof ol.layer.Group) {
                    sublayer.getLayers().forEach(function(ssublayer, j) {
                      var source = ssublayer.getSource();
                      source.tileCache.expireCache({});
                      source.tileCache.clear();
                      source.refresh();
                    });
                  }else{
                       var source = sublayer.getSource();
                       source.tileCache.expireCache({});
                       source.tileCache.clear();
                       source.refresh();
                  }
                 });
               }
           });
           $("#depthsin").html($('#selectDepths option:selected').text());
           map.render();
           map.renderSync();
           map.updateSize();
      });

    map.on('singleclick', function(evt) {
        if (isFeatureInfoOn) {
            featureInfoData(evt, wpAttrPopup, startView);
        }
        $(".notication_box").slideUp();
        $("#wrapper").removeClass("active");
        $("#myDropdown").removeClass("show");
        $("#myDropdown1").removeClass("show");
    });

    // initial waypoint Pop up and add to map
    wpAttrPopupDiv = document.getElementById('popup');
    wpAttrPopup = new ol.Overlay({
        element: wpAttrPopupDiv
    });
    map.addOverlay(wpAttrPopup);

    gpsMarker = new ol.Overlay({
           map: map,
           element: ($('<i/>').addClass('gpspoint').get(0)) // Marker image from map.css
    });

    map.addOverlay(gpsMarker);   //Adding GPS marker to the map

    // add waypoint trash layer to map
    addWPTrashLayer();
    // add default waypoint marker to map
    addDefaultWPMarker();

    // add drag interaction on map
    map.getInteractions().forEach(function(interaction) {
        if (interaction instanceof ol.interaction.DragPan) {
            drag = interaction;
        }
    });
    // initialize pointer event handler to default marker
    var dp_dragger_ = new ol.pointer.PointerEventHandler(dMarkerIcon);
    // initialize event listeners to default marker to map
    ol.events.listen(dp_dragger_, ol.pointer.EventType.POINTERDOWN, handleDraggerStart_dp);
    ol.events.listen(dp_dragger_, ol.pointer.EventType.POINTERMOVE, handleDraggerDrag_dp);
    ol.events.listen(dp_dragger_, ol.pointer.EventType.POINTERUP, handleDraggerEnd_dp);

    // handle pointer drag event on map
    map.on('pointerdrag', function(evt) {
        if (routeStatus)
            wpDrag(evt);
    });

    // handle pointer up event on map
    map.on('pointerup', function(evt) {
        if (routeStatus) {
            wpDrop(evt);
            wpList();
        }
    });

    // handle pan or zoom event on map
    map.on('moveend', function(evt) {
        if (routeStatus && (trackonMap == false)){
            redrawDefaultWPandTrash();
        }
        displayModeObject = modeChanged();
    });

    // pre-load event handle on map
    map.once('postrender', function(event) {
        if (routeStatus && (trackonMap == false))
            redrawDefaultWPandTrash();
    });

    var width = $(window).width();
    var height = $(window).height();
    $("#map").css("height", height);
    if (width < 450 || height < 450) {
        landScapeMode = false;
        $("#map").css("width", width);
        $("#info_toggle").show();
        dMarkerPos = [5, 250];
        trashCirclePos = [55, 300];
        $("#settings_tabs_height").css("height", height - 67);
        $("#sidebar-wrapper").css("z-index", "4");
        $(".swipe-rightsidepage").css("z-index", "3");
        $("#sidebar").css("height", height - 43);
        TRASH_RADIUS = 50;
    } else {
        $("#settings_tabs_height").css("height", height - 120);
        $("#sidebar").css("height", height - 50);
        $("#mySidenav").css("z-index", "3");
        $("#sidebar-wrapper").css("z-index", "2");
        $(".swipe-rightsidepage").css("z-index", "4");
        landScapeMode = true;
        $("#info_toggle").hide();
        $("#map").css("width", width - 340);
        $("#route_data_tab").css("display", "block");
        dMarkerPos = [5, 310];
        trashCirclePos = [120, 400];
    }
 
    $("#aisiframe").css("height", height - 50);
    $("#aisiframe").css("width", width - 4);
    $("#tideiframe").css("height", height - 50);
    $("#tideiframe").css("width", width - 4);
    $("#quickiframe").css("height", height - 50);
    $("#quickiframe").css("width", width - 4);

    map.updateSize();
    map.addLayer(radarimgs);
    console.log("radarimgs",radarimgs);
    map.addLayer(Tide_StationsLayer);
    loadCurrentStations();

    pointEntitySource = new ol.source.Vector();
    pointEntityVector = new ol.layer.Vector({
        title: "User Overlay",
        source: pointEntitySource,
        visible : false
    });

    setTimeout(function() {
    map.addLayer(pointEntityVector);
    layerSwitcher.renderPanel();
    }, 2000);

    layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Layers',
        target: 'maplayerslist'
    });

    var updateDirections = setInterval(loadCurrentStations, 36000);

    map.addControl(layerSwitcher);
    addOfflineLayers();

    addManOverBoardMarker = new ol.Overlay({
           map: map,
           element: ($('<i id = "manOverBoard"/>').addClass('manOverBoardMarker').get(0)) // Marker image from map.css
    });

    map.addOverlay(addManOverBoardMarker);
    document.getElementById('manOverBoard').addEventListener('touchstart', touchstart, false);
    document.getElementById('manOverBoard').addEventListener("touchend", touchend, false);

     showManHoverBoard();
});
function touchstart() {
    timer = setTimeout(deletemarker, touchduration);
}
function touchend() {
    //stops short touches from firing the event
    if (timer){
        clearTimeout(timer); // clearTimeout, not cleartimeout..
        lockTimer = false;
    }
}
function deletemarker () {

        jConfirm('Are you sure want to delete ManOverboard?', 'ManOverboard Delete', function(confirmed) {
            if (confirmed) {
             deleteManOverBoard();
            }
         });
};


function fail(error) {
    console.log("error" + error.code);
}

function rotatemap() {
    map.getView().rotate(0);
    ro = 0;
    document.getElementById("compassimg").style.transform = "rotate(" + ro + "deg)";
}

function rotateCompass() {
    var currentRotation = map.getView().getRotation();
    var degree = currentRotation * (180 / Math.PI);
    if(degree<0)
        degree = degree * -1;
    document.getElementById("compassimg").style.transform = "rotate(" + degree + "deg)";
}

function gpsON() {
 $(".gcd-gl-control").removeClass("gcd-gl-expanded");
 $("#wrapper").removeClass("active");
    if (!gpsStatus) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, onError, {
                timeout: 16000,
                enableHighAccuracy: true
            });
            gpsStatus = true;
            $("#gps").css('background-image', 'url(images/gps-on.png)');
        } else {
        }
    } else {
        gpsOFF();
    }
}

function showPosition(position) {
    var lon = parseFloat(position.coords.longitude);
    var lat = parseFloat(position.coords.latitude);
    var location = ol.proj.transform([lon, lat], prj2, prj1);
        map.getView().setCenter(location);
        map.getView().setZoom(15);
    if(!gpsSimulationStatus)
    gpsMarker.setPosition(location);
    $("#gpsError").html("");
    $("#gpsError_tab").html("");
    $("#gpssignal").hide();
}

function onError(error) {
    if (error.code == 3) {
        $("#gpssignal").show();
        $("#gpsError").html("Unable to get the position with in the time, request timedout");
        $("#gpsError_tab").html("Unable to get the position with in the time, request timedout");
        if ($('#alarm_toggle').is(':checked')){
           Say("Unable to get the position with in the time, request timedout");
        }
    } else if (error.code == 2) {
        $("#gpssignal").show();
        $("#gpsError").html("Unable to get the location from the GPS device");
        $("#gpsError_tab").html("Unable to get the location from the GPS device");
        if ($('#alarm_toggle').is(':checked')){
           Say("Unable to get the location for the GPS device");
        }
    } else if(error.code == 1) {
        $("#gpsError").html("User Denies the Location access / GPS Off");
        $("#gpsError_tab").html("User Denies the Location access / GPS Off");
/*        jLocation('Location access is required. Please turn on device location access', 'GPS', function(confirmed) {
          if (confirmed) {
              cordova.plugins.diagnostic.switchToLocationSettings();
          }
        });*/
        $("#gpssignal").show();
        if ($('#alarm_toggle').is(':checked')){
         Say("User Denies the Location access or GPS Off");
        }
    }
}

function gpsOFF(){
    gpsStatus = false;
    $("#gps").css('background-image', 'url(images/gps-off.png)');
    $("#gpsError").html("");
    $("#gpsError_tab").html("");
    gpsMarker.setPosition(undefined);
}

function loadCurrentStations() {
    if (stationsLayer) {
        map.removeLayer(stationsLayer);
    }
    stationsVector = new ol.source.Vector();
    $.ajax({
        url: geoserverurl + 'ows?service=WFS&version=1.0.0&request=GetFeature&typeName=' + workspace + ':Current_Active_Stations&outputFormat=application/json&srsname='+prj1,
        type: "GET",
        async: false
    }).done(function(response) {
        stationsVector.addFeatures(new ol.format.GeoJSON().readFeatures(response));
    });

    setTimeout(function() {
        stationsLayer = new ol.layer.Vector({
            title: 'Current Stations',
            source: stationsVector,
            visible: false,
            style: function(feature, resolution) {
                var pointStyle;
                var stdid = feature.id_.split('.')[1];
                if (activeStations.includes(stdid) === true) {
                    returnRotation(stdid);
                }
                pointStyle = returnStyle(stdid);
                return [pointStyle];
            }
        });
    map.addLayer(stationsLayer);
    layerSwitcher.renderPanel();
    }, 1000);
}

function returnRotation(stationid) {
    $.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter", {
        product: "currents",
        begin_date: begindate,
        end_date: enddate,
        station: stationid,
        time_zone: "LST_LDT",
        units: "english",
        format: "json",
        application: "NOS.COOPS.TAC.ODIN"
    }, function(jsondata) {
    //console.log("getting response from noaa server",jsondata.data)
        var Currents = [];
        CurrDirs = [];
        var currentindex = 0;

        if (jsondata.data) {
       // console.log("getting data from noaa server",jsondata.data)
            for (var i = 0; i < jsondata.data.length; i++) {
                var ts = jsondata.data[i].t;
                ts = ts.replace(/-/g, "");
                ts = ts.replace(/ /g, "");
                ts = ts.replace(/:/g, "");
                var dateobj = new TAC.DateString(ts);

                var speed = jsondata.data[i].s;
                var dir = jsondata.data[i].d;

                var timestamp = dateobj.getTimeStamp();
                if (speed == "") {
                    speed = null;
                } else {
                    speed = parseFloat(speed);
                    currentindex = i;
                }
                Currents.push([timestamp, speed]);
                CurrDirs.push([timestamp, dir]);
            }

            if (Currents.length > 0) {
                var currvalue = Currents[currentindex][1];
                currvalue = (Math.round(currvalue * 100) / 100) + " Kn.";

                var currdir = Math.radians(parseInt(CurrDirs[currentindex][1]));

                if (activeStations.includes(stationid) === true) {
                    strotation[activeStations.indexOf(stationid)] = currdir;
                    stspeed[activeStations.indexOf(stationid)] = currvalue;
                }
            }
        }
    });
}

function returnStyle(stationid) {
    var rotation, speed;

    if (activeStations.includes(stationid) === true) {
        rotation = strotation[activeStations.indexOf(stationid)];
        speed = stspeed[activeStations.indexOf(stationid)];
    }

    return new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "transparent",
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "transparent"
        }),
        image: new ol.style.Icon({
            src: 'images/arrow.png',
            rotateWithView: true,
            anchor: [16, 32],
            anchorXUnits: 'pixels',
            anchorYUnits: 'pixels',
            rotation: rotation
        }),
        text: new ol.style.Text({
            font: 'bold 14px Calibri,sans-serif',
            fill: new ol.style.Fill({
                color: '#000'
            }),
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 3
            }),
            text: speed,
            offsetX: 0,
            offsetY: 12
        })
    });
}

function actualizar() {
    var centro = map.getView().getCenter();
    var lonlat = ol.proj.transform(centro, prj1, prj2);
    var lon = lonlat[0];
    var lat = lonlat[1];
    var zoom = map.getView().getZoom();
    centrarMapaAIS(lon, lat, zoom);
}

function centrarMapaAIS(lon, lat, zoom) {
    var url = 'https://www.marinetraffic.com/en/ais/embed/';
        url += "zoom:" + zoom + "/centery:" + lat + "/centerx:" + lon;
        url += "/maptype:3/shownames:true/mmsi:0/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:true/remember:false";
 window.open = cordova.InAppBrowser.open;
 cordova.InAppBrowser.open(url, '_self', 'location=yes');
}
var offlineUsage1;
var offlineUsage2;
var offlineUsage3;
var offline_Soundings;
var offline_NavAids;
var offline_NavHazards;

function addOfflineLayers(){
    if(localStorage.getItem('showofflinemap') === 'showofflinemap'){

        // Example for loading raster tiles (PNG/JPG) from a local directory
        var URL_rasterTiles = 'file:///storage/emulated/0/Android/data/com.iic.naavic/files/' + localStorage.getItem('username') + '/raster_tiles/{z}/{x}/{y}.png';

        offlineRasterTiles = new ol.layer.Tile({
            visible: true,
            preload: 0,
            minResolution: 610.984,
            maxResolution: 2444,
            source: new ol.source.XYZ({
                tileGrid: ol.tilegrid.createXYZ(),
                url: URL_rasterTiles,
                crossOrigin: 'anonymous'
            })
        });

        // Add the raster tile layer to the map
        map.addLayer(offlineRasterTiles);

        var URL_1 = 'file:///storage/emulated/0/Android/data/com.iic.naavic/files/'+localStorage.getItem('username')+'/vt_group1/{z}/{x}/{y}.pbf';
        
        offlineUsage1 = new ol.layer.VectorTile({
            visible : true,
            preload: 0,
            minResolution : 610.984,
            maxResolution : 2444,
            style: set_genericStyle,
            source: new ol.source.VectorTile({
                tileGrid:ol.tilegrid.createXYZ(),
                format : new ol.format.MVT(),
                url: URL_1
            })

            
        });
        
        var URL_2 = 'file:///storage/emulated/0/Android/data/com.iic.naavic/files/'+localStorage.getItem('username')+'/vt_group2/{z}/{x}/{y}.pbf';
            offlineUsage2 = new ol.layer.VectorTile({
            visible : true,
            preload: 0,
            minResolution : 152.746,
            maxResolution : 610.984,
            style: set_genericStyle,
            source: new ol.source.VectorTile({
                tileGrid:ol.tilegrid.createXYZ(),
                format : new ol.format.MVT(),
                url: URL_2
            })
        });

        var URL_3 = 'file:///storage/emulated/0/Android/data/com.iic.naavic/files/'+localStorage.getItem('username')+'/vt_group3/{z}/{x}/{y}.pbf';
        offlineUsage3 = new ol.layer.VectorTile({
            visible : true,
            preload: 0,
            minResolution : 19.093,
            maxResolution : 152.746,
            style: set_genericStyle,
            source: new ol.source.VectorTile({
                tileGrid:ol.tilegrid.createXYZ(),
                format : new ol.format.MVT(),
                url: URL_3
            })
        });

        

        OfflinelayerEncBase = new ol.layer.Group({
            title: 'Offline ENC Base',
            type : 'wmts',
            layers: [offlineUsage1, offlineUsage2, offlineUsage3]
        });


        var URL_4 = 'file:///storage/emulated/0/Android/data/com.iic.naavic/files/'+localStorage.getItem('username')+'/vt_navaids/{z}/{x}/{y}.pbf';

        offlineNavAids = new ol.layer.VectorTile({
            preload: 0,
            // minResolution: 0.298,
            // maxResolution: 19.093,
            minResolution : 19.093,
            maxResolution : 152.746,
            style: set_genericStyle,
            source: new ol.source.VectorTile({
            tileGrid:ol.tilegrid.createXYZ(),
                format : new ol.format.MVT(),
                url: URL_4
            })
        });

        Offline_NavAids = new ol.layer.Group({
            title: 'Offline_NavAids',
            type : 'wmts',
            visible : true,
            layers: [offlineNavAids]
        });

       

        var URL_5 = 'file:///storage/emulated/0/Android/data/com.iic.naavic/files/'+localStorage.getItem('username')+'/vt_navhazards/{z}/{x}/{y}.pbf';
        offlineNavHazards = new ol.layer.VectorTile({
            title : 'Offline_NavHazards',
            visible : true,
            preload: 0,
            // minResolution: 0.298,
            // maxResolution: 19.093,
            minResolution : 19.093,
            maxResolution : 152.746,
            style: set_genericStyle,
            source: new ol.source.VectorTile({
                tileGrid:ol.tilegrid.createXYZ(),
                format : new ol.format.MVT(),
                url: URL_5
            })
        });

        Offline_NavHazards = new ol.layer.Group({
            title: 'Offline_NavHazards',
            type : 'wmts',
            visible : true,
            layers: [offlineNavHazards]
        });

       

        var URL_6 = 'file:///storage/emulated/0/Android/data/com.iic.naavic/files/'+localStorage.getItem('username')+'/vt_sounding/{z}/{x}/{y}.pbf';

        offlineSoundings = new ol.layer.VectorTile({
            preload: 0,
            style: set_genericStyle,
            // minResolution: 0.298,
            // maxResolution: 9.547,
            minResolution : 19.093,
            maxResolution : 152.746,
            source: new ol.source.VectorTile({
                tileGrid:ol.tilegrid.createXYZ(),
                format : new ol.format.MVT(),
                url: URL_6
            })
        });

        Offline_Soundings = new ol.layer.Group({
            title: 'Offline_Soundings',
            type : 'wmts',
            visible : true,
            layers: [offlineSoundings]
        });
        console.log("Offline_Soundings",Offline_Soundings);

        layerEncBase.setVisible(false);
       NavHazards.setVisible(false);
       NavAids.setVisible(false);
        Soundings.setVisible(false);
     

        map.addLayer(OfflinelayerEncBase);
        map.addLayer(Offline_NavAids);
        map.addLayer(Offline_NavHazards);
        map.addLayer(Offline_Soundings);
        console.log("Offline layers");
        offlineMap = true;
        localStorage.removeItem('showofflinemap');
        layerSwitcher.renderPanel();


    }
}

