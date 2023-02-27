import { GithubIcon } from "./icons/github-icon";
import { LinkedInIcon } from "./icons/linkedin-icon";
import { TwitterIcon } from "./icons/twitter-icon";
import { YoutubeIcon } from "./icons/youtube-icon";

const Footer = ({ }) => {
    const navigation = {
        main: [
            { name: 'Terms', href: 'https://www.alphacast.io/terms' },
            { name: 'Privacy', href: 'https://www.alphacast.io/privacy' },
            { name: 'Contact', href: 'https://www.alphacast.io/contact' },
            { name: 'Pricing', href: 'https://www.alphacast.io/pricing' },
            { name: 'Events', href: 'https://www.alphacast.io/events' },
            { name: 'API', href: 'https://documenter.getpostman.com/view/17184186/TzzDLb94' },
            { name: 'Dev Diary', href: 'https://www.alphacast.io/repositories/67/insights' },
            { name: 'About', href: 'https://www.alphacast.io/about-us' },
        ],
        social: [
            {
                name: 'Twitter',
                href: 'https://twitter.com/alphacast_',
                icon: (props) => (<TwitterIcon className="h-5 w-5" />),
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/alphacast',
                icon: (props) => (<LinkedInIcon className="h-5 w-5" />),
            },
            {
                name: 'Youtube',
                href: 'https://www.youtube.com/channel/UCeEy1Iz4NziiMod_L5427QQ',
                icon: (props) => (<YoutubeIcon className={"h-5 w-5"} />),
            },
            {
                name: 'GitHub',
                href: 'https://github.com/alphacastio/',
                icon: (props) => (<GithubIcon className="h-5 w-5" />),
            },
        ],
    }

    return (
        <footer className="min-w-full">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200 text-sm">
                <nav className=" -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <span className="hidden sm:block py-2 text-center text-sm text-gray-400">&copy; 2023 Alphacast, Inc. All rights reserved.</span>
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a href={item.href} className="text-sm text-gray-500 hover:text-indigo-600">
                                {item.name}
                            </a>
                        </div>
                    ))}
                    <div className="py-2 flex justify-center space-x-2 ml-2">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-indigo-600">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;