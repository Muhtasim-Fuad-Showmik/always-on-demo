import Image from "next/image";

export default function EnterpriseServicePage() {
	return (
		<div className="p-5">
			<h1>For Enterprise Users</h1>

			{/* Content */}
			<section className="flex flex-col gap-5">
				<div>
					<Image
						src="/images/enterprise-internet-service-banner.jpg"
						alt="Enterprise Internet Service"
						className="w-full h-[500px] object-cover object-center"
						width={800}
						height={200}
					/>
					<p className="text-xs">
						Photo by <a href="https://unsplash.com/@nimaahmadzadeh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nima Ahmadzadeh</a> on <a href="https://unsplash.com/photos/black-laptop-computer-turned-on-near-white-window-curtain-1IWPlOqJRNE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
					</p>
				</div>

				{/* Text Section */}
				<div className="space-y-4 text-lg">
					<p>
						Always On Network provides high-speed internet services for home users. Our services are designed to provide a fast and reliable internet experience for our customers.
					</p>
					<p>
						At Always On Network, we believe internet access should be seamless, reliable, and tailored to your needs. Whether you're a casual browser, remote worker, online gamer, or streaming enthusiast, we've crafted packages that deliver the perfect balance of speed and value. Our fiber-optic infrastructure ensures consistent connectivity even during peak hours, while our 24/7 customer support team is always ready to assist you with any questions or technical issues.
					</p>
					<p>
						We understand that every household has unique requirements, which is why we offer flexible plans with no hidden fees or surprise charges. Our transparent pricing policy and commitment to customer satisfaction have earned us a <span className="text-lime-400 font-semibold">98% customer retention rate</span>. Plus, with our easy-to-use self-service portal, you can manage your account, track usage, and upgrade your plan whenever you need more bandwidth – all without lengthy phone calls or complicated processes.
					</p>
					<p>
						Join thousands of satisfied families across Bangladesh who trust Always On Network to keep them connected to what matters most.
					</p>
				</div>
			</section>
		</div>
	);
}
