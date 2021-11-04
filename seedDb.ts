const seeder = require('mongoose-seed');
const mongoUri = require('./config/keys.json').mongoUri;

seeder.connect(mongoUri, function () {
  seeder.loadModels(['./models/Todo.js']);

  // Clear any existing data in the collection
  seeder.clearModels(['todo'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function (err, done) {
      if (err) {
        console.log('Seeding error:', err);
      } else if (done) {
        console.log('DB Successfully seeded');
      }

      seeder.disconnect();
    });
  });
});

const data = [
  {
    model: 'todo',
    documents: [
      {
        _id: '6110dc1d7d6eaf1287f1f17e',
        completed: false,
        title: 'This is a test Todo created with Seeder #1',
        created_at: '1628494877583',
        steps: [
          {
            _id: '6110dc387d6eaf1287f1f182',
            completed: true,
            title: 'This is the first step',
            created_at: '1628494904764',
          },
          {
            _id: '6110dc707d6eaf1287f1f186',
            completed: false,
            title: 'This is the second step',
            created_at: '1628494960971',
          },
        ],
      },
      {
        _id: '6110dc197d6eaf1287f1f17a',
        completed: false,
        title: 'This is a test Todo created with Seeder #2',
        created_at: '1628494873713',
        steps: [],
      },
      {
        _id: '6110dc1c7d6eaf1287f1f17c',
        completed: false,
        title: 'This is a test Todo created with Seeder #3',
        created_at: '1628494876054',
        steps: [],
      },
    ],
  },
];
