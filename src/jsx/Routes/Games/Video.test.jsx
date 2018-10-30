import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

describe('Video', () => {
	const youtubeId = 'fJ9rUzIMcZQ';
	const className = 'we-will-rock-you';

	const comp = shallow(<Video className={className} youtubeId={youtubeId} />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders props correctly', () => {
		expect(comp.find(`.${className}`).exists()).toBe(true);
	});
});
