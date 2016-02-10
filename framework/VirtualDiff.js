import xml2js from 'xml2js';
import deepdiff from 'deep-diff';

export default class VirtualDiff{

	constructor(){
		this.xmlparser = xml2js.parseString;
		this.diff = deepdiff.diff;
	}
	
	getDiff(dom1, dom2){
		var self = this;
		return Promise.all([this.transformDomToJson(dom1), this.transformDomToJson(dom2)]).then(function(response){
			// console.log(response);
			const changes = self.diff(response[0], response[1]);
			return {
				changes: changes,
				type: self.getDiffType(changes)
			};
		});
	}

	getDiffType(changes){
		switch(changes[0].kind){
			case 'A': // indicates a change occurred within an array
				console.log("Array change", changes[0]);
				break;
			case 'E': // indicates a property/element was edited
				console.log("Element edit", changes[0]);
				if(!changes[0].path){
					console.log("Complete rerender!");
				}

				// ta reda på hur jag ska veta vad som ska uppdateras

				break;
			case 'N': // indicates a newly added property/element
				console.log("Element added", changes[0]);
				break;
			case 'D': // indicates a property/element was deleted
				console.log("Element deleted", changes[0]);
				break;
		}
	}

	transformDomToJson(xmlDom){
		var self = this;
		return new Promise(function(resolve, reject){
			self.xmlparser(self.stripWhiteSpaces(xmlDom), function(err, response){
				if(err){ reject(err); }else{
					resolve(response);
				}
			});
		});
	}

	stripWhiteSpaces(markup){
		return markup.replace(/\n|\t/ig, "");
	}
}