module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Matheus',
          email: 'matheus@gmail.com',
          password_hash: 'dwqewqewqe2',
          user_type: 'admin',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 5,
        },
        {
          name: 'Israel',
          email: 'israel@gmail.com',
          password_hash: 'eweq2e2qasd',
          user_type: 'admin',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 6,
        },
        {
          name: 'João',
          email: 'joao@gmail.com',
          password_hash: 'sdfsdfds3',
          user_type: 'entity',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 7,
        },
        {
          name: 'Vicente',
          email: 'vicente@gmail.com',
          password_hash: 'dwqew334e2',
          user_type: 'donator',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 8,
        },
        {
          name: 'Richard',
          email: 'Richard@gmail.com',
          password_hash: 'dwqerewrwqewqe2',
          user_type: 'entity',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 9,
        },
        {
          name: 'Robson',
          email: 'robson@gmail.com',
          password_hash: 'd32423dewqewqe2',
          user_type: 'donator',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 10,
        },
        {
          name: 'Lucas',
          email: 'lucas@gmail.com',
          password_hash: 'd42342ewrwqe2',
          user_type: 'donator',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 11,
        },
        {
          name: 'Henrique',
          email: 'henrique@gmail.com',
          password_hash: 'dwq2345wedrfwqewqe2',
          user_type: 'entity',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 12,
        },
        {
          name: 'Italo',
          email: 'italo@gmail.com',
          password_hash: 'd324sdwfwqewqe2',
          user_type: 'donator',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 13,
        },
        {
          name: 'Vinícius',
          email: 'vinicius@gmail.com',
          password_hash: 'ddsadasdwqewqe2',
          user_type: 'donator',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 14,
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
