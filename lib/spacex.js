const CLI = require("clui");
const chalk = require("chalk");
const Spinner = CLI.Spinner;
const inquirer = require("./cli");
const api = require("./api");

module.exports = {
  queryResources: async () => {
    const queryParams = await inquirer.askQuery();
    const status = new Spinner("Retrieving your data, please wait...");

    status.start();
    try {
      let apiResponse = {};
      const { id, category } = queryParams;
      if (id === "" || id === "all") {
        apiResponse = await api.queryResourceAll(category);
      } else {
        apiResponse = await api.queryResourceOne(category, id);
      }
      return apiResponse.data;
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 404:
            console.log(chalk.red("Error: Requested resource not found"));
            break;
          default:
            console.log(chalk.red(err));
        }
      } else {
        console.log(chalk.red(err));
      }
      return {};
    } finally {
      status.stop();
    }
  }
};
