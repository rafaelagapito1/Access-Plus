
import axios from 'axios'
import Format from '../helpers/FormatDate'



let defaultW = null;
//Logica pega api do webservice do arquivo .env e tira o /api do final
let env;
try {
	env = require("../env.local.js").default;
} catch (err) {
	if (err instanceof Error) {
		env = require("../env.prod.js").default;
	}
}

let url = env.WS.URL;
defaultW = url.substr(0, url.length - 4); // <= seta o resultado no atributo default

//Logica pega api do webservice do arquivo .env e tira o /api do final


async function getIp() {
	try {
		const ip = await axios.get('https://api.ipify.org?format=json')
		if (ip && ip.data) return ip.data.ip
	} catch (err) {
		return 1;
	}
}


const Auth = {






	

	async verifyToken(dado) {
		return await axios.post(url +'/verify-token', {
			token: dado
		})
	},
	///////LOGIN
	async login(data) {
		const ip = await getIp();
		return await axios.post(url +'/login', {
			P_SYSTEM_ID: 1,
			EMAIL: data.EMAIL,
			PASSWORD: data.PASSWORD,
			P_IP: ip,
		});
	},

	async getAnnouncement() {
        //console.log(data)
        return await axios.get(defaultW + "/portal/announcement");
    },
	async getAllCategoriesNews() {
        //console.log(data)
        return await axios.get(defaultW + "/portal/news-category");
    },

	async getNews(data) {
		return await axios.post(defaultW +'/portal/news ', data)
	},



}

export default Auth