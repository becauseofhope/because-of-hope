use Rack::Static, :urls => [""], :root => 'output', :index =>
'index.html'

run Rack::File.new("output")
