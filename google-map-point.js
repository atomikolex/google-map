import '../../@polymer/polymer/polymer-element.js';
import '../google-apis-holdout/google-maps-api.js';
import { Polymer } from '../../@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'google-map-point',

  hostAttributes: {hidden: true},

  properties: {
    /**
     * The point's longitude coordinate.
     */
    longitude: {
      type: Number,
      value: null
    },

    /**
     * The point's latitude coordinate.
     */
    latitude: {
      type: Number,
      value: null
    }
  },

  /**
   * Returns the point as a Google Maps LatLng object.
   *
   * @return {google.maps.LatLng} The LatLng object.
   */
  getPosition: function() {
    return new google.maps.LatLng(this.latitude, this.longitude);
  }
});
