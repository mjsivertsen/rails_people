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

  def show
    user = User.find(params[:id])
    render component: "User", props: {user: user}
  end

  def edit
    user = User.find(params[:id])
    render component: "EditUser", props: {user: user}
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      redirect_to users_path
    else
    end
  end

  def destroy
    user = User.find(params[:id]).delete
    redirect_to users_path
  end
  

end
