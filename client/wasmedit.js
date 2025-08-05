const originalFillText = CanvasRenderingContext2D.prototype.fillText;
const originalStrokeText = CanvasRenderingContext2D.prototype.strokeText;

const REPLACES = new Map([
  ["diep.io", "[razor]"],
  // add more replacements here
]);

function transformText(text) {
  if (REPLACES.has(text)) return REPLACES.get(text);
  return text;
}

CanvasRenderingContext2D.prototype.fillText = function(text, x, y, maxWidth) {
  // 1) Draw original text invisibly by making fillStyle fully transparent
  const originalFillStyle = this.fillStyle;
  this.fillStyle = 'rgba(0,0,0,0)'; // invisible
  originalFillText.call(this, text, x, y, maxWidth);
  // 2) Draw transformed text normally
  this.fillStyle = originalFillStyle;
  originalFillText.call(this, transformText(text), x, y, maxWidth);
};

CanvasRenderingContext2D.prototype.strokeText = function(text, x, y, maxWidth) {
  // 1) Draw original text invisibly by making strokeStyle fully transparent
  const originalStrokeStyle = this.strokeStyle;
  this.strokeStyle = 'rgba(0,0,0,0)'; // invisible
  originalStrokeText.call(this, text, x, y, maxWidth);
  // 2) Draw transformed text normally
  this.strokeStyle = originalStrokeStyle;
  originalStrokeText.call(this, transformText(text), x, y, maxWidth);
};