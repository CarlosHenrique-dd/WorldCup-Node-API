module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('game',{
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
      },
       team_a: DataTypes.STRING(32),
       goal_a: DataTypes.INTEGER,
       team_b: DataTypes.STRING(32),
       goal_b: DataTypes.INTEGER,
       match_day: DataTypes.DATEONLY,
      },{
        timestamps:false,
        freezeTableName:false
      })
      return Game
    }