import React from 'react';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Components/P';
import A from 'Components/A';

const Imprint = () => (
	<React.Fragment>
		<HeaderImage src="assets/img/privacy/header.jpg" caption="Photo by Markus Spiske on Unsplash" />
		<Section>
			<Article>
				<Header subhead="Privacy Policy" headline="Just in case you're aware" />

				<Text>
					<h2>1. An overview of data protection</h2>
					<h3>General</h3>
					<P>
						The following gives a simple overview of what happens to your personal information when
						you visit our website. Personal information is any data with which you could be
						personally identified. Detailed information on the subject of data protection can be
						found in our privacy policy found below.
					</P>
					<h3>Data collection on our website</h3>
					<P>
						<strong>Who is responsible for the data collection on this website?</strong>
					</P>
					<P>
						The data collected on this website are processed by the website operator. The operator's
						contact details can be found in the website's required legal notice.
					</P>
					<P>
						<strong>How do we collect your data?</strong>
					</P>
					<P>
						Some data are collected when you provide it to us. This could, for example, be data you
						enter on a contact form.
					</P>
					<P>
						Other data are collected automatically by our IT systems when you visit the website.
						These data are primarily technical data such as the browser and operating system you are
						using or when you accessed the page. These data are collected automatically as soon as
						you enter our website.
					</P>
					<P>
						<strong>What do we use your data for?</strong>
					</P>
					<P>
						Part of the data is collected to ensure the proper functioning of the website. Other
						data can be used to analyze how visitors use the site.
					</P>
					<P>
						<strong>What rights do you have regarding your data?</strong>
					</P>
					<P>
						You always have the right to request information about your stored data, its origin, its
						recipients, and the purpose of its collection at no charge. You also have the right to
						request that it be corrected, blocked, or deleted. You can contact us at any time using
						the address given in the legal notice if you have further questions about the issue of
						privacy and data protection. You may also, of course, file a complaint with the
						competent regulatory authorities.
					</P>
				</Text>

				<Text>
					<h2>2. General information and mandatory information</h2>
					<h3>Data protection</h3>
					<P>
						The operators of this website take the protection of your personal data very seriously.
						We treat your personal data as confidential and in accordance with the statutory data
						protection regulations and this privacy policy.
					</P>
					<P>
						If you use this website, various pieces of personal data will be collected. Personal
						information is any data with which you could be personally identified. This privacy
						policy explains what information we collect and what we use it for. It also explains how
						and for what purpose this happens.
					</P>
					<P>
						Please note that data transmitted via the internet (e.g. via email communication) may be
						subject to security breaches. Complete protection of your data from third-party access
						is not possible.
					</P>
					<h3>SSL or TLS encryption</h3>
					<P>
						This site uses SSL or TLS encryption for security reasons and for the protection of the
						transmission of confidential content, such as the inquiries you send to us as the site
						operator. You can recognize an encrypted connection in your browser's address line when
						it changes from "http://" to "https://" and the lock icon is displayed in your browser's
						address bar.
					</P>
					<P>
						If SSL or TLS encryption is activated, the data you transfer to us cannot be read by
						third parties.
					</P>
				</Text>

				<Text>
					<h2>3. Data collection on our website</h2>
					<h3>Server log files</h3>
					<P>
						The website provider automatically collects and stores information that your browser
						automatically transmits to us in "server log files". These are:
					</P>
					<P>
						<ul className="bullet-list">
							<li>Browser type and browser version</li> <li>Operating system used</li>
							<li>Referrer URL</li> <li>Host name of the accessing computer</li>
							<li>Time of the server request</li> <li>IP address</li>
						</ul>
					</P>
					<P>These data will not be combined with data from other sources.</P>
					<P>
						The basis for data processing is Art. 6 (1) (f) DSGVO, which allows the processing of
						data to fulfill a contract or for measures preliminary to a contract.
					</P>
				</Text>

				<Text>
					<h2>4. Plugins and tools</h2>
					<h3>YouTube</h3>
					<P>
						Our website uses plugins from YouTube, which is operated by Google. The operator of the
						pages is YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
					</P>
					<P>
						If you visit one of our pages featuring a YouTube plugin, a connection to the YouTube
						servers is established. Here the YouTube server is informed about which of our pages you
						have visited.
					</P>
					<P>
						If you're logged in to your YouTube account, YouTube allows you to associate your
						browsing behavior directly with your personal profile. You can prevent this by logging
						out of your YouTube account.
					</P>
					<P>
						YouTube is used to help make our website appealing. This constitutes a justified
						interest pursuant to Art. 6 (1) (f) DSGVO.
					</P>
					<P>
						Further information about handling user data, can be found in the data protection
						declaration of YouTube under{' '}
						<A href="https://www.google.de/intl/de/policies/privacy" target="_blank">
							https://www.google.de/intl/de/policies/privacy
						</A>.
					</P>
				</Text>
			</Article>
		</Section>
	</React.Fragment>
);

export default Imprint;
