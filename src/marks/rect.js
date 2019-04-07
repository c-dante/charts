export default (sel) => sel.selectAll('rect')
	.data(x => [x]) // wrap in an array to join
	.join('rect')
	.attr('x', d => d.x)
	.attr('y', d => d.y)
	.attr('width', d => d.width)
	.attr('height', d => d.height);