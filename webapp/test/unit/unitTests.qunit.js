/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsopracicdpoc/sopra_cicd_poc/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
