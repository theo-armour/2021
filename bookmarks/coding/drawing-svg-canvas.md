# Drawing

## Articles

* https://www.eisfunke.com/article/svg-the-good-the-bad-and-the-ugly.html

## Drawing SVG

### Creators

* https://news.ycombinator.com/item?id=26036719
* https://www.softr.io/tools/svg-shape-generator


## Drawing SVG

* https://www.autodraw.com/
	* Draws for you
* https://boxy-svg.com/
	* for drawing not handwriting
* https://app.diagrams.net/
	* No touch
	* No good free hand
* https://excalidraw.com/
	* Collaborative
	* Excellent handwriting
	* Export to SVG, Clipboard, Link
* https://www.hand-write.com/
	* s pen support 2014
	* App only
* https://inker.co
	* for drawing
* https://inkscape.org/
	* Download only
* https://keep.google.com/
	* no svg export
* https://editor.method.ac/
	* GH 2021 / drawing / No SVG
	* https://github.com/methodofaction/Method-Draw
* https://sketch.io/sketchpad
	* exports to svg
	* very good for handwriting
	* Closed source
	* Online, app, download
* https://www.squidnotes.com/
	* Available as an app only??
* https://vectr.com
	* for drawing not handwriting
	* No touch capability



## Tech on GitHub

* http://drawsvg.org/drawsvg.html
	* No touch support
	* https://github.com/DRAWSVG/drawsvg-editor
* https://editor.graphite.design/

* https://yqnn.github.io/svg-path-editor/
	* good editor
	* Not so good for drawing
* https://frangoteam.github.io
	* Then go to editor
	* More for drawing8
* https://n-peugnet.github.io/image-map-creator/
* https://github.com/rough-stuff/rough
* https://turnerdev.github.io/svg-studio/
	* https://github.com/turnerdev/svg-studio
* https://svgedit.netlify.app/editor/index.html
	* https://github.com/SVG-Edit/svgedit


## Portal

* https://www.justinmind.com/blog/11-great-free-paid-svg-editors-for-ux-designers/
* https://www.pngtosvg.com/blog/top-24-online-and-offline-vector-graphics-editor/
* https://www.sitepoint.com/6-free-web-based-svg-editors-compared/


## Android

### Autodesk Sketchbook ~ https://www.autodesk.com/products/sketchbook/overview

* Bitmap only
* Download or app
* Can set image size
* Saves directly to Drive
* Many cool brushes
* UI complex though

### Google Canvas ~ https://canvas.apps.chrome/

* Bitmap only
* Can export png to Google Drive
* Then open with irfanview

### OneNote

* Export to PDF
* https://www.onenote.com/hrd

### Evernote


## Canvas HTML


		const size = 512;
		canvas = parent.locationMap.appendChild( document.createElement( 'canvas' ) );
		canvas.width = canvas.height = size;
		canvas.style.cssText = 'border: 1px solid gray; ';
		context = canvas.getContext( '2d' );

	function canvasText( text, color ) {
		var canvas = document.createElement( 'canvas' );
		var context = canvas.getContext( '2d' );

		context.font = '18px sans-serif';
		var width = context.measureText( text );

		canvas.width = ( width.width + 10 ) ; // 480
		canvas.height = 20;

		context.fillStyle = color;
		context.fillRect( 0, 0, canvas.width, canvas.height);

		context.lineWidth = 1 ;
		context.strokeStyle = '#000';
		context.strokeRect( 0, 0, canvas.width, canvas.height);

		context.fillStyle = '#000' ;
		context.font = '18px sans-serif';
		context.fillText( text, 5, 17 );

		var texture = new THREE.Texture( canvas );
		texture.needsUpdate = true;
		return texture;

	}
