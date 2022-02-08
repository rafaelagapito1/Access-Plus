
import axios from 'axios'
import Format from '../../src/helpers/FormatDate'



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

	async getCountry() {
		return await axios.get(url +'/country')
	},
	async getGenres() {
		return await axios.get(url +'/genres')
	},

    //ATUALIZA OS DADOS DO USUARIO 
    update(userId, data, token) {
		axios.defaults.headers.common = {
			'Authorization': 'Bearer ' + token
		};
        return axios
            .put(url + '/user/' + userId, {
				GENRE_ID: data.GENRE_ID,
                DT_BIRTHDAY: data.DT_BIRTHDAY,
                COUNTRY_ID: data.COUNTRY_ID,
                ZIP_CODE: data.ZIP_CODE,
                ADDRESS: data.ADDRESS,
                NUMBER: data.NUMBER,
                COMPLEMENT: data.COMPLEMENT,
                NEIGHBORHOOD: data.NEIGHBORHOOD,
                CITY: data.CITY,
                STATE: data.STATE,
                DDI: data.DDI,
                PHONE: data.PHONE
            })
    },
	 //ATUALIZA OS DADOS DO USUARIO  CPNPJ0
	 updateCNPJ(userId, data, token) {
		axios.defaults.headers.common = {
			'Authorization': 'Bearer ' + token
		};
        return axios
            .put(url + '/user/' + userId, {
                FANTASY_NAME: data.FANTASY_NAME,
                REPRESENTATIVE: data.REPRESENTATIVE,
                DT_BIRTHDAY: data.DT_BIRTHDAY,
                COUNTRY_ID: data.COUNTRY_ID,
                ZIP_CODE: data.ZIP_CODE,
                ADDRESS: data.ADDRESS,
                NUMBER: data.NUMBER,
                COMPLEMENT: data.COMPLEMENT,
                NEIGHBORHOOD: data.NEIGHBORHOOD,
                CITY: data.CITY,
                STATE: data.STATE,
                DDI: data.DDI,
                PHONE: data.PHONE
            })
    },
	//RETORNA TODOS OS DADOS DO USUARIO 
	async userInformation(userId, token) {
		axios.defaults.headers.common = {
			'Authorization': 'Bearer ' + token
		};
		return await axios
			.get(url + '/user/' + userId)
	},



	logout() {
		setTimeout(function () {
			const locale = localStorage.getItem('@APP:locale');
			localStorage.removeItem('Verified_Data_User');
			localStorage.removeItem('userID');
			localStorage.removeItem('token');
			localStorage.removeItem('dataUserAuth');
			localStorage.removeItem('@APP:dateAuth');
			localStorage.removeItem('INTERNAL_USER');
			localStorage.removeItem('SELECTED_ACCOUNT_ID');
			localStorage.removeItem('ACCOUNTS');
			if (locale) localStorage.setItem('@APP:locale', locale);
			window.location.href = "/login";
		}, 1000);

	},
	
	logoutUser() {
		setTimeout(function () {
			const locale = localStorage.getItem('@APP:locale');
			localStorage.removeItem('Verified_Data_User');
			localStorage.removeItem('userID');
			localStorage.removeItem('token');
			localStorage.removeItem('dataUserAuth');
			localStorage.removeItem('@APP:dateAuth');
			localStorage.removeItem('INTERNAL_USER');
			localStorage.removeItem('SELECTED_ACCOUNT_ID');
			localStorage.removeItem('ACCOUNTS');
			window.location.href = "/";
			if (locale) localStorage.setItem('@APP:locale', locale);
		}, 1000);

	},
	ClearUser() {
		setTimeout(function () {
			const locale = localStorage.getItem('@APP:locale');
			localStorage.removeItem('Verified_Data_User');
			localStorage.removeItem('userID');
			localStorage.removeItem('token');
			localStorage.removeItem('dataUserAuth');
			localStorage.removeItem('@APP:dateAuth');
			localStorage.removeItem('INTERNAL_USER');
			localStorage.removeItem('SELECTED_ACCOUNT_ID');
			localStorage.removeItem('ACCOUNTS');
			if (locale) localStorage.setItem('@APP:locale', locale);
		}, 100);
	

	},
	async verifylogin(dado) {
		return await axios.post(url +'/verify-token', {
			token: dado
		})
	},
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

	
	async validateChip(chip) {
		return await axios.get(url +'/verify-chip-number/' + chip)
	},

	async verifyEmailExisting(email) {
		return await axios.post(url +'/existing-email', {
			email: email
		})
	},

	async ResendEmail(email) {
		return await axios.get(url +'/registration-requests/resend/' + email)
	},

	
	async verifyDocumentExisting(Numdocument) {
		return await axios.post(url +'/existing-document', {
			document: Numdocument
		})
	},
	////////REGISTER 
	async register(data) {
		console.log(data)
		return await axios.post(defaultW+'/market/registration-request', data)
	},

	async recoveyPassword(data) {
		const ip = await getIp();
		return await axios.post(url +'/recovery-password ', {
			EMAIL: data.EMAIL,
		})
	},
	saveDataLocalStorage(data) {
		// const locale = localStorage.getItem('@APP:locale');
		localStorage.removeItem('Verified_Data_User');
		localStorage.removeItem('userID');
		localStorage.removeItem('token');
		localStorage.removeItem('dataUserAuth');
		localStorage.removeItem('@APP:dateAuth');
		localStorage.removeItem('INTERNAL_USER');
		localStorage.removeItem('SELECTED_ACCOUNT_ID');
		// localStorage.clear();
		// if (locale) localStorage.setItem('@APP:locale', locale);
		
		localStorage.setItem('TDI', data.User.TYPE_DOCUMENT_ID);
		localStorage.setItem('Verified_Data_User', data.Verified_Data_User);
		localStorage.setItem('userID', data.User.ID);
		localStorage.setItem('token', data.Token);
		if (data.User.EXTERNAL_CLIENT == 0) {
			localStorage.setItem('INTERNAL_USER', '{"ACCOUNTS:"' + JSON.stringify(data.UserAccounts[0]) +'"}');
		}

		localStorage.setItem('dataUserAuth', '{"token":"' + data.Token + '", "id":"' + data.User.ID + '", "email":"' + data.User.EMAIL + '", "name": "' + data.User.NAME + '", "dataUserCompleted": "' + data.Verified_Data_User + '"}');
		if (!localStorage.getItem('@APP:dateAuth')) {
			Format.saveDateLocalStorage()
		}
		if (data.User.DT_BIRTHDAY) {
            localStorage.setItem('DT_BIRTHDAY', data.User.DT_BIRTHDAY);
        } else {
            localStorage.setItem('DT_BIRTHDAY', null);
           
        }


	},



}

export default Auth