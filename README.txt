Tested on macOS 11.6.2 with Python 3.9.5

1. Install GDAL

- GDAL_Complete-3.2.dmg
- https://www.kyngchaos.com/software/archive/gdal-complete/

Make sure Python 3.9 is installed
Check in Terminal with: python3 --version
If not installed there is a python installer in GDAL_Complete-3.2.dmg

2. Put GPX files (filename.gpx) with "tracks" layers in input folder

3. Double click the executable file DoubleClickMe

It will merge the GPX files and open qgis2web/index.html in default browser
You can copy the content of qgis2web folder to a server
You can adjust color and line thickness on line 24 in:
qgis2web/styles/mergedgpxfiles_1_style.js
'rgba(255,0,0,1.0)'