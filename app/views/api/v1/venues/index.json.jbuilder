json.venues @venues.each do |v|
  json.id v.id
  json.street_address v.street_address
  json.city v.city
  json.state v.state
  json.zip_code v.zip_code
  json.phone v.phone
  json.website v.website
  json.image v.image
  json.latitude v.latitude
  json.latitude v.longitude
  json.twitter_handle v.twitter_handle
  json.stage_width v.stage_width
  json.stage_height v.stage_height
  json.stage_x_offset v.stage_x_offset
  json.stage_y_offset v.stage_y_offset
  json.seating_chart v.seating_chart
  json.user_id v.user_id

  json.sections v.sections.each do |section|
    json.id section.id
    json.name section.name
    json.number_rows section.number_rows
    json.venue_id section.venue_id
    json.x_offset section.x_offset
    json.y_offset section.y_offset

    json.rows section.rows.each do |row|
      json.id row.id
      json.name row.name
      json.number_seats row.number_seats
      json.section_id row.section_id
      json.venue_id row.venue_id
      json.x_offset row.x_offset
      json.y_offset row.y_offset
    
      json.seats row.seats.each do |seat|
        json.id seat.id
        json.seat_section seat.seat_section
        json.seat_row seat.seat_row
        json.seat_number seat.seat_number
        json.venue_id seat.venue_id
        json.row_id seat.row_id
        json.section_id seat.section_id
        json.x_offset seat.x_offset
        json.y_offset seat.y_offset

        json.seat_photos seat.seat_photos.each do |sp|
          json.id sp.id
          json.caption sp.caption
          json.user_id sp.user_id
          json.image sp.image
          json.seat_id sp.seat_id
        end
      end
    end
  end
end