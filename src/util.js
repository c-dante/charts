export const MAX_WIDTH = 610;
export const MAX_HEIGHT = 377;

export const buildSvgFrame = (sel, data, classNames = '') => sel
	// Select all -> data -> join
	.selectAll('svg')
	.data([[data]]) // Wrap data in 2 arrays -- one for the svg, one for the root group
	.join('svg')
		.classed(classNames, true)
		.attr('viewBox', '0 0 610 377') // viewbox is golden ratio -- 610 377. This is fixed SVG space to use.
		.attr('preserveAspectRatio', 'xMidYMid meet')
		.attr('width', '100%')
		.attr('height', '100%')
	// Select all -> data -> join
	.selectAll('g')
	.data(x => x)
	.join('g');