

export default class VirtualDiff{
	
	diff(dom1, dom2){
		console.log("1", this.stripWhiteSpaces(dom1));
		console.log("2", this.stripWhiteSpaces(dom2));
	}

	stripWhiteSpaces(markup){
		return markup.replace(/\n|\t/ig, "");
	}
}