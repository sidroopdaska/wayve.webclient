import * as React from 'react';
import * as $ from 'jquery';
import './timeline.scss';

export interface ITimelineProps {
	data: Array<ITimelineBlock>;
}

export interface ITimelineBlock {
	heading: string;
	imageSrc: any;
	imageAlt: string;
	content: JSX.Element;
	date: string;
}

export class Timeline extends React.Component<ITimelineProps, {}> {
	constructor(props: ITimelineProps) {
		super(props);
	}

	public componentDidMount() {
		let timelineBlock = $('.block');
		timelineBlock.each(function () {
			$(this).find('.img, .content').addClass('is-hidden');
		});

		$(window).scroll(function () {
			timelineBlock.each(function () {
				if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 &&
					$(this).find('.img').hasClass('is-hidden')) {
					$(this).find('.img, .content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
	}

	public renderTimelineBlocks = () => {
		return this.props.data.map((d, idx) => {
			return (
				<div className='block' key={idx}>
					<div className='img'>
						<img src={d.imageSrc} alt={d.imageAlt} />
					</div>

					<div className='content'>
						<h3>{d.heading}</h3>
						{d.content}
						<span className='date'>{d.date}</span>
					</div>
				</div>
			);
		});
	}

	public render() {
		if (!this.props.data || !this.props.data.length)
			return null;

		return (
			<div>
				<div className='timeline-title'>
					<h2>
						#what <span className='text-muted'>I have done so far</span>
					</h2>
				</div>
				<section className='timeline'>
					{this.renderTimelineBlocks()}
				</section>
			</div>

		);
	}
}
