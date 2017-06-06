class Api::V1::PeoplesController < ApplicationController
  def index
    @people = Person.all
    render 'index.json.jbuilder'
  end

  def create
    person = Person.new(
      name: params[:name],
      bio: params[:bio]
    )
    if person.save
      render :json => person
    else
      render :json => { :errors => person.errors.full_messages }, status: 422
    end
  end

  def show
    @person = Person.find_by(id: params[:id])
    render 'show.json.jbuilder'
  end

  def edit
    person = Person.find_by(id: params[:id])
    person.update(
      name: params[:name],
      bio: params[:bio]
    )
    if person.valid?
      render :json => person
    else
      render :json => { :errors => person.errors.full_messages }, status: 422
    end
  end

  def destroy
    person = Person.find_by(id: params[:id])
    render json: person if person.destroy
  end
end
