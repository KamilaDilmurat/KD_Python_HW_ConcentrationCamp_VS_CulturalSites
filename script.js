

require([
        "esri/WebScene",
        "esri/views/SceneView",
        "esri/layers/Layer"
      ], function (Map, SceneView, Layer) {
        const map = new Map({
          basemap: "dark-gray",
          ground: "world-elevation" 
        });

       var view = new SceneView({
          map: map,
          container: "viewDiv",
         scale: 500000,
          center: [87.5, 43.8]
        });

        var layer = Layer.fromPortalItem({
          portalItem: {
            id: "001215337f694fb4a44264582520d507"
          }
        })
          .then(addLayer)
          .catch(rejection);
  
  

        // Adds the layer to the map once it loads
        function addLayer(layer) {
          map.add(layer);
        }
        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }
      });
  
var camera = new Camera({
        position: [
          -90.1994, // lon
          38, // lat
          10000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });


var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [ber, bei,stl].forEach(function(button) {
      button.style.display = '.esri-button';
      view.ui.add(button, 'bottom-right');
    });
    

ber.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 13.36,
          y: 52.56,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });

    bei.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 116.4074,
          y: 39.9042,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
      
      
   stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
 
    
