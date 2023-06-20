const data =  require('../../database/fakeData');

const createId = async () => {
  let id;

  if (data.length > 0) {
      id = await data[data.length - 1].id + 1;

      return id;
 
  } else {
      id = 1;

      return id;
  }
}

module.exports = {
  createId
}