class AddBuyTicketLinkToScheduledEvents < ActiveRecord::Migration
  def change
    add_column :scheduled_events, :buy_ticket_link, :string
  end
end
