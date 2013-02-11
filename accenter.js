/*
*  Project: Accenter
*  Description: Shams diacritical marks to fonts that don't support them
*  Author: Samuel Vasko
*  License: DBAD
*/

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
}

Plugin.prototype.init = function () {
	// fetch input text
	var inputText  = $(this.element).text(),
		modified = '';

	// loop thru each letter
	for (var i = 0; i < inputText.length; i++) {
		var input = inputText[i],
			alt = letters[input.toLowerCase()],  // find it there is a unaccented alternative =
			output = input,
			elClass = ''; // class that will be applied to separated character

			// if unaccented alternative extis
			if ( typeof alt !== 'undefined' ) {
				output = alt['alt'];
				elClass = alt['elClass'];
				if ( input == input.toUpperCase() )
				{
					elClass += ' upper';
					output = output.toUpperCase();
				}
				// create element containing that letter
				output = '<span class="'+ elClass +'">'+output+'</span>';
				inputText[i] = output;
			}
			modified += output;
	}
	$(this.element).html(modified).css({'visibility': 'visible'});
};

$.fn[pluginName] = function ( options ) {
	return this.each(function () {
		if (!$.data(this, 'plugin_' + pluginName)) {
			$.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
		}
	});
};

}(jQuery, window));