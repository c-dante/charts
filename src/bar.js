import { select } from 'd3-selection';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';

import rect from './marks/rect';
import { buildSvgFrame, MAX_WIDTH, MAX_HEIGHT } from './util';

export default () => {

	// Takes a selection with bound bar data
	const barLayout = (elt, data) => {
		const sel = select(elt);

		// Grab the bounds of the data
		const [min, max] = extent(data, x => x.value); // @todo: handle negative bars

		// Build our screen scales
		const xScale = scaleLinear([0, data.length], [0, MAX_WIDTH]);
		const yScale = scaleLinear([0, max], [0, MAX_HEIGHT]);

		const barWidth = xScale(1) - xScale(0);

		// Bind the base frame (svg -> g)
		buildSvgFrame(sel, data, 'bar-chart')
			.selectAll('g.mark')
			.data(x => x.map((bar, i) => {
				// Map our bars to rectangles
				return {
					x: xScale(i),
					y: MAX_HEIGHT - yScale(bar.value),
					width: barWidth,
					height: yScale(bar.value),
					// And bind the bar
					bar,
				};
			}))
			.join(enter => enter.append('g').classed('mark', true))
				.call(rect) // pass our joined selection to marks
				.attr('data-value', x => x.bar.value);
	};

	return barLayout;
};