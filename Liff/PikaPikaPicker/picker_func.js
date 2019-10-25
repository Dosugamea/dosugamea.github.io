const pickr = Pickr.create({
    el: '.pickr',
    theme: 'nano',
	default: '#000000',
	comparison: false,
    swatches: [
        'rgb(244, 67, 54)',
        'rgb(233, 30, 99)',
        'rgb(156, 39, 176)',
        'rgb(103, 58, 183)',
        'rgb(63, 81, 181)',
        'rgb(33, 150, 243)',
        'rgb(3, 169, 244)',
        'rgb(0, 188, 212)',
        'rgb(0, 150, 136)',
        'rgb(76, 175, 80)',
        'rgb(139, 195, 74)',
        'rgb(205, 220, 57)',
        'rgb(255, 235, 59)',
        'rgb(255, 193, 7)'
    ],
    components: {
        preview: true,
        hue: true,
        interaction: {
            input: true,
            cancel: true
        }
    }
});
const pickr2 = Pickr.create({
    el: '.pickr2',
    theme: 'nano',
	lockOpacity: true,
	default: '#f8f9fa',
	comparison: false,
    swatches: [
        'rgb(244, 67, 54)',
        'rgb(233, 30, 99)',
        'rgb(156, 39, 176)',
        'rgb(103, 58, 183)',
        'rgb(63, 81, 181)',
        'rgb(33, 150, 243)',
        'rgb(3, 169, 244)',
        'rgb(0, 188, 212)',
        'rgb(0, 150, 136)',
        'rgb(76, 175, 80)',
        'rgb(139, 195, 74)',
        'rgb(205, 220, 57)',
        'rgb(255, 235, 59)',
        'rgb(255, 193, 7)'
    ],
    components: {
        preview: true,
        hue: true,
        interaction: {
            input: true,
            cancel: true
        }
    }
});
const pickr3 = Pickr.create({
    el: '.pickr3',
    theme: 'nano',
	lockOpacity: true,
	default: '#f8f9fa',
	comparison: false,
    swatches: [
        'rgb(244, 67, 54)',
        'rgb(233, 30, 99)',
        'rgb(156, 39, 176)',
        'rgb(103, 58, 183)',
        'rgb(63, 81, 181)',
        'rgb(33, 150, 243)',
        'rgb(3, 169, 244)',
        'rgb(0, 188, 212)',
        'rgb(0, 150, 136)',
        'rgb(76, 175, 80)',
        'rgb(139, 195, 74)',
        'rgb(205, 220, 57)',
        'rgb(255, 235, 59)',
        'rgb(255, 193, 7)'
    ],
    components: {
        preview: true,
        hue: true,
        interaction: {
            input: true,
            cancel: true
        }
    }
});
const pickr4 = Pickr.create({
    el: '.pickr4',
    theme: 'nano',
	lockOpacity: true,
	default: '#17c950',
	comparison: false,
    swatches: [
        'rgb(244, 67, 54)',
        'rgb(233, 30, 99)',
        'rgb(156, 39, 176)',
        'rgb(103, 58, 183)',
        'rgb(63, 81, 181)',
        'rgb(33, 150, 243)',
        'rgb(3, 169, 244)',
        'rgb(0, 188, 212)',
        'rgb(0, 150, 136)',
        'rgb(76, 175, 80)',
        'rgb(139, 195, 74)',
        'rgb(205, 220, 57)',
        'rgb(255, 235, 59)',
        'rgb(255, 193, 7)'
    ],
    components: {
        preview: true,
        hue: true,
        interaction: {
            input: true,
            cancel: true
        }
    }
});

function toHtmlColor(rgba){
	var r = parseInt(rgba[0]).toString(16);
	var g = parseInt(rgba[1]).toString(16);
	var b = parseInt(rgba[2]).toString(16);
	return "#"+r+g+b;
}