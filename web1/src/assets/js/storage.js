import CrossStorage from 'cross-storage'
import { Message } from 'element-ui'

var storage = new CrossStorage.CrossStorageClient('http://localhost:7000/crossstorage/example/hub.html');
console.log(storage)
/**添加Storage**/
export const addStorage = function(name, value) {
	storage.onConnect().then(function() {
		return storage.set(name, value);
	}).catch(function(err) {
		console.log(err)
		Message.error('远程服务失败');
	}).then(function() {
		storage.close();
	});
};

/**获取Storage**/
export const getStorage = function(name,callback) {
	storage.onConnect()
		.then(function() {
			return storage.get(name);
		}).then(function(res) {
			callback(res);
		})['catch'](function(err) {
			Message.error('远程服务失败');
		});
};

/**删除Storage**/
export const delStorage = function(name) {
	storage.onConnect().then(function() {
		return storage.del(name);
	});
};

/**获取Storagekeys**/
export const getStorageKeys = function(callback) {
	storage.onConnect().then(function() {
		return storage.getKeys();
	}).then(function(keys) {
		callback(keys)
	});
};

/**清除Storage**/
export const clearStorage = function() {
	storage.onConnect().then(function() {
		return storage.clear();
	});
};