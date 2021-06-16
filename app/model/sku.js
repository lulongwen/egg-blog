'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  // app.model.define = sequelize.define
  const Sku = app.model.define('city', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    code: INTEGER,
    province_code: INTEGER,
  });
  
  // Sku.associate = (models) => {}
  // Sku.associate = () => {
  //   app.model.Orders.belongsTo(app.model.House, {
  //     foreignKey: 'houseId',
  //     as: 'house',
  //   });
  // };
  return Sku;
};
