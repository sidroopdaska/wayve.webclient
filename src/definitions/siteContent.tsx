import * as React from 'react';
import { IWWColData } from '../components/whyWayve/whyWayve';
import { IWMColData } from '../components/whyMe/whyMe';
import { Urls } from './urls';
import { ITimelineBlock } from '../components/timeline/timeline';

/**
 * Class to hold all the Site relevant content.
 */
export class SiteContent {
	public static WhyWayve: Array<IWWColData> = [
		{
			imageAlt: 'Wheel Image',
			imageSrc: require('../assets/wheel-img.svg'),
			content:
				<p>
					Your <span className='lead font-weight-bold'>mission</span> to deliver truly intelligent autonomous vehicles
					(i.e. Level 5 autonomy) and bring about a radical transformation in the automotive industry perfectly aligns with
					my career goals.
				</p>
		},
		{
			imageAlt: 'Leader Image',
			imageSrc: require('../assets/leader-img.svg'),
			content:
				<p>
					I believe in the <span className='lead font-weight-bold'>vision</span> and <span className='lead font-weight-bold'>leadership</span> capabilities
					 of <span className='lead font-weight-bold'>Alex Kendall</span>, who through his extensive research at Cambridge has developed
					 state of the art techinques for Perception in Autonomous Systems. Thus, giving him a firm grasp of this domain. Moreover, I believe he is capable of building a team
					that can execute successfully on a global level, and I would like to be a part of that ensemble and contribute to its goal.
				</p>
		},
		{
			imageAlt: 'World Image',
			imageSrc: require('../assets/world-img.svg'),
			content:
				<p>
					Well, <span className='lead font-weight-bold'>I'm selfish!</span> I have worked with different technologies
					over the past two years ranging from Embedded Systems to Full stack Web Development. But working for Wayve.ai's
					Engineering team is a different kind of beast. Creating truly autonomous vehicles that have the
					potential to bring about a paradigm shift in how we commute is both exciting and scary. Mostly exciting though.
					By working for Wayve.ai, I’ll directly improve my life along with the lives of millions of others. Everybody wins!
				</p>
		}
	];

