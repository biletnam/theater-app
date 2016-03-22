class Message < MailForm::Base
  attribute :name, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :subject, :validate => true
  attribute :content, :validate => true
  attribute :nickname, :captcha => true

  def headers 
    {
      :subject => "Contact Message",
      :to => ENV["admin_email"],
      :from => %("#{name}" <#{email}>)

    }
  end

end
