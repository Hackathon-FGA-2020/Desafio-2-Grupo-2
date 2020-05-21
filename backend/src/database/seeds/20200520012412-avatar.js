module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'avatars',
      [
        {
          name: 'matheuszinho.png',
          path: 'dfsfsdfsdfdsfsdf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Israelzinho.png',
          path: 'ddsadasdafdg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'joãozinho.png',
          path: 'gdfgdfgdfgdfghf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'vicentinho.png',
          path: 'gdfgd23423dfgdfghf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'richardinho.png',
          path: 'gdfgdfgdsfdsgghhfghf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'robsonzinho.png',
          path: 'gdfgdgfdgdfghf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'lucaszinho.png',
          path: 'gdf423423dfghf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'henriquinho.png',
          path: 'gdfgsdfdsgfhf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'italinho.png',
          path: 'gdjhgfrhffgdfghf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'vinicinho.png',
          path: 'gd324523gdfghf',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('avatars', null, {}),
};
