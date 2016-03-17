(function() {
  var Tooltip,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Tooltip = (function(_super) {
    __extends(Tooltip, _super);

    function Tooltip(msg, width, height, radius) {
      this.msg = msg;
      this.width = width != null ? width : 50;
      this.height = height != null ? height : 30;
      this.radius = radius != null ? radius : 4;
      this.initialize();
      this.x = 0;
      this.y = 0;
      this.shape = null;
      this.text = null;
      this._draw();
    }

    Tooltip.prototype._draw = function() {
      var arrowHeight, arrowWidth, fillColor, fontColor, g, shadowColor;

      fillColor = "#000";
      shadowColor = "#000";
      fontColor = "#fff";
      arrowWidth = 6;
      arrowHeight = 6;
      this.shape = new createjs.Shape();
      g = this.shape.graphics;
      g.beginFill(fillColor);
      g.drawRoundRect(this.x, this.y, this.width, this.height - arrowHeight, this.radius);
      g.moveTo((this.width * 0.5) - arrowWidth, this.height - arrowHeight);
      g.lineTo(this.width * 0.5, this.height);
      g.lineTo((this.width * 0.5) + arrowWidth, this.height - arrowHeight);
      g.endFill();
      this.shape.shadow = new createjs.Shadow(shadowColor, 0, 0, 6);
      this.shape.alpha = 0.6;
      this.addChild(this.shape);
      this.text = new createjs.Text(this.msg, "12px Arial", fontColor);
      this.text.textAlign = "center";
      this.text.textBaseline = "bottom";
      this.text.maxWidth = this.width;
      this.text.x = this.width * 0.5;
      this.text.y = ((this.height + 4 - arrowHeight) + this.text.getMeasuredHeight()) * 0.5;
      this.addChild(this.text);
    };

    return Tooltip;

  })(createjs.Container);

  this.foo9 = this.foo9 || {};

  this.foo9.createjs = this.foo9.createjs || {};

  this.foo9.createjs.Tooltip = Tooltip;

}).call(this);