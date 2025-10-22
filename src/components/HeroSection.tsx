import React from 'react';

const HeroSection = () => {
	return (
		<section className="bg-gradient-to-b from-primary-50/10 via-transparent to-transparent w-full">
			<div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col-reverse md:flex-row items-center gap-8">
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-navy dark:text-white">주유소 운영을 더 똑똑하게, 더 빠르게</h1>
					<p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto md:mx-0">AI·IoT 기반의 통합 운영 플랫폼으로 매출·재고·고객 관리를 한 곳에서 간편하게 운영하세요.</p>
					<div className="mt-6 flex flex-col xs:flex-row gap-3 justify-center md:justify-start">
						<a href="#" className="btn-primary inline-block text-center px-6 py-3 rounded-md font-semibold">무료 체험 시작</a>
						<a href="#" className="btn-ghost inline-block text-center px-6 py-3 rounded-md font-semibold">데모 요청</a>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex justify-center md:justify-end">
					<img src="/src/assets/station_hero.jpg" alt="Station hero" className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg object-cover"/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
