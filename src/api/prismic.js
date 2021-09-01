import Prismic from '@prismicio/client';
const apiEndpoint = 'https://ekstraklasa.prismic.io/api/v2'
const accessToken = '' // This is where you would add your access token for a Private repository


const fetchData = async (type) => {
	const client = Prismic.client(apiEndpoint, { accessToken });
	const response = await client.query(Prismic.Predicates.at('document.type', type));

	if(response) {
		return response;
	}
}

export default fetchData;


