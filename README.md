
# Badgeboard

This is an awesome information radiator
to show the status of the badges you
have in your project.

![](https://raw.githubusercontent.com/pystol/badgeboard/master/assets/images/badgeboard.png)

A badge is any visual token of achievement,
affiliation, authorization, or other trust
relationship.
The badges are displayed as a CI dashboard.

## Demo

Just [open the index.html](https://badgeboard.pystol.org/)
file and see how the dashboard is rendered.

## Requirements

None! Just clone the repo and open the index.html file
in your favorite browser.

Once you have a copy, make the adjustments to the configuration
file located in **assets/data_source/badges_list.js** to use your
own badges.

**Note:** Due to CORS restrictions, this page uses a
[proxy](https://cors-anywhere.herokuapp.com/)
to add cross-origin headers when building the widgets panel.
Check additional information about the CORS proxy on
[NPM](https://www.npmjs.com/package/cors-anywhere).

## How it works

We capture the badges list (SVG files) and
we read the color information from a single pixel,
from there, depending on the color of the pixel the
widget is painted with its corresponding color.

![](https://raw.githubusercontent.com/pystol/badgeboard/master/assets/images/measure.png)

This would be the ussual view of the project badges.

![](https://raw.githubusercontent.com/pystol/badgeboard/master/assets/images/badges.png)

## Adding your badges and colors

Use the **coordinates_testing.html** file
to determine based on the SVG coordinates
the RGB color to be used in the JS configuration
file.

To do so, copy the link to your badge, find the
badge example in the file, replace it with yours,
open the file in a browser, get the console logs
and move around the mouse over the badge to see
the coordinates and the RBG color that matches it.

## Adding custom color badges

To add new colors, edit the **assets/css/custom.css** file and
add new color definitions for the widgets. Once
you define the new color, in the configuration file
called **assets/data_source/badges_list.js**
use the new color like in the following example.

```bash
colors:[['<new_color_definition','<matching_rgb_from_the _badge>'],['status-good','48,196,82']],
```

## References

We use both [smashing](https://github.com/smashing/smashing)
and [gridster](https://github.com/ducksboard/gridster.js)
to create the dashboard and its widgets.

## License

Badgeboard is part of Pystol and Pystol is
open source software licensed under the
[Apache license](LICENSE).
