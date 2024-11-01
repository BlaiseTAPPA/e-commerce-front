import styled from 'styled-components';

const Root = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    background: var(--bg);
    height: 100%;
    min-width: 18rem;
    overflow: auto;
`;

const Main = styled.main`
    height: 100%;
`;

const FooterA = styled.footer`
    position: absolute;
    bottom: 0;
    background-color: var(--footer-bg);
    width: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
`;

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--footer-width);
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
`;

const FooterColumns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;
    flex-wrap: wrap;
    padding-top: 1rem;
`;

const FooterLogoColumn = styled.div`
    padding-right: 10%;
`;

const FooterLogo = styled.img`
    margin-bottom: 1.5rem;
    width: 14rem;
`;

const SocialWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
`;

const SocialLink = styled.a`
    color: var(--text-color);
    text-decoration: none;
`;

const SocialIcon = styled.svg`
    width: 2.5rem;
    height: 2.5rem;
    stroke: var(--text-color);
    transition: all 0.2s ease-in-out;

    &:hover {
        stroke: var(--headline-color);
    }
`;

const SocialList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    list-style-type: none;
`;

const LinkColumns = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    flex-grow: 1;
`;

const LinkColumn = styled.div`
    flex-grow: 1;
    display: flex;
    gap: 2rem;
`;

const Section = styled.section`
    min-width: 8rem;
    width: 50%;
`;

const LinkList = styled.ul`
    display: flex;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    margin: 0;
    flex-direction: column;
    font-weight: 600;
`;

const LinkItem = styled.li`
    color: var(--text-color);
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: var(--headline-color);
    }
`;

const FooterBottom = styled.div`
    margin-top: 8rem;
    width: 100%;
    color: var(--text-color);
`;

const FooterBottomWrapper = styled.div`
    max-width: var(--footer-width);
    margin: 0 auto;
    width: 100%;
    padding: 2.5rem 1rem;
    border-top: 1px solid var(--footer-border);
`;

const Small = styled.small`
    font-size: 1rem;
    display: inline;
    white-space: nowrap;
`;

export default function Footer () {
    return (
        <Root>
            <Main></Main>
            <FooterA>
                <FooterWrapper>
                    <FooterColumns>
                        <FooterLogoColumn>
                            <a href="/" aria-label="Go to Supabase homepage" title="Go to Supabase Homepage">
                                <FooterLogo src="assets/logo.png" loading="lazy" alt="Supabase logo" />
                            </a>
                            <SocialWrapper>
                                <SocialLinks>
                                    <ul>
                                        <li>
                                            <SocialLink href="#" title="Twitter">
                                                <SocialIcon xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-brand-x" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                                </SocialIcon>
                                            </SocialLink>
                                        </li>
                                        <li>
                                            <SocialLink href="#" title="GitHub">
                                                <SocialIcon xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-brand-github" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                                </SocialIcon>
                                            </SocialLink>
                                        </li>
                                        <li>
                                            <SocialLink href="#" title="Discord">
                                                <SocialIcon xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-brand-discord" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                                    <path
                                                        d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                                                    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                                                </SocialIcon>
                                            </SocialLink>
                                        </li>
                                        <li>
                                            <SocialLink href="#" title="Youtube">
                                                <SocialIcon xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                                                    <path d="M10 9l5 3l-5 3z" />
                                                </SocialIcon>
                                            </SocialLink>
                                        </li>
                                    </ul>
                                </SocialLinks>
                            </SocialWrapper>
                        </FooterLogoColumn>
                        <LinkColumns>
                            <LinkColumn>
                                <Section>
                                    <h3>Product</h3>
                                    <LinkList>
                                        <LinkItem><a href="#" title="Features">Database</a></LinkItem>
                                        <LinkItem><a href="#" title="Auth">Auth</a></LinkItem>
                                        <LinkItem><a href="#" title="Functions">Functions</a></LinkItem>
                                        <LinkItem><a href="#" title="Realtime">Realtime</a></LinkItem>
                                        <LinkItem><a href="#" title="Storage">Storage</a></LinkItem>
                                        <LinkItem><a href="#" title="Vector">Vector</a></LinkItem>
                                        <LinkItem><a href="#" title="Pricing">Pricing</a></LinkItem>
                                    </LinkList>
                                </Section>
                                <Section>
                                    <h3>Resources</h3>
                                    <LinkList>
                                        <LinkItem><a href="#" title="Support">Support</a></LinkItem>
                                        <LinkItem><a href="#" title="Sitemap">System Status</a></LinkItem>
                                        <LinkItem><a href="#" title="Newsletter">Become a Partner</a></LinkItem>
                                        <LinkItem><a href="#" title="Help Centre">Integrations</a></LinkItem>
                                        <LinkItem><a href="#" title="Investor">Experts</a></LinkItem>
                                    </LinkList>
                                </Section>
                            </LinkColumn>
                            <LinkColumn>
                                <Section>
                                    <h3>Developers</h3>
                                    <LinkList>
                                        <LinkItem><a href="#" title="Documentation">Documentation</a></LinkItem>
                                        <LinkItem><a href="#" title="Changelog">Changelog</a></LinkItem>
                                        <LinkItem><a href="#" title="Contributing">Contributing</a></LinkItem>
                                        <LinkItem><a href="#" title="OpenSource">Open Source</a></LinkItem>
                                        <LinkItem><a href="#" title="SupaSquad">SupaSquad</a></LinkItem>
                                        <LinkItem><a href="#" title="DevTo">DevTo</a></LinkItem>
                                        <LinkItem><a href="#" title="RSS">RSS</a></LinkItem>
                                    </LinkList>
                                </Section>
                                <Section>
                                    <h3>Company</h3>
                                    <LinkList>
                                        <LinkItem><a href="#" title="Terms and services">Blog</a></LinkItem>
                                        <LinkItem><a href="#" title="Privacy Policy">Customer Stories</a></LinkItem>
                                        <LinkItem><a href="#" title="Careers">Careers</a></LinkItem>
                                        <LinkItem><a href="#" title="Company">Company</a></LinkItem>
                                        <LinkItem><a href="#" title="Terms Of Service">Terms of Service</a></LinkItem>
                                        <LinkItem><a href="#" title="Privacy Policy">Privacy Policy</a></LinkItem>
                                    </LinkList>
                                </Section>
                            </LinkColumn>
                        </LinkColumns>
                    </FooterColumns>
                </FooterWrapper>
            </FooterA>
        </Root>
    )
}
