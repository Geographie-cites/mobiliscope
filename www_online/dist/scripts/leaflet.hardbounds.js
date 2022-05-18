L.Map.prototype._panHardBounds = function() {
	this.panInsideBounds(this.options.maxBounds, { animate: false });
};

L.Map.prototype.addHardBounds = function() {
	this.on('drag', this._panHardBounds);
};

L.Map.prototype.removeHardBounds = function() {
	this.off('drag', this._panHardBounds);
};