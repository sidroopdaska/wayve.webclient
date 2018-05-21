import * as React from 'react';
import { IWRColData } from '../components/whyWayve/whyWayve';
import { IWMColData } from '../components/whyMe/whyMe';
import { Urls } from './urls';
import { ITimelineBlock } from '../components/timeline/timeline';

/**
 * Class to hold all the Site relevant content.
 */
export class SiteContent {
	public static WhyWayve: Array<IWRColData> = [
		{
			imageAlt: 'Wheel Image',
			imageSrc: require('../assets/wheel-img.svg'),
			content:
				<p>
					Your <span className='lead font-weight-bold'>mission</span> to deliver truly intelligent autonomous vehicles 
					(i.e. Level 5 autonomy) and bring about a radical transformation in the automotive industry perfectly aligns with 
					my personal goals.
				</p>
		},
		{
			imageAlt: 'Leader Image',
			imageSrc: require('../assets/leader-img.svg'),
			content:
				<p>
					I believe in the <span className='lead font-weight-bold'>vision</span> and <span className='lead font-weight-bold'>leadership</span> capabilities
					 of <span className='lead font-weight-bold'>Alex Kendall</span>
			</p>
		},
		{
			imageAlt: 'World Image',
			imageSrc: require('../assets/world-img.svg'),
			content:
				<p>
					Well, <span className='lead font-weight-bold'>I'm selfish!</span> I have worked with different technologies 
					over the past two years ranging from Embedded Systems to Full stack Web Development. But working for Wayve.ai's 
					Computer Vision Research team is a different kind of beast. Creating truly autonomous vehicles that have the 
					potential to bring about a paradigm shift in how we commute is both exciting and scary. Mostly exciting though. 
					By working for Wayve.ai, I’ll directly improve my life along with the lives of millions of others. Everybody wins!
				</p>
		}
	];

	public static WhyMe: Array<IWMColData> = [
		{
			heading1: 'Passionate about Self-Driving Cars',
			heading2: null,
			imageAlt: 'Number 1',
			imageSrc: require('../assets/why-me-1.svg'),
			content:
				<p>
					A chance encounter with this new technology spurred into what has now become an <span className='font-weight-bold'>all-consuming interest</span> in Self-Driving cars.
					No one asked me to learn new skills and develop <a href={Urls.ResumeLink} target='_blank'>experiences</a> for this field.
					And certainly, no one asked me to change careers from Electronics development to Full Stack Web Development. What's keeping me going is the  <span className='font-weight-bold'>sheer desire</span> to
					develop simple, intuitive and scalable mobile first products.
		</p>
		},
		{
			heading1: 'Habit of embracing risk.',
			heading2: 'Saying "yes!" to building careers in cutting edge fields.',
			imageAlt: 'Number 2',
			imageSrc: require('../assets/why-me-2.svg'),
			content:
				<p>
					I’ve always been motivated by innovation and disrupting markets. I think there is a real <span className='font-weight-bold'>thrill</span> that comes with
					jumping into a new industry, helping it to grow, and making things better. Be it my leap from Electronics to Frontend development and 
					now to Self-Driving cars, I have a willingness to say <span className='font-weight-bold'>“yes!”</span> to new opportunities,
					and a commitment to lifelong learning.
				</p>
		},
		{
			heading1: 'Incessant knack to understand things.',
			heading2: null,
			imageAlt: 'Number 3',
			imageSrc: require('../assets/why-me-3.svg'),
			content:
				<p>I love to code (heck, even this website was developed with <a href={Urls.WhyWayveGithubRepo} target='_blank'>code</a>).
				But equally importantly, I have this innate desire to develop a strong understanding for how things works and why.
				You will see me spend a good chunk of my time reading technology books or research papers, prototyping and testing different ideas to deconstruct the internals of things.
			</p>
		},

		{
			heading1: 'Willingness to bring about a change.',
			heading2: 'Improve existing processes.',
			imageAlt: 'Number 4',
			imageSrc: require('../assets/why-me-4.svg'),
			content:
				<p>
					My interest in software stems from its ability to facilitate rapid Time to Market, thus
					creating business value. As a result, I'm always on the look out to develop or leverage
					new tools or processes that can promote this. A recent example of this is when I created a module for loading React components with dynamic imports.
					This enabled a 30% reduction in the initial load for the current project.
				</p>
		}
	];

	public static TimelineContent: Array<ITimelineBlock> = [
		{
			heading: 'Inception',
			imageAlt: null,
			imageSrc: require('../assets/timeline-duck-img.svg'),
			content:
				<div>
					<p>
					My interest in Self-Driving Cars sparked when one of my colleagues at Microsoft, Ireland showed me a Youtube 
					video of Ducky Town, an advanced autonomy project at MIT. I was so captivated by the outcome of the project 
					that I decided to recreate it a month later at our local Hackathon.
					</p>
				</div>,
			date: 'July, 2017'
		}
	];

	public static EmailId = 'hey@siddharthsharma.io';
	public static OnlineHandle = 'sidroopdaska';
}
