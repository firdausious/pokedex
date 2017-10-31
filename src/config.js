/**
 * API Config
 */
var hostname = process.env.NODE_ENV === 'production' ?
'/api/'
:
'http://0.0.0.0:5000/api/';

export default {
  // The URL we're connecting to
  hostname,

  // Map shortnames to the actual endpoints, so that we can
  // use them like so: AppAPI.ENDPOINT_NAME.METHOD()
  //  NOTE: They should start with a /
  //    eg.
  //    - AppAPI.recipes.get()
  //    - AppAPI.users.post()
  //    - AppAPI.favourites.patch()
  //    - AppAPI.blog.delete()
  endpoints: new Map([
    ['pokeList', '/pokemon/'],
  ]),
};
