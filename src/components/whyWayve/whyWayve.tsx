import * as React from 'react';
import { Row, Col } from 'reactstrap';
import './whyWayve.scss';

export interface IWhyWayveProps {
	data: Array<IWRColData>;
}

export interface IWRColData {
	imageSrc: any;
	imageAlt: string;
	content: JSX.Element;
}

export class WhyWayve extends React.Component<IWhyWayveProps, {}> {
	constructor(props: IWhyWayveProps) {
		super(props);
	}

	public renderCols = () => {
		return this.props.data.map((d, idx) => {
			return (
				<Col sm='12' lg='4' key={idx}>
					<img src={d.imageSrc} alt={d.imageAlt}/>
					{d.content}
				</Col>
			);
		});
	}

	public render() {
		if (!this.props.data || !this.props.data.length)
			return null;

		return (
			<div className='why-Wayve'>
				<div>
					<h2>
						#why <span className='text-muted'>Wayve</span>
					</h2>
				</div>
				<Row>
					{this.renderCols()}
				</Row>
			</div>
		);
	}
}
