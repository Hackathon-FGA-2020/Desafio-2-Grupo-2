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
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('avatars', null, {}),
};
