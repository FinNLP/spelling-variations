// reference:
// 0: UK1		4: US1
// 1: UK2		5: US2
// 2: UK3		6: US3
// 3: UK4		7: US4		8:UKUS

interface ReplacementPattern {
	regex:RegExp;
	originalIndex:number[];
	replacementIndex:number[];
	replacementString:string;
}

const patterns:ReplacementPattern[] = [

	{
		regex:/ellous$/,
		originalIndex:[0,5],
		replacementIndex:[4],
		replacementString:"elous",
	},


	{
		regex:/elous$/,
		originalIndex:[4],
		replacementIndex:[0,5],
		replacementString:"ellous",
	},


	{
		regex:/s(ation|ational|ations|ationally)$/,
		originalIndex:[0,5],
		replacementIndex:[4,1],
		replacementString:"z$1",
	},

	{
		regex:/z(ation|ational|ations|ationally)$/,
		originalIndex:[4,1],
		replacementIndex:[0,5],
		replacementString:"s$1",
	},

	{
		regex:/ae/,
		originalIndex:[0,5],
		replacementIndex:[4],
		replacementString:"e",
	},

	{
		regex:/(i|y)s(e|ed|er|es|ing|ingly|able|ers)$/,
		originalIndex:[0,5],
		replacementIndex:[4,1],
		replacementString:"$1z$2",
	},

	{
		regex:/(i|y)z(e|ed|er|es|ing|ingly|able|ers)$/,
		originalIndex:[4,1],
		replacementIndex:[0,5],
		replacementString:"$1s$2",
	},

	{
		regex:/([^a])esth/,
		originalIndex:[4,1],
		replacementIndex:[0,5],
		replacementString:"$1aesth"
	},

	{
		regex:/oea/,
		originalIndex:[0,5],
		replacementIndex:[4,1],
		replacementString:"ea"
	},

	{
		regex:/^oe/,
		originalIndex:[0,5],
		replacementIndex:[4],
		replacementString:"e"
	},

	{
		regex:/fulfil(?!l)/,
		originalIndex:[0,5],
		replacementIndex:[4],
		replacementString:"fulfill"
	},

	{
		regex:/fulfill/,
		originalIndex:[4],
		replacementIndex:[0,5],
		replacementString:"fulfil"
	},

	{
		regex:/(m|c)oul/,
		originalIndex:[0,5],
		replacementIndex:[4],
		replacementString:"$1ol"
	},

	{
		regex:/elled$/,
		originalIndex:[0,5],
		replacementIndex:[4],
		replacementString:"eled"
	},

	{
		regex:/eled$/,
		originalIndex:[4],
		replacementIndex:[0,5],
		replacementString:"elled"
	},

	{
		regex:/([cpviglnbmd])(our)(ed$|ing$|s$|al$|ally$|ful$|$)/,
		originalIndex:[0],
		replacementIndex:[4],
		replacementString:"$1or$3"
	},

	{
		regex:/([cpviglnbm])(or)(ed$|ing$|s$|al$|ally$|ful$|$)/,
		originalIndex:[4],
		replacementIndex:[0],
		replacementString:"$1our$3"
	},

	{
		regex:/(v|m|b|l|d|i|n|c|g|p)our/,
		originalIndex:[0,5],
		replacementIndex:[4],
		replacementString:"$1or"
	},

];

export default function (word:string):string[]|null {
	var pattern = patterns.find(pattern=>pattern.regex.test(word));
	if(!pattern) return null;
	var result:string[] = [];
	var replacement = word.replace(pattern.regex,pattern.replacementString);
	pattern.originalIndex.forEach(index=>result[index] = word);
	pattern.replacementIndex.forEach(index=>result[index] = replacement);
	return result;
};