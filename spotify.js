window.onSpotifyIframeApiReady = (IFrameAPI) => {
     let element = document.getElementById('embed-iframe');
     let options = {
          width: 1000,
          height: 500,
         uri: 'spotify:playlist:0HsQ2Lh6Fl7SFr18hAfQmH' 
       };
     let callback = (EmbedController) => {};
     IFrameAPI.createController(element, options, callback);
   };

   EmbedController.loadUri('spotify:playlist:0HsQ2Lh6Fl7SFr18hAfQmH');


