function pageTransition()
{
	var tl = gsap.timeline();
	tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: 'bottom right', stagger: .2});
	tl.to('ul.transition li', {duration: 0.5, scaleY: 0, stagger: .1, delay: 0.1,  transformOrigin: 'bottom right'});
}

function contentAnimation()
{
	var tl = gsap.timeline();
	tl.from('.left', {duration: 1.5, translateY: 50, opacity: 0})
	tl.to('img', {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})
}


function delay(n)
{
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

barba.init({
	sync: true,

	transitions: [{
		 async leave(data)
		{
			
			pageTransition();
			await delay(1500);
		
		
		},


		async enter(data)
		{
			contentAnimation();
		},

		async once(data)
		{
			contentAnimation();
		}
	}]
});