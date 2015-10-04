#requests sinatra gem
require 'sinatra'

#requests mandrill gem
require 'mandrill'

#/home is url specification and :home is the file name/key preceded by erb to
#specify it as an erb file from sub directory

#get methods to retrieve erb files
get '/home' do
	erb :home
end

get '/discover' do
	erb :discover
end

get '/location' do
	erb :location
end

#contact function for contact form
def send_email(message_body, name_input, email_input)
 m = Mandrill::API.new 
message = {  
	:subject=> "Hello from the Mandrill API",  
	:from_name=> name_input,  
	:text=> message_body,  
	:to=>[{:email=> "recipient@dom.com", :name=> "Rec Name"}],  
	:html=>"<html><h1>Hi <strong>message</strong>, how are you?</h1></html>",  
	:from_email=>email_input } 
end


post "/contact-us-post" do
  # this invokes the send_email method defined above
  send_email(params[:message_body],params[:name_input],params[:email_input])
end