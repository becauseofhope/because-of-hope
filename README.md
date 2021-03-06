# :warning: SUPERCEDED :warning:

:moyai:

This has been superseded by the Shopify Store and hosting at [https://becauseofhope.org](http://www.becauseofhope.org). 

Some elements of the old site have been rebuilt as web components for use in the Shopify Hosting. Those can be found at the [boh_components repository](https://github.com/becauseofhope/boh_components). 

# Because of Hope Website

[https://becauseofhope.org](http://www.becauseofhope.org)

This was the source code for Because of Hope's website. BOH is a 501(c)(3)
organization in Santa Barbara, CA that helps widows and orphans through
sustainable means.

## License

All artwork, text, and design that made by Because of Hope is to be considered
"All Rights Reserved". Everything else is under their original license or BSD.
You are more than welcome to use them as reference for your own nanoc-powered
site.

## Development

This project is in a freeze technology-wise. For a static site like this, this
is pretty fine and is a perfect example of their low-maintenance properties.
The Ruby gems specified in the `Gemfile`s will only be updated if they fails to
compile on newer OS versions. No major refactoring is on the horizon.

Ruby 2.1.7 is the last Ruby version supported. Anything newer explodes for some
reason. That's A-OK! We don't need the latest and greatest as long as things
can still run.

Pull requests can be made and a suite of services will try to compile the site.

* Heroku will compile and deploy the site to its own review application. This
  is the blue deploy link that will show up in about two minutes. Subsequent
  changes and deployment will take about half that time. The site is compiled
  in development mode so while the images are not production quality, it is
  a fairly good representation of the site if content is changed and whatnot.
* Travis CI will attempt to compile the site. This ensures the site will
  compile. This is not the same test that @homu starts as it does not contain
  changes from the `master` branch nor does it upload anywhere. This build is
  done to ensure the branch *can* build on Travis which @homu will eventually
  do if the pull request is approved.
* Codeship will also attempt to compile the site. This ensures the site will
  compile. This is not the same test that @homu starts as it does not contain
  changes from the `master` branch nor does it upload anywhere. This one is
  just done for fun.
* CircleCI will also attempt to compile the site. This ensures the site will
  compile. This is not the same test that @homu starts as it does not contain
  changes from the `master` branch nor does it upload anywhere. CircleCI
  results tend to come back in *much* faster than Travis or Codeship as it is
  fairly aggressive with caching the build environment.

A pull request will be merged if a reviewer tells the @homu bot that the
changes are okay and that the post-merged test of the current `master` branch
and the pull request compile on Travis CI. After approval and a successful
compilation of the merged result, the `master` branch will be updated and it
will automatically be deployed to S3 and be live on the main site at
https://becauseofhope.org.

**Note**: The main website is behind Cloudflare which has aggressive caching.
You may need to force reload (look on Google) the website to see the changes.
This does not apply to the pull-request generated apps on Heroku.

## History

We were replacing:

* $20/month GoDaddy VPS, 2 HTML files

with

* 2¢/month Amazon S3 Static Website hosting, Cloudflare

This new setup allowed Because of Hope to take on multiple DDOS attacks were it
to ever happen from the internets and get away with paying for it all with the
change we find in the couch or nothing since Amazon waives all bills with less
than 12¢ in them.

## A sample of the tools used

* Zurb Foundation
* Compass
* nanoc
* haml
* Markdown

## Expected Image Specifications

### Photoshop

"Save for Web", High, JPG, Progressive

### Header Images

Header images should have dimensions of 1000x200.
