const inquirer = require('inquirer');
const constants = require('./constants')

console.log(constants.categories);
const parsedCategoryNames = constants.categories.map(cat=>cat.id);


module.exports = {
  askQuery: () => {
    const questions = [
      {
        name: 'category',
        type: 'input',
        message: 'Enter the resource you want to query:',
        validate: function( value ) {
          if (value.length && parsedCategoryNames.includes(value)) {
            return true;
          } else {
            return `Please enter a valid category from this list: ${parsedCategoryNames.join(', ')}            
            `;
          }
        }
      },      
      {
        name: 'id',
        type: 'input',
        message: 'Enter a specific ID to query (leave blank for all):',        
      },      
    ];
    return inquirer.prompt(questions);
  },  
};