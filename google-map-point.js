import '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/google-apis/google-maps-api.js';
import { Polymer } from '../../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

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
