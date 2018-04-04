import '../polymer/polymer.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
import '../google-apis/google-maps-api.js';

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
