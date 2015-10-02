# Because of Hope

[becauseofhope.org](http://www.becauseofhope.org)

This is the sourcecode for Because of Hope's website. BOH is a 501(c)(3)
organization in Santa Barbara that helps widows and orphans through sustainable
means.

We were replacing:

* $20/month VPS, GoDaddy registar/DNS, 2 HTML files

with

* 3¢/month Amazon S3 Static Website hosting, Cloudflare, Namecheap

This new setup will allow BOH to take on multiple DDOS attacks from the
internets and get away with paying for it all with the change we find in the
couch or nothing since Amazon waives all bills with less than 12¢ in them.

For now, all artwork, text, and design that made by Because of Hope should be
considered "All Rights Reserved". Everything else is under their original
license or BSD. You are more than welcome to use them as reference for your own
nanoc-powered site.

## Tools used

* Zurb Foundation
* Compass
* nanoc
* haml

## Development

This project is in sort of a freeze. For a static site, this is pretty fine.
The stuff in the Gemfiles will only be updated if it fails to compile on newer
OS versions. No major refactoring is on the horizon.

Ruby 2.1 is the last Ruby version supported. Luckily, since this is just
a statically generated site, this is fine.

## Expected Image Specifications

### Photoshop

"Save for Web", High, JPG, Progressive


### Header Images

Header images should have dimensions of 1000x200.


## References, notes, and links for stuff used.

[Credentials for fog deployment](https://github.com/ddfreyne/nanoc/issues/100)
