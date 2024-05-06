export function addScriptsToHead() {
	const head = document.getElementsByTagName('head')[0];
	
	
	const script = document.createElement('script');
	script.innerHTML = '<script>const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};</script>';
	
	head.insertBefore(script, head.firstChild);
}