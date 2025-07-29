/**
 * OpenLayers 3 Layer Switcher Control.
 * See [the examples](./examples) for usage.
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object} opt_options Control options, extends olx.control.ControlOptions adding:
 *                              **`tipLabel`** `String` - the button tooltip.
 */
 $(document).ready(function() {
 $(".disable").on('click', function(event){

     jAlert("do login")
 })
 });

ol.control.LayerSwitcher = function(opt_options) {

    var options = opt_options || {};

    var tipLabel = options.tipLabel ?
      options.tipLabel : 'Legend';

    this.mapListeners = [];

    this.hiddenClassName = 'ol-unselectable ol-control layer-switcher';
    if (ol.control.LayerSwitcher.isTouchDevice_()) {
        this.hiddenClassName += ' touch';
    }
    this.shownClassName = this.hiddenClassName + ' shown';

    var element = document.createElement('div');
    element.className = this.hiddenClassName;

    var button = document.createElement('button');
    button.setAttribute('title', tipLabel);
    element.appendChild(button);

    this.panel = document.createElement('div');
    this.panel.className = 'panel';
    element.appendChild(this.panel);
    ol.control.LayerSwitcher.enableTouchScroll_(this.panel);

    var this_ = this;

    button.onmouseover = function(e) {
        this_.showPanel();
    };

    button.onclick = function(e) {
        e = e || window.event;
        this_.showPanel();
        e.preventDefault();
    };

    this_.panel.onmouseout = function(e) {
        e = e || window.event;
        if (!this_.panel.contains(e.toElement || e.relatedTarget)) {
            this_.hidePanel();
        }
    };

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });

};

ol.inherits(ol.control.LayerSwitcher, ol.control.Control);

/**
 * Show the layer panel.
 */
ol.control.LayerSwitcher.prototype.showPanel = function() {
    if (this.element.className != this.shownClassName) {
        this.element.className = this.shownClassName;
        this.renderPanel();
    }
};

/**
 * Hide the layer panel.
 */
ol.control.LayerSwitcher.prototype.hidePanel = function() {
    if (this.element.className != this.hiddenClassName) {
        this.element.className = this.hiddenClassName;
    }
};

/**
 * Re-draw the layer panel to represent the current state of the layers.
 */
ol.control.LayerSwitcher.prototype.renderPanel = function() {

    this.ensureTopVisibleBaseLayerShown_();

    while(this.panel.firstChild) {
        this.panel.removeChild(this.panel.firstChild);
    }

    var ul = document.createElement('ul');
    this.panel.appendChild(ul);
    this.renderLayers_(this.getMap(), ul);

};

/**
 * Set the map instance the control is associated with.
 * @param {ol.Map} map The map instance.
 */
ol.control.LayerSwitcher.prototype.setMap = function(map) {
    // Clean up listeners associated with the previous map
    for (var i = 0, key; i < this.mapListeners.length; i++) {
        this.getMap().unByKey(this.mapListeners[i]);
    }
    this.mapListeners.length = 0;
    // Wire up listeners etc. and store reference to new map
    ol.control.Control.prototype.setMap.call(this, map);
    if (map) {
        var this_ = this;
        this.mapListeners.push(map.on('pointerdown', function() {
            this_.hidePanel();
        }));
        this.renderPanel();
    }
};

/**
 * Ensure only the top-most base layer is visible if more than one is visible.
 * @private
 */
ol.control.LayerSwitcher.prototype.ensureTopVisibleBaseLayerShown_ = function() {
    var lastVisibleBaseLyr;
    ol.control.LayerSwitcher.forEachRecursive(this.getMap(), function(l, idx, a) {
        if (l.get('type') === 'base' && l.getVisible()) {
            lastVisibleBaseLyr = l;
        }
    });
    if (lastVisibleBaseLyr) this.setVisible_(lastVisibleBaseLyr, true);
};

/**
 * Toggle the visible state of a layer.
 * Takes care of hiding other layers in the same exclusive group if the layer
 * is toggle to visible.
 * @private
 * @param {ol.layer.Base} The layer whos visibility will be toggled.
 */
ol.control.LayerSwitcher.prototype.setVisible_ = function(lyr, visible) {
    var map = this.getMap();
    lyr.setVisible(visible);
    if (visible && lyr.get('type') === 'base') {
        // Hide all other base layers regardless of grouping
        ol.control.LayerSwitcher.forEachRecursive(map, function(l, idx, a) {
            if (l != lyr && l.get('type') === 'base') {
                l.setVisible(false);
            }
        });
    }
    if (lyr.get('title') === 'Radar Overlay' && visible) {
    	var rextent =  [-9217667.392, 2756958.017, -8769501.710, 3219509.264];
    	map.getView().fit(rextent,map.getSize());
    }
//    if (lyr.get('title') === 'OpenStreetMap' && visible) {
//       // SatilliteLayer.setVisible(false);
//        //$(".bg-change").css("background-color", "#2c3e50");
//        //$("#gcd-button-control").css("background-color", "#2c3e50");
//        layerSwitcher.renderPanel();
//    }
//
//    if (lyr.get('title') === 'OpenStreetMap' && !visible) {
//       // SatilliteLayer.setVisible(true);
//        layerSwitcher.renderPanel();
//    }
//
//    if (lyr.get('title') === 'Point Of Interest' && visible) {
//            Clusters_new.setVisible(true);
//    }
//
//    if (lyr.get('title') === 'Point Of Interest' && !visible) {
//            Clusters_new.setVisible(false);
//    }

//    if (lyr.get('title') === 'Satillite Imagery' && visible) {
//        OSM.setVisible(false);
//      //  $(".bg-change").css("background-color", "#70012b");
//       // $("#gcd-button-control").css("background-color", "#70012b");
//        layerSwitcher.renderPanel();
//    }

//    if (lyr.get('title') === 'Satillite Imagery' && !visible) {
//        OSM.setVisible(true);
//        layerSwitcher.renderPanel();
//    }

    /*if (lyr.get('title') === 'MACHC ENC' && !visible) {
        layerEncBase.setVisible(true);
        NavAids.setVisible(true);
        NavHazards.setVisible(true);
        Others.setVisible(true);
        layerSwitcher.renderPanel();
    }

    if (lyr.get('title') === 'MACHC ENC' && visible) {
        layerEncBase.setVisible(false);
        NavAids.setVisible(false);
        NavHazards.setVisible(false);
        Soundings.setVisible(false);
        Others.setVisible(false);
        layerSwitcher.renderPanel();
    }*/
};

