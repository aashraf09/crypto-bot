import { Button, List, ListItem } from 'semantic-ui-react';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { Link } from 'react-router-dom';

import { navFadeIn, slideIn } from '../../utils/variants';

const MobileNavbar = ({
    navLinks,
    open,
    setOpen,
}: {
    navLinks: any[];
    open: boolean;
    setOpen: (open: boolean) => void;
}) => {
    return (
        <>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {open && (
                        <m.div
                            variants={navFadeIn(0.3)}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="nav-mobile">
                            <List className="list">
                                {navLinks.map((item, i) => {
                                    const { name, to } = item;

                                    return (
                                        <ListItem as={Link} to={to} key={i}>
                                            <m.div
                                                variants={slideIn((i + 1) * 0.075)}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="link"
                                                onClick={() => setOpen(false)}>
                                                {name}
                                            </m.div>
                                        </ListItem>
                                    );
                                })}
                            </List>
                            <Button>Join Beta</Button>
                        </m.div>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </>
    );
};

export default MobileNavbar;
