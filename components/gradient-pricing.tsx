import { CheckIcon } from "lucide-react";

export function GradientPricing() {
    return (
        <section className="overflow-hidden py-24  text-neutral-800 dark:text-neutral-50 lg:pb-32">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2>
                        Pricing &amp; Plans
                    </h2>
                    <p className="text-xl tracking-tight">
                        Join Always On Network, Bangladesh's No.1 fiber broadband, and experience blazing-fast internet and the best customer service you'll ever have. Explore our diverse packages and select the one that suits your needs.
                    </p>

                    <p className="mt-4 text-sm tracking-tight">
                        5% VAT Included on all packages. Installation Charges Apply.
                    </p>
                </div>
                <div className="-m-6 flex flex-wrap *:mx-auto">
                    <div className="w-full p-6 md:w-1/2 lg:w-1/3">
                        <div className="h-full transform-gpu rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900 flex flex-col">
                            <div className="border-b border-neutral-300 p-12 dark:border-neutral-600">
                                <div className="pr-9">
                                    <h4 className="mb-6 text-6xl tracking-tighter">Pronto</h4>
                                    <p className="mb-2 text-xl font-semibold tracking-tight">
                                        30 Mbps at BDT 1,599/mo
                                    </p>
                                    <p className="tracking-tight">
                                        The ideal plan for standard users.
                                    </p>
                                </div>
                            </div>
                            <div className="p-12 pb-11 flex flex-col flex-grow">
                                <ul className="-m-1.5 mb-11">
                                    <FeatureItem>Unlimited Traffic</FeatureItem>
                                    <FeatureItem>100 Mbps YouTube</FeatureItem>
                                    <FeatureItem>100 Mbps Facebook</FeatureItem>
                                    <FeatureItem>100 Mbps BDIX</FeatureItem>
                                </ul>
                                <div className="mt-auto">
                                    <PricingButton>
                                        Get Now
                                    </PricingButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-1/3">
                        <div
                            className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
                            style={{
                                backgroundImage:
                                    "url('/lime-gradient-background.jpg')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="h-full rounded-2xl bg-white dark:bg-neutral-900 flex flex-col">
                                <div
                                    className="p-12"
                                    style={{
                                        backgroundImage:
                                            "url('/lime-gradient-background.jpg')",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="pr-9">
                                        <h4 className="mb-6 text-6xl tracking-tighter text-white">
                                            Presto
                                        </h4>
                                        <p className="mb-2 text-xl font-semibold tracking-tighter text-white">
                                            40 Mbps at BDT 1,999/mo
                                        </p>
                                        <p className="tracking-tight text-white">
                                            The ideal plan for users who require heavy
                                            usage.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-12 pb-11 flex flex-col flex-grow">
                                    <ul className="-m-1.5 mb-11">
                                        <FeatureItem>Unlimited Traffic</FeatureItem>
                                        <FeatureItem>100 Mbps YouTube</FeatureItem>
                                        <FeatureItem>100 Mbps Facebook</FeatureItem>
                                        <FeatureItem>100 Mbps BDIX</FeatureItem>
                                    </ul>
                                    <div className="mt-auto">
                                        <PricingButton>
                                            Get Now
                                        </PricingButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-1/3">
                        <div className="flex h-full transform-gpu flex-col justify-between rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900">
                            <div className="border-neutral-300 p-12 dark:border-neutral-600">
                                <div className="pr-9">
                                    <h4 className="mb-6 text-6xl tracking-tighter">Primo</h4>
                                    <p className="mb-2 text-xl font-semibold tracking-tighter">
                                        50 Mbps at BDT 2,499/mo
                                    </p>
                                    <p className="tracking-tight">
                                        The ideal plan for competetive gamers with top notch requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="p-12 pb-11 flex flex-col flex-grow">
                                <ul className="-m-1.5 mb-11">
                                    <FeatureItem>Unlimited Traffic</FeatureItem>
                                    <FeatureItem>100 Mbps YouTube</FeatureItem>
                                    <FeatureItem>100 Mbps Facebook</FeatureItem>
                                    <FeatureItem>100 Mbps BDIX</FeatureItem>
                                </ul>
                                <div className="mt-auto">
                                    <PricingButton>
                                        Get Now
                                    </PricingButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const FeatureItem = ({ children }: { children: string }) => {
    return (
        <li className="flex items-center py-1.5">
            <CheckIcon className="mr-3 size-3" />
            <span className="font-medium tracking-tight">{children}</span>
        </li>
    );
};

const PricingButton = ({
    children,
    href,

}: {
    children: string;
    href?: string;
}) => {
    return (
        <>
            <a
                className="inline-block w-full rounded-lg border border-neutral-700  bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800"
                href={href ?? ""}
            >
                {children}
            </a>
        </>
    );
};
