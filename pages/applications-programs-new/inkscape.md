# Inkscape

* https://inkscape.org/
* https://inkscape-manuals.readthedocs.io/en/latest/



## Menu Issues

Menu drop-downs + tablet drawing disappears appear on the wrong screen workaround

* Always set Inkscape m0nitor to right of main monitor
* Move Inkscape back and forth between monitor 1 and monitor 2.
* In windows display settings, choose your top left most monitor. Mark it 'make this my main display'.

## Printing

US Paper
width 279.4
height 215.9

bounding box
x: 2.5mm
y: 2.5mm
w: 270mm
h: 209mm

## Incorrect offset

* https://bugs.launchpad.net/inkscape/+bug/1188211
* https://gitlab.com/inkscape/inbox/-/issues/2429
* https://gitlab.com/inkscape/inkscape/-/issues/1892

Workaround:

* Set all displays to identical resolution * zoom
* Disable any monitors that cannot adapt to the requires settings

## About

* Looks like most power of any of the apps

## Zoom

* 1: zoom 1:1
* 2: zoom 1:2
* 3: zoom to selection
* 4: zoom to drawing
* 5: zoom to page
* Ctrl-E || 6: zoom to page width
* Ctrl-4: center page in view (without changing zoom level)

## Copying

Control-C
Ctrl-D: duplicate
Alt-D: clone

Shift + Alt + D, Edit ‣ Clone ‣ Unlink Clone or by clicking on the corresponding icon Unlink clone icon in the command bar.

To select the original of a clone, you can press Shift + D

## Tips

* Set default style for a tool: double click icon
* UI toggle: F12
* document properties > shift-ctrl-D
* Drag colors from horizontal color palette to Fill and Stroke boxes

## Docs

* Keys: https://inkscape.org/doc/keys.html
* https://inkscape-manuals.readthedocs.io/en/latest/
* http://tavmjong.free.fr/INKSCAPE/MANUAL/html/index.php

## Opaque background

* https://graphicdesign.stackexchange.com/questions/2197/how-can-i-export-as-png-without-alpha/77515#77515

> Go to Document properties → Page and click on "Background color" (bottom of popup). Adjust "alpha" there. Setting the background color to #ffffffff sets the background to white and opaque. Setting it to #000000ff creates an opaque black background.
