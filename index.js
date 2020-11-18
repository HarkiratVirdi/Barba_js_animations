function pageTransition()
{
	var tl = gsap.timeline();

	tl.to('ul.transition .overlay', {duration: 1, width: '100%', display: 'block' });
	tl.to('ul.transition .overlay', {duration: 2, delay: 0.1, x: 6000});
	tl.to('ul.transition .overlay', {duration: 0.1,display: 'none'});
	tl.to('ul.transition .overlay', {duration: 0.1,x: 0, width: '0%'});
	
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
			await delay(3);
		
		
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