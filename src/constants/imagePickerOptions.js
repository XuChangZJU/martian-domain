/**
 * Created by Hey on 2016/5/17.
 */

const options = {
	title: null,
	takePhotoButtonTitle: '拍照',
	chooseFromLibraryButtonTitle: '从手机相册选择',
	cancelButtonTitle: '取消',
	quality: 0.5,
	maxWidth: 300,
	maxHeight: 300,
	storageOptions: {
		skipBackup: true,
	},
	allowsEditing: true,
};


const disableEditOption = {
	title: null,
	takePhotoButtonTitle: '拍照',
	chooseFromLibraryButtonTitle: '从手机相册选择',
	cancelButtonTitle: '取消',
	quality: 0.5,
	maxWidth: 300,
	maxHeight: 300,
	storageOptions: {
		skipBackup: true,
	},
	allowsEditing: false,
};

const hdOption = {
	title: null,
	takePhotoButtonTitle: '拍照',
	chooseFromLibraryButtonTitle: '从手机相册选择',
	cancelButtonTitle: '取消',
	quality: 0.95,
	maxWidth: 1600, // photos only
	maxHeight: 1600, // photos only
	allowsEditing: false, // Built in functionality to resize/reposition the image after selection
	storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
		skipBackup: true, // ios only - image will NOT be backed up to icloud
		path: 'images' // ios only - will save image at /Documents/images rather than the root
	}
};

const hdEditableOption = {
	title: null,
	takePhotoButtonTitle: '拍照',
	chooseFromLibraryButtonTitle: '从手机相册选择',
	cancelButtonTitle: '取消',
	quality: 0.95,
	maxWidth: 1600, // photos only
	maxHeight: 1600, // photos only
	allowsEditing: true, // Built in functionality to resize/reposition the image after selection
	storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
		skipBackup: true, // ios only - image will NOT be backed up to icloud
		path: 'images' // ios only - will save image at /Documents/images rather than the root
	}
};


module.exports =  {
	generalOption: options,
	disableEditOption,
	hdOption,
	hdEditableOption,
};
