module MessagesHelper



  def nested_messages(messages,counter=0)


    messages.map do |message, sub_messages|
 #     message.inspect
#p counter
#puts message
#print message
#p message
#require 'awesome_print'
      #
p message
p  counter
#ap      message
#sub_messages.inspect

     counter =  counter + 1
      render(message) + content_tag(:div, nested_messages(sub_messages,counter), :class => "nested_messages")
    end.join.html_safe

#p @counter
#    counter = counter + 1
#    puts 'ofer after recursion'
#    p counter
  end
end
