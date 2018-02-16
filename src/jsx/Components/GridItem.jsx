import React from 'react';

class GridItem extends React.PureComponent {
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
					<img src={image.url} className="grid-item__image" />

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
					<img src={image} className="grid-item__image" />
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
				<a className="grid-item__link" target="_blank" rel="noopener noreferrer" href={url}>
					{head}
					{body}
				</a>
			</div>
		);
	}
}

export default GridItem;
