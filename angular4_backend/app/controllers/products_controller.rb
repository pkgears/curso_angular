class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy, :upload_image]

  # GET /products
  def index
    @products = Product.all
    @products.each do |product|
      product.image_url = product.image.url
    end
    render json: @products
  end

  # GET /products/1
  def show
    @product.image_url = @product.image.url
    render json: @product
  end

  # POST /products
  def create
    # byebug
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  def upload_image
    image = params[:image]
    if @product.update(:image => image)
      render json: { status: 200 }, status: 200
    else
      render json: { status: 500 }, status: 500
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :description, :price, :image)
      # params.require(:product).permit()
    end

    def image_params
      params.permit(:image)
    end

end
