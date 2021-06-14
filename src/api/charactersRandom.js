import axios from 'axios';

export const getCharactersRandom = async (query = '') => {
	const randomNumber = Math.round(Math.random() * 1473);
	const data = await axios(
		`https://gateway.marvel.com/v1/public/characters?${
			query ? `nameStartsWith=${query}&` : `offset=${randomNumber}&`
		}ts=1&apikey=f66e26e2950f9242ddbc574f24d30a1e&hash=b416bc153464e1f0a794f69ca2d6e3d3&limit=20`
	);
	return data.data.data.results;
};