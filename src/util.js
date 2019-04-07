export const buildSvgFrame = (sel, data, classNames = '') => sel
	// Select all -> data -> join
	.selectAll('svg')
	.data([[data]]) // Wrap data in 2 arrays -- one for the svg, one for the root group
	.join('svg')
		.classed(classNames, true)
		.attr('preserveAspectRatio', 'xMidYMid meet')
		.attr('width', '100%')
		.attr('height', '100%')
	// Select all -> data -> join
	.selectAll('g')
	.data(x => x)
	.join('g');