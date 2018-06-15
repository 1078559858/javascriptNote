var gUtil = require("./GlobalUtils");
var gPatchFiles = {};

setInterval(function() {
	checkFiles();
}, 5000);

var checkFiles = function () {
	for (var filepath in gPatchFiles) {
		var fileMd5 = gPatchFiles[filepath];
		checkFile(filepath,fileMd5);
	}
};

var checkFile = function (filepath,fildMd5) {
	var fullpath = require.resolve(filepath);
	gUtil.GetFileMd5(fullpath,function (md5) {
		if (fildMd5 == md5) {
			return;
		}

		gUtil.MessageLog("热更新重载模块：", filepath, "md5:",md5);

		cleanCache(fullpath);
		var routes = require(filepath);
		gPatchFiles[filepath] = md5;
	});
};

function cleanCache(modulePath) {
	var module = require.cache[modulePath];
	if (!module) {
		return;
	}

	if (module.parent) {
		module.parent.children.splice(module.parent.children.indexOf(module), 1);
	}

	require.cache[modulePath] = null;
}

var WatchFile = function (filepath) {
	if (gPatchFiles.hasOwnProperty(filepath)) {
		return;
	}

	var fullpath = require.resolve(filepath);
	gUtil.GetFileMd5(fullpath,function (md5) {
		gPatchFiles[filepath] = md5;
		gUtil.MessageLog("启动热更新监视：",filepath,"md5:",md5);
	});
};

exports.WatchFile = WatchFile;
