module.exports=(sequelize,Datatype)=>{
    const Profil=sequelize.define("Profil", {
      firstname:{
        type:Datatype.STRING,
        allowNull:false
      },
      last:{
        type:Datatype.STRING,
        allowNull:false
      }
    })
    Profil.associate=models=>{
      Profil.belongsTo(models.User,{
        onDelete:"cascade"
      })
      
    }
    return Profil
  }