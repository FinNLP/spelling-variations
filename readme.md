# Spelling Variations

A library to give you spelling variations for a specific word with detection whether it's a UK variation or US variations. Also can be used to change word's UK spelling variation to the US one.

## Getting started

You can either download the minified version (from the `dist` directory) and use it in your browser, or you can install the library via NPM:

```
npm install --save spelling-variations
```

Now you can use the library as you wish:

```javascript

// for node environments:
const spellingVariations = require("spelling-variations");

var uk_version = new spellingVariations("theater").toUK;
console.log(uk_version);
// > "theatre"

var full = new spellingVariations("Anglify").analyze(); // or .analyse() for obvious reasons
console.log(full);

// will produce something like this:
{
	word: 'cenobitic', 	// original word without any modification just lowercased
	// scoring how common this variation is along other variations
	// 1: it's the most common
	// 0.87: less than the first one but can be accepted in modern writings
	// 0.75: challenged
	// 0.5: uncommon
	// 0.25: very uncommon, might be present only in old texts
	scoreUK: 0.75,
	scoreUS: 1,
	// whether or not the word has variations
	hasVariations: true,
	// index of the word in the database (mainly used for debugging and testing)
	Wordi: 1073,
	// the preferred variation for the UK
	UKPrefered: 'coenobitic',
	// the preferred variation for the US
	USPrefered: 'cenobitic',
	// if there's a common variation between the US & UK
	commonVariation: '',
	// all UK variations of the word ordered by commonness
	UKVariations: [ 'coenobitic', 'coenobitical', 'cenobitical' ],
	// all US variations of the word ordered by commonness
	USVariations: [ 'coenobitic', 'cenobitical', 'coenobitical' ],
	// all variations (not ordered by any means)
	variations: [ 'coenobitic', 'coenobitical', 'cenobitical' ],
}
```


## API

Method | Example | Returns | Description
--- | --- | --- | ---
*analyze* | `new spellingVariations("Anglify").analyze();` | `{Object}` | **@returns:** The object described above (in getting started)
*analyse* | `new spellingVariations("Anglify").analyse();` | `{Object}` | **@returns:** An alias of the same function above (made for obvious reasons)
*scoreUK* | `new spellingVariations("Anglify").scoreUK();` | `{Number}` | **@returns:** A score of how common this variation in the UK's texts (1-0)
*scoreUS* | `new spellingVariations("Anglify").scoreUS();` | `{Number}` | **@returns:** A score of how common this variation in the US's texts (1-0)
*hasVariations* | `new spellingVariations("Anglify").hasVariations();` | `{Boolean}` | **@returns:** Does this word have other variations?
*USVariations* | `new spellingVariations("Anglify").USVariations();` | `{Array}` | **@returns:** US variations of the word
*UKVariations* | `new spellingVariations("Anglify").UKVariations();` | `{Array}` | **@returns:** UK variations of the word
*variations* | `new spellingVariations("Anglify").variations();` | `{Array}` | **@returns:** All of the word's variations
*UKPrefered* | `new spellingVariations("Anglify").UKPrefered();` | `{String}` | **@returns:** UK's preferred variation
*USPrefered* | `new spellingVariations("Anglify").USPrefered();` | `{String}` | **@returns:** US's preferred variation
*commonVariation* | `new spellingVariations("Anglify").commonVariation();` | `{String}` | **@returns:** A variation that is common for the US and the UK
*toUK* | `new spellingVariations("Anglify").toUK();` | `{String}` | **@returns:** UK variant of the word
*toUS* | `new spellingVariations("Anglify").toUS();` | `{String}` | **@returns:** US variant of the word


## Contributing

* clone this repository to your machine
* `cd spelling-variations && npm install`
* install mocha globally (for running the tests): `mocha test/test`
* ..
* ..
* build `node build/build`
* test `node test/test`


--------------

License: **The MIT License**.