	public static WhyMe: Array<IWMColData> = [
		{
			heading1: 'Passionate about Self-Driving Cars.',
			heading2: null,
			imageAlt: 'Number 1',
			imageSrc: require('../assets/why-me-1.svg'),
			content:
				<p>
					A chance encounter with this new technology spurred into what has now become an <span className='font-weight-bold'>all-consuming interest</span> in autonomous vehicles.
					No one asked me to learn new skills and develop <a href={Urls.SDCNDGithubRepo} target='_blank'>experiences</a> for this field.
					And certainly, no one asked me to sign away most of my weekends and time after work for the 9-month long Self-Driving Car course at Udacity.
					What's keeping me going is the <span className='font-weight-bold'>sheer desire</span> to
					work on Self-Driving Cars!
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
				You will see me spend a good chunk of my time reading research papers, prototyping and testing different ideas
				to <a href={Urls.Deconstruct} target='_blank'>deconstruct the internals of things</a>.
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
					new tools or processes that can promote this. A recent example of this is when I introduced new
					frontend pipeline at work that improved the Page Load performance by 80% and developer time by 90%.
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
						video of <a href={Urls.DuckyTown} target='_blank'>Ducky Town</a>, an advanced autonomy project at MIT. I was so captivated by the outcome of the project
						that I decided to recreate it a month later at our local Hackathon.
					</p>
				</div>,
			date: 'July 2017',
			link: {
				name: 'Self-Driving RC Car',
				href: Urls.SDRCGithubRepo
			}
		},
		{
			heading: 'Taste of ML and Computer Vision',
			imageAlt: null,
			imageSrc: require('../assets/timeline-book-img.svg'),
			content:
				<div>
					<p>
						This chance encounter with a new set of techologies (while hacking away at
						my <a href={Urls.SDRCGithubRepo} target='_blank'>Self Driving RC Car project</a>)
						spurred into an <strong>all-consuming interest in autonomous vehicles</strong>. Despite the uncertainties that come
						with an emerging industry, I was deeply excited by the possibilities. Upon researching the industry,
						I could immediately see its transformational abilities. Hence, I began my journey to get involved with the
						challenges this new frontier presented — challenges that would require new skills and different experiences to
						be a success.
					</p>
					<p>
						To develop the right skill set, I started with the canonical course on <strong>ML by Andrew Ng</strong>. Shortly
						after it's completion, I enrolled into the <strong>Self-Driving Car Nanodegree</strong> at <strong>Udacity</strong>.
						As a first step in the program, I leveraged traditional computer vision techniques to
						develop a naive algorithm for <span className='font-weight-bold'>lane line detection</span>.
					</p>
				</div>,
			date: 'Sep 2017',
			link: {
				name: 'Learn more',
				href: Urls.NaiveLaneLinesDetection
			}
		},
		{
			heading: 'Getting "deep" into Deep Learning',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<p>
						I spent the next one month learning the in's and out's of Deep Neural Networks. This spanned topics such as: pre-processing,
						regularisation, optimisation techniques, learning curves, etc. to name a few. I even developed my own mini neural network library
						to demystify backpropagation and computational graphs.
					</p>
					<p>
						During this time, I picked up tools such as <strong>TensorFlow, NumPy, Pandas and Scikit-Learn </strong>and started using them on
						a day-to-day basis. Projects:
					</p>
					<ul>
						<li>
							<a href='https://github.com/sidroopdaska/SelfDrivingCar/tree/master/Miniflow' target='_blank'>Miniflow</a>
						</li>
						<li>
							<a href={Urls.Deconstruct} target='_blank'>Visualisation of Gradient Descent optimisation algorithms</a>
						</li>
					</ul>
				</div>,
			date: 'Nov 2017'
		},
		{
			heading: 'Convolutional Neural Networks',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<p>
						Armed with the knowledge of DNN and it's frameworks, I next tackled the internals and real world applications of
						Convolutional Neural Networks. In doing so, I built a model using CNN's
						to <span className='font-weight-bold'>classify traffic signs</span>.
					</p>
				</div>,
			date: 'Dec 2017',
			link: {
				name: 'Learn more',
				href: 'https://github.com/sidroopdaska/SelfDrivingCar/tree/master/TrafficSignClassifier'
			}
		},
		{
			heading: 'Keras, Transfer Learning & Behavioural Cloning',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<blockquote className='blockquote text-muted'>"Don't be a hero! Use whatever works best on ImageNet" @karpathy</blockquote>
					<p>Inspired by this quote from Andrej Karpathy, I set out to take pre-existing models and finetune
						them for related but different tasks. During this process, I also picked up Keras (due to its appeal of rapid
						protytping and testing). To validate my learnings, I created an end-to-end Deep Learning solution for self-driving
						cars in a simulated environment. This project was inspired
						by <a href='http://images.nvidia.com/content/tegra/automotive/images/2016/solutions/pdf/end-to-end-dl-using-px.pdf'
							target='_blank'>Nvidia's research paper</a>.
					</p>
				</div>,
			date: 'Dec 2017',
			link: {
				name: 'Learn more',
				href: 'https://github.com/sidroopdaska/SelfDrivingCar/tree/master/BehaviouralCloning'
			}
		},
		{
			heading: 'Computer Vision: Deep Dive',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<p>
						Having developed a skill set in Deep Learning and practiced it's application in Computer Vision, I decided to explore
						the other end of the spectrum by focusing on <strong>'traditional'</strong> Computer Vision techniques.
						This endeavour resulted in me learning topics such as - camera
						calibration, distortion correction, image transforms, edge detection, HOG feauture descriptors, Stereo Geometry, Depth estimation, etc.
					</p>
					<p>To translate these learning into real world applications, I implemented the following:</p>
					<ul>
						<li>
							<a href='https://github.com/sidroopdaska/SelfDrivingCar/tree/master/AdvancedLaneLinesDetection' target='_blank'>Advanced Lane Finding algorithm</a>
						</li>
						<li>
							<a href='https://github.com/sidroopdaska/SelfDrivingCar/tree/master/VehicleDetectionAndTracking' target='_blank'>Vehicle Detection &amp; Tracking pipeline</a>
						</li>
					</ul>
				</div>,
			date: 'Jan 2017'
		},
		{
			heading: 'Hello, C++!',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<p>
						Following the completion of Term 1 in the Nanodegree, I next decided to revisit C++ due to its hyper-performance nature
						and it's widespread use in the automotive industry.
						I spent the next 6 weeks building my knowledge in Modern C++ (C++11 &amp; C++14) and put this to test by implementing:
					</p>
					<ul className='same-as-p'>
						<li>a <a
								href='https://github.com/sidroopdaska/PathPlanning'
								target='_blank'>Path finding algorithm
							</a>
						</li>
					</ul>
				</div>,
			date: 'Feb 2017'
		},
		{
			heading: 'Researching Uncertainity in Deep Learning Classifiers',
			imageAlt: null,
			imageSrc: require('../assets/timeline-book-img.svg'),
			content:
				<div>
					<p>
						While presenting my earlier work on the Self-Driving RC Car to a group of University students, I realised
						the need to model uncertainty in Classifiers for Vision based tasks. I believed this would provide greater insight into whether
						the model was under-confident or falsely over-confident, thus allowing us to make more informed decisions. Researching
						this topic further opened a whole new world of <strong>Bayesian Deep Learning</strong> for me.
					</p>
					<p>
						It was at this time that I coincidentally came across a <a href='https://arxiv.org/pdf/1703.04977.pdf' target='_blank'>paper </a> 
						and <a href='https://alexgkendall.com/computer_vision/bayesian_deep_learning_for_safe_ai/' target='_blank'>blog </a> 
						by <strong>Alex Kendall</strong> on the very same topic.
						Excited by the results and the wealth of information made availble, I decided to embark on a journey to try and
						replicate the performance achieved by him for pixel-wise semantic segmentation.

						Some of the pre-requisites that I have been involved with over the past few weeks include:
					</p>
					<ul className='same-as-p'>
						<li>Semantic Segmentation and experimentation with <a href='https://github.com/alexgkendall/SegNet-Tutorial' target='_blank'>SegNet</a></li>
						<li>Object Detection and experimentation with YOLO</li>
						<li>Deep Learning Term 1: Fast.ai</li>
					</ul>
				</div>,
			date: 'Mar 2017'
		},
		{
			heading: 'Next steps...',
			imageAlt: null,
			imageSrc: require('../assets/timeline-search-img.svg'),
			content:
				<div>
					<p>
						As next steps, I aim to:
					</p>
					<ul className='same-as-p'>
						<li>Continue my exploration of Bayesian Deep Learning and Uncertainty for Computer Vision</li>
						<li>Complete the Deep Learning course on Fast.ai, and there after,</li>
						<li>Develop my knowledge and experience in Reinforcement Learning techniques for autonomous systems</li>
					</ul>
					<p>
						<strong>More importantly</strong>, I'm now looking
						to <strong>join</strong> <strong>Wayve.ai</strong> as it provides me the
						most opportunity for learning and growth by working alongside world-class automotive
						engineers. And, also because I believe the team can benefit from the experience I have built so far.
					</p>
				</div>,
			date: 'May 2017'
		}
	];

	public static EmailId = 'hey@siddharthsharma.io';
	public static OnlineHandle = 'sidroopdaska';
}
