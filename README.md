# Because of Hope

[becauseofhope.org](http://www.becauseofhope.org) _Not yet deployed!_

This is the source for Because of Hope's website. BOH is a 501(c)(3)
organization.

The website and infrastructure is still under heavy development and iteration.
It is meant to replace the $20 a month VPS that currently serves 2 HTML files
with a GoDaddy domain name/DNS with an Amazon S3-backed static website with
a domain name/DNS not by GoDaddy at least. BOH will be paying pennies,
literally.

For now, all artwork, text, and design that made by Because of Hope should be
considered "All Rights Reserved". Everything else is under their original
license.

## Tools used

* Zurb Foundation
* Compass
* nanoc
* Haml

## Sources

Former background is from subtlepatterns.com as Concrete Wall.

## Expected Image Specifications

### Photoshop

"Save for Web", High, JPG

### Header Images

Header images should have dimensions of 1000x200.

## Workarounds

### Stack level errors

When using the built-in server of `nanoc`, Compass seems to break the stack.
Use this command to get around that for a longer period of time.

`ulimit -s 40000`

## References, notes, and links for stuff used.

[Credentials for fog deployment](https://github.com/ddfreyne/nanoc/issues/100)
