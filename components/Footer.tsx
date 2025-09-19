import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center py-8" id="contact">
            <div className="container">
                <p className="text-sm text-muted-foreground mb-2">
                    Have a project in mind?
                </p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-lg font-medium hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="mt-4 pt-4 border-t border-muted">
                    <p className="text-xs text-muted-foreground">
                        <a
                            href="https://www.me.toinfinite.dev/"
                            target="_blank"
                            className="hover:underline hover:text-white"
                        >
                            Design by Tajmirul
                        </a>{' '}
                        • Modified by rapz © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
