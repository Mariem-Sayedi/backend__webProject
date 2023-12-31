module.exports=(sequelize,Datatype)=>{
  const User=sequelize.define("User", {
    username:{
      type:Datatype.STRING,
      allowNull:false
    },
    email:{
      type:Datatype.STRING,
      allowNull:false
    },
    password:{
      type:Datatype.STRING,
      allowNull:false
    }
  })
  User.associate=models=>{
    User.hasMany(models.Task,{
      onDelete:"cascade"
    })
    User.hasOne(models.Profil,{
      onDelete:"cascade"
    })
  }
  return User
}