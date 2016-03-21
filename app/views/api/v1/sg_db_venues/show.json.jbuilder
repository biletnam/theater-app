json.id @sg_db_venue.id
json.name @sg_db_venue.name
json.street_address @sg_db_venue.street_address
json.city_state @sg_db_venue.city_state
json.city @sg_db_venue.city
json.state @sg_db_venue.state
json.zip_code @sg_db_venue.zip_code
json.phone @sg_db_venue.phone
json.website @sg_db_venue.website
json.image @sg_db_venue.image
json.latitude @sg_db_venue.latitude
json.latitude @sg_db_venue.longitude
json.twitter_handle @sg_db_venue.twitter_handle
json.stage_width @sg_db_venue.stage_width
json.stage_height @sg_db_venue.stage_height
json.stage_x_offset @sg_db_venue.stage_x_offset
json.stage_y_offset @sg_db_venue.stage_y_offset
json.seating_chart @sg_db_venue.seating_chart
json.user_id @sg_db_venue.user_id
json.sg_venue_id @sg_db_venue.sg_venue_id

json.sg_sections @sg_db_venue.sg_sections.each do |section|
  json.id section.id
  json.name section.name
  json.number_rows section.number_rows
  json.sg_venue_id section.sg_venue_id
  json.sg_db_venue_id section.sg_db_venue_id
  json.x_offset section.x_offset
  json.y_offset section.y_offset

  json.sg_rows section.sg_rows.each do |row|
    json.id row.id
    json.name row.name
    json.number_seats row.number_seats
    json.sg_section_id row.sg_section_id
    json.sg_venue_id row.sg_venue_id
    json.sg_db_venue_id row.sg_db_venue_id
    json.x_offset row.x_offset
    json.y_offset row.y_offset
  
    json.sg_seats row.sg_seats.each do |seat|
      json.id seat.id
      json.seat_section seat.seat_section
      json.seat_row seat.seat_row
      json.seat_number seat.seat_number
      json.sg_venue_id seat.sg_venue_id
      json.sg_db_venue_id seat.sg_db_venue_id
      json.sg_row_id seat.sg_row_id
      json.sg_section_id seat.sg_section_id
      json.x_offset seat.x_offset
      json.y_offset seat.y_offset

      json.sg_seat_photos seat.sg_seat_photos.each do |sp|
        json.id sp.id
        json.caption sp.caption
        json.user_id sp.user_id
        json.image sp.image
        json.sg_seat_id sp.sg_seat_id
      end
    end
  end
end

json.sg_rows @sg_db_venue.sg_rows.each do |row|
  json.id row.id
  json.name row.name
  json.number_seats row.number_seats
  json.sg_section_id row.sg_section_id
  json.sg_venue_id row.sg_venue_id
  json.sg_db_venue_id row.sg_db_venue_id
  json.x_offset row.x_offset
  json.y_offset row.y_offset
end

json.sg_seats @sg_db_venue.sg_seats.each do |seat|
  json.id seat.id
  json.seat_section seat.seat_section
  json.seat_row seat.seat_row
  json.seat_number seat.seat_number
  json.sg_venue_id seat.sg_venue_id
  json.sg_db_venue_id seat.sg_db_venue_id
  json.sg_row_id seat.sg_row_id
  json.sg_section_id seat.sg_section_id
  json.x_offset seat.x_offset
  json.y_offset seat.y_offset
end