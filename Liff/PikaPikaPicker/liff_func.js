window.onload = function() {
	liff.init({
		liffId: "adsdsads"
	}).catch((err) => {
		alert(err);
	});
};

function sendToTalk(){
	var mainTextColor = toHtmlColor(pickr.getColor().toRGBA());
	var mainBgColor = toHtmlColor(pickr2.getColor().toRGBA());
	var btnTextColor = toHtmlColor(pickr3.getColor().toRGBA());
	var btnBgColor = toHtmlColor(pickr4.getColor().toRGBA());
	console.log(mainTextColor);
	console.log(mainBgColor);
	console.log(btnTextColor);
	console.log(btnBgColor);
	liff.sendMessages([
		{
			'type': 'text',
			'text': "テーマ text " + mainTextColor
		},
		{
			'type': 'text',
			'text': "テーマ box " + mainBgColor
		},
		{
			'type': 'text',
			'text': "テーマ buttontext " + btnTextColor
		},
		{
			'type': 'text',
			'text': "テーマ button " + btnBgColor
		}
	]).then(function() {
		liff.closeWindow();
	}).catch(function(error) {
		window.alert('Error sending message: ' + error);
	});
}