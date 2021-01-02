// copyright 2021 Theo Armour. MIT license.

function init () {

	const source = "https://github.com/theo-armour/2021/";

	const version = document.head.querySelector( "[ name=date ]" ).content;

	const description = document.head.querySelector( "[ name=description ]" ).content;

	//GOR.path = GRV.path = \

	MNU.path = "../../../";

	MNU.init();

	aGithub.href = source;

	spnVersion.innerHTML = version;

	divDescription.innerHTML = description;

	MTL.init();

	THR.init();

	THR.animate();

	THR.addLights();

	THR.addGround();

	//THR.group = THR.getGroupNew();

	//THRU.addMeshes(100);

	//THR.zoomObjectBoundingSphere();

	//HRT.init();

	// if running on server, keeps address bar pointed to latest dev

	if ( !location.hash && location.protocol === "https:" ) {

		window.history.pushState( "", "", "../" );

	} else {

		THR.controls.autoRotate = false;

	}

};
