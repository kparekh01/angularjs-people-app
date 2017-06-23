class Api::V1::PeoplesController < ApplicationController

  def index
    @people = Person.all.sort_by{|person| person.id}
    render 'index.json.jbuilder'
  end

  def create
    person = Person.new(
      name: params[:name],
      bio: params[:bio]
    )
    if person.save
      render :json => {
        :person => person,
        :success => "#{person.name} was successfully added to the list!"
      }
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
      render :json => {
        :person => person,
        :success => "#{person.name} was successfully updated!"
      }
    else
      render :json => { :errors => person.errors.full_messages }, status: 422
    end
  end

  def destroy
    person = Person.find_by(id: params[:id])
    json_message = "#{person.name} was successfully deleted!"
    render :json => { :deleteMessage => json_message } if person.destroy
  end
end
