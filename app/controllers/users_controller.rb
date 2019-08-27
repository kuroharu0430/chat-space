class UsersController < ApplicationController
  
  def index
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%").reject{|user| user == current_user}
    respond_to do |format|
      format.html
      format.json
    end
  end
  
  def edit
  end

  
  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def user_permit
    params.require(:user).permit(:name, :email)
  end
end
