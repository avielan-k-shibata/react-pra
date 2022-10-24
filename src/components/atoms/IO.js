import { useInView } from 'react-intersection-observer';

export const IO = ({ c_name, as, children }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });
    const p_class = `${c_name} inview`

    switch (as) {
        case "span":
            return <span className={inView ? p_class : c_name} ref={ref}>{children}</span>
        case "p":
            return <p className={inView ? p_class : c_name} ref={ref}>{children}</p>
        default:
            return <div className={inView ? p_class : c_name} ref={ref}>{children}</div>
    }

}  