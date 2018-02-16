import React from 'react';

const Code = () => (
	<div className="logo-code">
		<ol className="logo-code__list">
			<li className="logo-code__line">&nbsp;</li>
			<li className="logo-code__line isHighlighted">
				<p className="logo-code__input">
					code<span className="logo-code__cursor" />
				</p>
			</li>
			<li className="logo-code__line">&nbsp;</li>
		</ol>
	</div>
);

const Cube = ({ size, style }) => (
	<div className="cube" style={style}>
		<figure
			className="front"
			style={{ width: size, height: size, transform: `rotateY(0deg) translateZ(${size / 2}px)` }}
		/>
		<figure
			className="right"
			style={{ width: size, height: size, transform: `rotateY(90deg) translateZ(${size / 2}px)` }}
		/>
		<figure
			className="left"
			style={{ width: size, height: size, transform: `rotateY(-90deg) translateZ(${size / 2}px)` }}
		/>
		<figure
			className="top"
			style={{ width: size, height: size, transform: `rotateX(90deg) translateZ(${size / 2}px)` }}
		/>
		<figure
			className="bottom"
			style={{ width: size, height: size, transform: `rotateX(-90deg) translateZ(${size / 2}px)` }}
		/>
	</div>
);

const Char = ({ children: grid, index: charIndex = 0, pixelSize = 25, pixelOffset = 30 }) => {
	const gridLines = grid.map((line, index) => (
		<div key={`line_${index}`} className="char__grid-line" style={{ top: index * pixelOffset }}>
			{line.map((tile, indexCol) => {
				const key = `line_${index}_col_${indexCol}`;
				if (tile === 0) return <div key={key} className="cube--empty" />;
				return <Cube key={key} size={pixelSize} style={{ left: indexCol * pixelOffset }} />;
			})}
		</div>
	));
	return (
		<li
			className="char"
			style={{
				left: (pixelSize * grid[0].length + pixelOffset * (grid[0].length - 1)) * charIndex,
			}}
		>
			{gridLines}
		</li>
	);
};

const P = () => <Char>{[[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 0], [1, 0, 0]]}</Char>;
const L = () => <Char index={1}>{[[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]]}</Char>;
const A = () => <Char index={2}>{[[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]]}</Char>;
const Y = () => <Char index={3}>{[[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 0], [0, 1, 0]]}</Char>;

const Play = () => (
	<div className="logo-play">
		<ul className="logo-play__list">
			<P />
			<L />
			<A />
			<Y />
		</ul>
	</div>
);
const Love = () => <div className="logo-love">love</div>;

const Logo = () => (
	<div className="logo">
		<Code />
		<Play />
		<Love />
	</div>
);

export default Logo;
