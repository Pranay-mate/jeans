import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../css/slider-animations.css';
import { Segment } from 'semantic-ui-react';

const content = [
	{
		title: 'Vulputate Mollis Ultricies Fermentum Parturient',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const Reviews = () => (
	<div className='reviews-section'>
		<div className='review-header'>
			OUR HAPPY CUSTOMERS
		</div>
		<Slider className="slider-wrapper review-slider">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content-review"
					style={{ background: `url('${item.image}') no-repeat center center` }}
					previousButton={<i class="bordered users icon"></i>}
				>
					<div className="inner">
					<div className='col-sm-12'>
						<div>
							<img src={item.userProfile} alt={item.user} />
						</div>
						<div>
						<span>
							<strong style={{color: 'white'}}>{item.user}</strong>
						</span>
						</div>
					</div>
						<p>{item.description}</p>
					</div>
					
				</div>
			))}
		</Slider>
	</div>
);

export default Reviews;