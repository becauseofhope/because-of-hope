http_path    = "/"
project_path = "."
css_dir      = "content/assets/stylesheets"
sass_dir     = "content/assets/stylesheets"
images_dir   = "content/assets/images"
relative_assets = true

# when using SCSS:
sass_options = {
  :syntax => :scss
}

add_import_path(Gem::Specification.find_by_name('foundation-rails').gem_dir + '/vendor/assets/stylesheets')

if ENV['NANOC_ENV'] == 'production'
  output_style = :compressed
end
