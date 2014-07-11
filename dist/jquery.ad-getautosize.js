/*! jQuery getAutosize Plugin - v1.0.3 - 2014-07-11
* https://github.com/abhishekdev/jquery-getAutosize
* Copyright (c) 2014 Abhishek Dev; Licensed MIT 
*/
(function($) {
  
  /**
   * @author      Abhishek Dev
   * @date        2010-Nov-18
   * @modified    2011-Jan-06 by Abhishek Dev
   * @version     1.0.1
   * @requires    jQuery 1.4.2
   * @description This plugin returns the max dimensions of the DOM element if it were to auto size. Useful for speculating best size for content already present on screen.
   * e.g. A good usecase is when Dialogs have to be sized to autofit its content
   * NOTE: Tables must have a defined margin value else IE7 computes margin as auto
   *
   * @returns {Object} Dimensions Plain object with 'width' & 'height' property 
   *
   * @example var dimensions = $([selector]).getAutosize();
   * autoWidth = dimensions.width;
   * autoHeight = dimensions.height; 
   */
    $.fn.getAutosize = function() {
      var dimension = { width: null, height: null },
          pluginID = "ad-getAutosize-tracker",
          element = this.get(0), // Act on the first element only
          nodeType = element.tagName.toUpperCase(),
          $autoSizeContainer = $("#" + pluginID), // "invisible" canvas area rendered outside viewport
          $element = $(element), 
          $clone, j, prop,
          cssValues = {},
          cssProperties = [
          'paddingTop',
          'paddingRight',
          'paddingBottom',
          'paddingLeft',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'fontSize',
          'fontFamily',
          'fontWeight',
          'lineHeight',
          'maxHeight',
          'maxWidth',
          'minHeight',
          'minWidth'];


          if($element.length){

        // Check if the div#autoSizeTrack exits, else create it just once on a page
        if (!$autoSizeContainer.length) {
          $autoSizeContainer = $("<div></div>", { id: pluginID, 'class': pluginID });
          $autoSizeContainer.css({ position: "absolute", top: 0, left: "-9999px" }); // fall-back if CSS class definition is not there
          $('body').append($autoSizeContainer);
        }
        
        // Clone the element
        $clone = $element.clone(); // no need to copy event handlers

        // Read and Create CSS {property:value} map for the element
        for (j = cssProperties.length - 1; j >= 0 ; --j) {
          prop = cssProperties[j];

          //Tables with line-height cause trouble, see plugin notes for more caveats
          if(nodeType === "TABLE" && prop ==='lineHeight'){
            continue;
          }

          cssValues[prop] = $element.css(prop);
        }

        $clone.css(prop, cssValues); // Apply styles and render in invisible element
        $autoSizeContainer.append($clone);
        $clone.show(); // handle case when display property is set to none by inline CSS

        // Get dimension of the tracker
        dimension.width = $autoSizeContainer.width();
        dimension.height = $autoSizeContainer.height();

        // Clean up the tracker
        $autoSizeContainer.empty();
      }


    // return the dimension object or null
    return (dimension.width != null && dimension.height !=null ) ? 
              dimension : null;
  };

}(jQuery));
