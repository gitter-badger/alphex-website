// Create an instance of Meny
var meny = Meny.create({
	// The element that will be animated in from off screen
	menuElement: document.querySelector( '.meny' ),

	// The contents that gets pushed aside while Meny is active
	contentsElement: document.querySelector( '.contents' ),

	// [optional] The alignment of the menu (top/right/bottom/left)
	position: Meny.getQuery().p || 'left',

	// [optional] The height of the menu (when using top/bottom position)
	height: 200,

	// [optional] The width of the menu (when using left/right position)
	width: 220,

	// [optional] Distance from mouse (in pixels) when menu should open
	threshold: 40
});

// API Methods:
// meny.open();
// meny.close();
// meny.isOpen();

// Events:
// meny.addEventListener( 'open', function(){ console.log( 'open' ); } );
// meny.addEventListener( 'close', function(){ console.log( 'close' ); } );

// Embed an iframe if a URL is passed in
if( Meny.getQuery().u && Meny.getQuery().u.match( /^http/gi ) ) {
	var contents = document.querySelector( '.contents' );
	contents.style.padding = '0px';
	contents.innerHTML = '<div class="cover"></div><iframe src="'+ Meny.getQuery().u +'" style="width: 100%; height: 100%; border: 0; position: absolute;"></iframe>';
}


// email obfuscate 
document.write('<'+'a'+' '+'h'+'r'+'e'+'f'+'='+"'"+'&'+'#'+'1'+'0'+'9'+';'+'a'+'i'+'l'+'t'+'o'+'&'+'#'+'5'+'8'+';'+'d'+'u'+'&'+'#'+'3'+'7'+';'+'7'+'2'+'&'+'#'+'9'+'7'+';'+'&'+'#'+'1'+'1'+'0'+';'+'&'+'#'+'6'+'4'+';'+'%'+'6'+'&'+'#'+'4'+'9'+';'+'%'+'&'+'#'+'5'+'4'+';'+'C'+'%'+'7'+'&'+'#'+'4'+'8'+';'+'h'+'&'+'#'+'1'+'0'+'1'+';'+'x'+'&'+'#'+'4'+'6'+';'+'c'+'&'+'#'+'3'+'7'+';'+'6'+'F'+'&'+'#'+'1'+'0'+'9'+';'+"'"+'>'+'d'+'&'+'#'+'1'+'1'+'7'+';'+'r'+'a'+'n'+'&'+'#'+'6'+'4'+';'+'a'+'l'+'p'+'&'+'#'+'1'+'0'+'4'+';'+'&'+'#'+'1'+'0'+'1'+';'+'x'+'&'+'#'+'4'+'6'+';'+'c'+'o'+'&'+'#'+'1'+'0'+'9'+';'+'<'+'/'+'a'+'>');