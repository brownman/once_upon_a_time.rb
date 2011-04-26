class MessagesController < ApplicationController
  def index
    @messages = Message.scoped
    @message = Message.new
    first_m = @messages.first
    recurse1(first_m) if first_m && first_m.children.length > 0
    
 calculate_absolute_x(first_m) if first_m && first_m.children.length > 0
    # @messages.each do |message|
    #   message.y = message.depth
    #  end

  end

  def show
    @message = Message.find(params[:id])     

   # y=Message.depth
   # x=Message.depth
   # @message.x= x
   # @message.y= y #@message.depth

    @message.save

    #  ap @message
  end

  def new #position will be updated by the index to all nodes

    @message = Message.new(:parent_id => params[:parent_id])
  end

  def create
    @message = Message.new(params[:message])
    if @message.save
      redirect_to messages_url
    else
      render :new
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    redirect_to messages_url
  end

  protected
  def calculate_absolute_x(me,base_x=0)


    sib_offset=0
    me.children.each do |m| #if me.children.length >0
                 
    sib_offset=sib_offset+1
    
    m.ab_x = base_x + sib_offset*30
    m.save

    calculate_absolute_x(m,m.ab_x)
    end
  end    
  
  def recurse1(me,vertical=0)

    horizontal = 0

    me.children.each do |m| #if me.children.length >0; end

    m.y = vertical

    m.x = horizontal
    horizontal+=1
    m.save

    recurse1(m,vertical+1)
    end
  end 

end


