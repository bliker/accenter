/*
 *  Project: Accenter
 *  Description: Shams diacritical marks to fonts that don't support them
 *  Author: Samuel Vasko
 *  License: DBAD
 */

// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, undefined ) {

  // Create the defaults once
  var pluginName = 'accenter',
      document = window.document,
      defaults = {
        propertyName: "value"
      };

  // The actual plugin constructor
  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;
    this.init();
    this.text = this.text();
  }

  Plugin.prototype.init = function () {

  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  };

}(jQuery, window));