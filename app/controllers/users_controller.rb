class UsersController < ApplicationController

  def index
    users = User.all
    render component: "Users", props: {users: users}
  end

  def user_params
    params.require(:user).permit(:name, :age)
  end

  def new
    render component: "NewUser"
  end

 
  def create
    user = User.new(user_params)
    if user.save
      redirect_to users_path
    else
    end
  end


end
