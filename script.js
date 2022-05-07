    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
	   "esri/widgets/Home",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "dojo/domReady!"
      
    ], function(WebScene, SceneView, Camera,Legend,LayerList, Home) {
    
 
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"e4eba2a7ea814b4eb0a6ec03344140a2" 
        }
      });
      
      var camera = new Camera({
        position: [
           87.81,// lon
          43.382655, // lat
          5000// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        camera: camera
    });
	
	var homeBtn = new Home({
        view: view
      });
      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
   


    });
view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = scene.layers.getItemAt(1);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: " What is in this map  "
          }]
        });
      
   view.ui.add(legend, "bottom-right");
   view.ui.add(layerList, "bottom-right");
   });
var layerList = new LayerList({
  view: view
});
