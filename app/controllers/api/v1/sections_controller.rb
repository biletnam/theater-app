class Api::V1::SectionsController < ApplicationController

def index
  @sections = Section.all
end

end
