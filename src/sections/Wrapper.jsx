export const Wrapper = ({ children, ...props }) => {

    return <>
        <section className="container" {...props}>
            {children}
        </section>
    </>
}