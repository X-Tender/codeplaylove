import React from 'react';
import PropTypes from 'prop-types';

class GridItem extends React.PureComponent {
	static propTypes = {
		data: PropTypes.shape({
			source: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			url: PropTypes.string.isRequired,
			comments: PropTypes.number,
			likes: PropTypes.number,
		}).isRequired,
	};

	constructor(props) {
		super(props);
	}

	getHead() {
		const { source } = this.props.data;

		return <div className={`grid-item__header grid-item__header--${source}`} />;
	}

	getBody() {
		const { source, text, image } = this.props.data;

		if (source === 'instagram') {
			const instagramBackgroundImage = {
				backgroundImage: `url(${image.url})`,
			};

			const { comments, likes } = this.props.data;

			return (
				<div className="grid-item__wrapper" style={instagramBackgroundImage}>
					<img className="grid-item__image" src={image.url} />

					<div className="grid-item__instagram-text-wrapper">
						<p className="grid-item__instagram-text">{text}</p>
					</div>

					<div className="grid-item__footer">
						<div className="grid-item__footer-item">
							<span className="grid-item__footer-icon">
								<i className="fas fa-comment" />
							</span>
							{comments}
						</div>

						<div className="grid-item__footer-item">
							<span className="grid-item__footer-icon grid-item__footer-icon--red">
								<i className="fas fa-heart" />
							</span>
							{likes}
						</div>
					</div>
				</div>
			);
		}

		const twitterBackgroundImage = {
			backgroundImage: `url(${image})`,
		};

		let tweetImage;
		if (image) {
			tweetImage = (
				<div className="grid-item__wrapper" style={twitterBackgroundImage}>
					<img className="grid-item__image" src={image} />
				</div>
			);
		}

		return (
			<div style={this.contentWrapStyle}>
				{tweetImage}
				<p className="grid-item__tweet-text">{text}</p>
			</div>
		);
	}

	render() {
		const body = this.getBody();
		const head = this.getHead();

		const { url, source } = this.props.data;
		const classes = `grid-item grid-item--${source}`;
		return (
			<div className={classes}>
				<a className="grid-item__link" href={url} rel="noopener noreferrer" target="_blank">
					{head}
					{body}
				</a>
			</div>
		);
	}
}

export default GridItem;
