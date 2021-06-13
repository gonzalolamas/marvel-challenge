import md5 from 'md5';

export const ts = 1;
export const publicKey = 'f66e26e2950f9242ddbc574f24d30a1e';
export const privateKey = '1d2658fa91962f12527bad6e88af9cc295fb5b71';
export let hash = md5(ts + privateKey + publicKey )
export let urlAPI = `https://gateway.marvel.com:443/v1/public/characters?limit=8&ts=${ts}&apikey=${publicKey}&hash=${hash}`;