import barLayout from '../bar';

export default (elt) => {
	// Bind bar chart example to elt
	const data = (new Array(25)).fill(0).map(() => ({ value: Math.random() }));

	// Make a layout
	const layout = barLayout();

	// Draw it to an elemetn
	layout(elt, data);
};
