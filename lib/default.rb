# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

# https://github.com/jingoro/nanoc-html5boilerplate/blob/master/lib/default.rb

require 'compass'
require 'faker'
require 'nanoc/filters/javascript_concatenator'
require 'nanoc/filters/image_compressor'

include Nanoc::Helpers::XMLSitemap

unless defined? LOADED_DEFAULT_CONFIG
  LOADED_DEFAULT_CONFIG = true

  require 'compass'
  Compass.add_project_configuration 'compass/config.rb' # when using Compass 0.10
  include Nanoc::Helpers::Rendering
end
