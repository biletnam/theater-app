class Vendor < MailForm::Base
  attribute :name, :validate => true
  attribute :subject, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :venue_name, :validate => true
  attribute :venue_address, :validate => true
  attribute :venue_city, :validate => true
  attribute :venue_state, :validate => true
  attribute :venue_zip, :validate => true
  attribute :phone, :validate => true
  attribute :sg_venue_id
  attribute :content, :validate => true
  attribute :file, :attachment => true
  attribute :nickname, :captcha => true

  def headers 
    {
      :subject => "Vendor Request",
      :to => ENV["admin_email"],
      :from => %("#{name}" <#{email}>)    
    }
  end

end
