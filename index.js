const sequelize = require('./models/sequelize');
const app = require('./app');

const port = process.env.PORT || 3000;

// Sync models with the database
async function startServer() {
    try {
      await sequelize.sync(); 
      app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (error) {
      console.error('Unable to sync database or start server:', error);
     // Exit with a failure code
      process.exit(1); 
    }
  }
  
  //unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
  });
  
  startServer(); 