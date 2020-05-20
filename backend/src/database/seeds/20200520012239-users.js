module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Matheus',
          email: 'matheuzinhodelas@gmail.com',
          password_hash: 'dwqewqewqe2',
          user_type: 'donator',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: null,
        },
        {
          name: 'Israel',
          email: 'israel@gmail.com',
          password_hash: 'eweq2e2qasd',
          user_type: 'admin',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: null,
        },
        {
          name: 'Joao',
          email: 'joaogatinho123@gmail.com',
          password_hash: 'sdfsdfds3',
          user_type: 'entity',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: null,
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
