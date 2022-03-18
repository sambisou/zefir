
import data from './data.json';
const homes = data as Home[];

/**
 * Get a random home
 * 
 * THIS PREDEFINED FUNCTION IS PART OF THE EXERCISE, DO NOT MODIFY IT
 */
const getRandomHome = (homes: Home[]) => homes[Math.floor(Math.random() * homes.length)];

/**
 * Get random homes for the landing page after some delay.
 * 
 * We shuffle a bit of the data on purpose
 *
 * THIS PREDEFINED FUNCTION IS PART OF THE EXERCISE, DO NOT MODIFY IT
 */
export const getRandomHomes = async (): Promise<Home[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(
      homes
        .sort(() => 0.5 - Math.random())
        .map((home) => ({
          ...home,
          owner: getRandomHome(homes).owner,
          price: getRandomHome(homes).price,
          rooms: getRandomHome(homes).rooms,
          surface: getRandomHome(homes).surface,
        }))
    ), 2000);
  })
