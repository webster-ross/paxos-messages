exports.up = async db => {
  await db.createTable('messages', {
    columns: {
      id: {type: 'int', primaryKey: true, autoIncrement: true},
      hash: {type: 'string', notNull: true, unique: true},
      message: {type: 'string', notNull: true, unique: true}
    },
    ifNotExists: true
  })
}

exports.down = async db => {
  await db.dropTable('messages')
}

exports._meta = {'version': 1}
