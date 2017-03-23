const colorService = {
  isHex: function(string) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(string);
  },
  isRgb: function(string) {
    //Figure this out
  },
  isRgba: function(string) {
    //Figure this out
  },
  hexToRgba: function(hex, opacity) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, hex.length / 3), 16);
    let g = parseInt(hex.substring(hex.length / 3, 2 * hex.length / 3), 16);
    let b = parseInt(hex.substring(2 * hex.length / 3, 3 * hex.length / 3), 16);

    return 'rgba(' + r +', ' + g + ', ' + b +', ' + opacity +')';
  },
  rgbToRgba: function(rgb, opacity) {
    return rgbString.replace('rgb', 'rgba').replace(')', ', ' + opacity + ')');
  }
}

module.exports = colorService;
