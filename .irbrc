require 'rubygems'
require 'wirble'
require 'hirb'
require 'interactive_editor'

Wirble.init
Wirble.colorize
Hirb::View.enable
extend Hirb::Console

# IRB Options
IRB.conf[:AUTO_INDENT] = true
IRB.conf[:SAVE_HISTORY] = 1000
IRB.conf[:EVAL_HISTORY] = 200

# Log to STDOUT if in Rails
if ENV.include?('RAILS_ENV') && !Object.const_defined?('RAILS_DEFAULT_LOGGER')
  require 'logger'
  # RAILS_DEFAULT_LOGGER = Logger.new(STDOUT)
  # IRB.conf[:USE_READLINE] = true

  # Display the RAILS ENV in the prompt
  # ie : [Development]>> 
  IRB.conf[:PROMPT][:CUSTOM] = {
   :PROMPT_N => "[#{ENV["RAILS_ENV"].capitalize}]>> ",
   :PROMPT_I => "[#{ENV["RAILS_ENV"].capitalize}]>> ",
   :PROMPT_S => nil,
   :PROMPT_C => "?> ",
   :RETURN => "=> %s\n"
   }
  # Set default prompt
  IRB.conf[:PROMPT_MODE] = :CUSTOM
end

