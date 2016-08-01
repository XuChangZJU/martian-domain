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


module.exports =  {
	generalOption: options,
	disableEditOption,
};
