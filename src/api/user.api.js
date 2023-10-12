import axios from "axios"

export const userLogin = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post("/admin/login", frmData);
			resolve(res.data);
			if (res.data.status === 'success') {
				localStorage.setItem('accessAdminJWT', res.data.accessJWT);
			}
		} catch (error) {
			reject(error);
		}
	});
};

export const forgetPassword = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(
				'/admin/forgetPassword',
				frmData
			);
			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};


export const resetPassword = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(
				'/admin/resetPassword',
				frmData
			);
			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const fetchAdminUser = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessJWT = localStorage.getItem('accessAdminJWT');
			if (!accessJWT) {
				reject('Token not found!');
			}
			const res = await axios.get('/admin', {
				headers: {
					Authorization: accessJWT,
				},
			});
			resolve(res.data);
		} catch (error) {
			console.log(error);
			reject(error.message);
		}
	});
};

export const fetchAdminCreators = (frmdata) => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessJWT = localStorage.getItem('accessAdminJWT');
			if (!accessJWT) {
				reject('Token not found!');
			}
			const res = await axios.post('/creator', frmdata, {
				headers: {
					Authorization: accessJWT,
				},
			});
			resolve(res.data);
		} catch (error) {
			console.log(error);
			reject(error.message);
		}
	});
};


export const fetchFilteredAdminCreators = (frmdata) => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessJWT = localStorage.getItem('accessAdminJWT');
			if (!accessJWT) {
				reject('Token not found!');
			}
			const res = await axios.post('/creator/filterCreators', frmdata, {
				headers: {
					Authorization: accessJWT,
				},
			});
			resolve(res.data);
		} catch (error) {
			console.log(error);
			reject(error.message);
		}
	});
};