Accenter
========

You know the situation. You just fell in love with some amazing and detailed free font, but it does not support your regional characters.

Until now, only thing you could do is to find other _(usually worse)_ alternative to one that you found. Sometimes even the the fonts that claim to be Latin Extended do not contain characters like ľ.

__This plugin totally solves that__


### How does is work

You provide letters, it provides clasess.

	$('div').accenter({
		'á': {'a', mark: 'acute_accent' },
		'ä': { alt: 'a', mark: 'diaeresis' },
		'č': { alt: 'c', mark: 'caron' },
		...
	})

Each letter will be wrapped like this.

	<span class="_acute_accent">a</span>

Css :after styles will take care of the rest.

### This is highly experimental & Work in progress

Currently implemented and tested marks are

- acute accent
- diaeresis
- caron
- cirkumflex

_but is sooo easy to add your own_
