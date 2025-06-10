import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
	return (
		<section className="w-full p-6 lg:p-20 space-y-10 flex flex-col items-center">
			<h2>Frequently Asked Questions</h2>

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>How long does it take to set up the connection at home?</AccordionTrigger>
					<AccordionContent>
						Within our coverage areas, it typically takes up to 3 days to complete the entire setup and make the connection go live. Our dedicated team works efficiently to ensure a smooth and timely installation process.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Can I upgrade my package?</AccordionTrigger>
					<AccordionContent>
						Absolutely! We understand that your needs might change over time. You can upgrade your plan by contacting our customer support team. They will guide you through the available options and help you choose a plan that suits your requirements.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Will you provide Real IP?</AccordionTrigger>
					<AccordionContent>
						We provide Real IP address. However, it's important to note that Real IP addresses are limited in availability. Therefore, there is an additional fee associated with obtaining them. The cost for each Real IP is 299 Tk. (including 5% VAT) per month.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>Can I expect a router to come with the connection?</AccordionTrigger>
					<AccordionContent>
						Certainly, we offer Wi-Fi routers as needed. Just note that there will be extra charges for the router.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger>What if I need to change the location of my existing connection?</AccordionTrigger>
					<AccordionContent>
						If you wish to relocate your existing connection to a new location, a location shifting charge of 1,000/- will apply. Our team will work to ensure a smooth transition, and the process is generally completed within a maximum of 72 hours.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger>What are the payment options for my monthly bill?</AccordionTrigger>
					<AccordionContent>
						We offer various convenient online payment methods for settling your monthly bill:
						<ul className="list-disc pl-5 mt-2 space-y-1">
							<li><span className="font-medium">bKash:</span> You can pay your bill through bKash by accessing the Payment/PayBill option in your self-care account or from bKash App.</li>
							<li><span className="font-medium">Rocket:</span> USSD can also be used for making payments.</li>
							<li><span className="font-medium">Cards:</span> We accept payments through major cards such as VISA, MasterCard, AMEX, and DBBL Nexus. You can pay using this method through the self-care account.</li>
							<li><span className="font-medium">Cash Deposit to Southeast Bank:</span> If you're located in the Dhaka or Chittagong (CTG) area, you have the option to deposit cash at Southeast Bank branches for payment.</li>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	)
}
