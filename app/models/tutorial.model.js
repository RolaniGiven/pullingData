module.exports = (sequelize, Sequelize) => {
    const scenariosB = sequelize.define("scenarios", {
      scene: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING
      },
      optionA: {
        type: Sequelize.STRING
      },
      optionB: {
        type: Sequelize.STRING
      },
      optionC: {
        type: Sequelize.STRING
      }
    });
  
    return scenariosB;
  };