# material-color-pal
Super tiny collection of material palettes for use in javascript

Apache Licence 2.0

## Example Usage
```javascript
    var color =  mColorPalettes.amber;
    var primary = color.Main500;
    var darkPrimary = color.Main700;
    var secondary = mColorPalettes.red.Accent400;
    
    document.getElementById("status-bar").setAttribute("style","background-color:" + darkPrimary +";");
    document.getElementById("header").setAttribute("style","background-color:" + primary +";");
    document.getElementById("floating-action-button").setAttribute("style","background-color:" + primary +";");
```
Full list of colors available at https://www.google.com/design/spec/style/color.html
Palette names are camelCased with spaces removed, so "Deep Orange" becomes "mColorPalettes.deepOrange"

the main set of colors are pefixed with "Main" (e.g. Main200) and accent colors are prefixed with "Accent" (e.g. Accent200)

