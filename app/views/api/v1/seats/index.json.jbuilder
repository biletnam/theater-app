json.seats @seats.each do |seat|
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
  end

end