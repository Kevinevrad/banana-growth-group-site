import { Container, Typography } from "@/components/ui";

export function Footer() {
  return (
    <footer
      className="
bg-black
text-white
py-16
"
    >
      <Container>
        <div
          className="
grid
md:grid-cols-3
gap-10
"
        >
          <div>
            <Typography variant="h3">BANANA GROWTH GROUP</Typography>

            <Typography variant="muted" className="text-slate-300">
              Cabinet de conseil en croissance, marketing digital et
              transformation.
            </Typography>
          </div>

          <div>
            <Typography variant="body">Navigation</Typography>

            <ul className="space-y-2 mt-4">
              <li>Services</li>

              <li>Réalisations</li>

              <li>Contact</li>
            </ul>
          </div>

          <div>
            <Typography variant="body">Contact</Typography>

            <p className="mt-4 text-slate-300">Abidjan, Côte d'Ivoire</p>
          </div>
        </div>

        <div
          className="
mt-12
border-t
border-white/20
pt-6
text-sm
text-slate-400
"
        >
          © 2026 Banana Growth Group
        </div>
      </Container>
    </footer>
  );
}
