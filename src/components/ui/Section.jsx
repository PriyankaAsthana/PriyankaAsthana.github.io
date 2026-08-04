import Container from "./Container";

function Section({
  children,
  className = "",
  id,
}) {
  return (
    <section id={id} className={className}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;