/**
 * Render all layers that are children of a group.
 * @private
 * @param {ol.layer.Base} lyr Layer to be rendered (should have a title property).
 * @param {Number} idx Position in parent group list.
 */
ol.control.LayerSwitcher.prototype.renderLayer_ = function(lyr, idx) {

    var this_ = this;

    var li = document.createElement('li');

    var lyrTitle = lyr.get('title');

    var lyrId = lyr.get('title').replace(/\s+/g, '-') + '_' + idx;

    var label = document.createElement('label');

    if (lyr.getLayers) {
                li.className = 'layer';
                var labels = document.createElement('label');
                var span = document.createElement('span');
                var input = document.createElement('input');
                if (lyr.get('type') === 'base') {
                    input.type = 'radio';
                    input.name = 'base';
                } else {
                    input.type = 'checkbox';
                }

                input.id = lyrId;
                input.checked = lyr.get('visible');
                input.onchange = function(e) {
                       this_.setVisible_(lyr, e.target.checked);
                };
                label.htmlFor = lyrId;
                label.innerHTML = lyrTitle;
                li.appendChild(label);
                labels.className = 'switch';
                span.className = "slider round switchdisable";
                labels.appendChild(input);
                labels.appendChild(span);
                li.appendChild(labels);

    } else {
        if ( lyrTitle == 'User Overlay' || lyrTitle == 'Current Stations' || lyrTitle == 'Tide Stations') {
                      if(localStorage.getItem('username') && localStorage.getItem('password')){
                          li.className = 'layer';
                       } else {
                          li.className = 'disable';
                       }
         } else {
                      li.className = 'layer';
         }
        var labels = document.createElement('label');
        var span = document.createElement('span');
        var input = document.createElement('input');
        if (lyr.get('type') === 'base') {
            input.type = 'radio';
            input.name = 'base';
        } else {
            input.type = 'checkbox';
        }
        input.id = lyrId;
        input.checked = lyr.get('visible');

    input.onchange = function(e) {
                    if((localStorage.getItem('username')==null) && (localStorage.getItem('password')==null) && (lyrTitle == 'User Overlay' || lyrTitle == 'Current Stations' || lyrTitle == 'Tide Stations')){
                                    e.target.checked = false;
                                    loginAlertPopup();
                    } else if ((localStorage.getItem('username')==null) && (localStorage.getItem('password')==null) && lyrTitle == 'OpenStreetMap') {
                                    e.target.checked = true;
                    } else {
                                    this_.setVisible_(lyr, e.target.checked);
                    }

                    };

        label.htmlFor = lyrId;
        label.innerHTML = lyrTitle;
        li.appendChild(label);
        labels.className = 'switch';
        span.className = "slider round switchdisable";
        labels.appendChild(input);
        labels.appendChild(span);
        li.appendChild(labels);
    }

    return li;
};

/**
 * Render all layers that are children of a group.
 * @private
 * @param {ol.layer.Group} lyr Group layer whos children will be rendered.
 * @param {Element} elm DOM element that children will be appended to.
 */
ol.control.LayerSwitcher.prototype.renderLayers_ = function(lyr, elm) {
    var lyrs = lyr.getLayers().getArray().slice().reverse();
    for (var i = 0, l; i < lyrs.length; i++) {
        l = lyrs[i];
        if (l.get('title')) {
            elm.appendChild(this.renderLayer_(l, i));
        }
    }
};

/**
 * **Static** Call the supplied function for each layer in the passed layer group
 * recursing nested groups.
 * @param {ol.layer.Group} lyr The layer group to start iterating from.
 * @param {Function} fn Callback which will be called for each `ol.layer.Base`
 * found under `lyr`. The signature for `fn` is the same as `ol.Collection#forEach`
 */
ol.control.LayerSwitcher.forEachRecursive = function(lyr, fn) {
    lyr.getLayers().forEach(function(lyr, idx, a) {
        fn(lyr, idx, a);
        if (lyr.getLayers) {
            ol.control.LayerSwitcher.forEachRecursive(lyr, fn);
        }
    });
};

/**
* @private
* @desc Apply workaround to enable scrolling of overflowing content within an
* element. Adapted from https://gist.github.com/chrismbarr/4107472
*/
ol.control.LayerSwitcher.enableTouchScroll_ = function(elm) {
   if(ol.control.LayerSwitcher.isTouchDevice_()){
       var scrollStartPos = 0;
       elm.addEventListener("touchstart", function(event) {
           scrollStartPos = this.scrollTop + event.touches[0].pageY;
       }, false);
       elm.addEventListener("touchmove", function(event) {
           this.scrollTop = scrollStartPos - event.touches[0].pageY;
       }, false);
   }
};

/**
 * @private
 * @desc Determine if the current browser supports touch events. Adapted from
 * https://gist.github.com/chrismbarr/4107472
 */
ol.control.LayerSwitcher.isTouchDevice_ = function() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch(e) {
        return false;
    }
};
