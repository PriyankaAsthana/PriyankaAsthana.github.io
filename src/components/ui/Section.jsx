import Container from "./Container";

function Section({ children, className = "" }) {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;