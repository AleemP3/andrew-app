class Api::JournalsController < ApplicationController

  # before_action :authenticate_user!
  before_action :set_journal, only: [:show, :update, :destroy]

  def index
    render json: Journal.all 
  end

  def show
    render json: @journal 
  end


  def create
    @journal = Journal.new(journal_params)
    if @journal.save 
      render json: @journal 
    else 
      render json: @journal.errors, status: 422
    end 
  end 

  def update 
    if @journal.update(journal_params)
      render json: @journal 
    else 
      render json: @journal.errors, status: 422
    end 
  end 

  def destroy 
    @journal.destroy 
  end 

  private 

  def set_journal 
    @journal = Journal.find(params[:id])
  end 

  def journal_params 
    params.require(:journal).permit(:title, :description, :body, :liked, :disliked) 
  end 

end
