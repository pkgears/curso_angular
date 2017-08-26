class Product < ApplicationRecord
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  attr_accessor :image_url #both

  def as_json(options={})
      super.as_json(options).merge({image_url: self.image_url})
  end

end
