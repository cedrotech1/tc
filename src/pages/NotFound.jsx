import { useEffect } from "react";
import { Button, Container } from "../components/ui.jsx";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Techclick";
  }, []);

  return (
    <Container className="py-24">
      <p className="text-sm font-semibold text-blue">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">This page is not on the site.</h1>
      <p className="mt-3 max-w-md text-muted">The address may have changed. Start from the homepage or talk with the team.</p>
      <div className="mt-6 flex gap-3">
        <Button to="/">Back home</Button>
        <Button to="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </Container>
  );
}
