class Api::V1::SectionsController < ApplicationController

def index
  @sections = Sections.all
end

end
