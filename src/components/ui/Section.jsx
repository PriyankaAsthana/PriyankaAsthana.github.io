import Container from "./Container";

function Section({
  children,
  className = "",
  ...props
}) {
  return (
    <section
      className={className}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;