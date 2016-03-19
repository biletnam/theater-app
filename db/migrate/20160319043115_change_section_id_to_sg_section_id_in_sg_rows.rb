class ChangeSectionIdToSgSectionIdInSgRows < ActiveRecord::Migration
  def change
    rename_column :sg_rows, :section_id, :sg_section_id
  end
end
