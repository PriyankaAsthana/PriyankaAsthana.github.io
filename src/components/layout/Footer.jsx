import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <Container>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Priyanka Asthana.
          </p>


        </div>

      </Container>
    </footer>
  );
}

export default Footer;