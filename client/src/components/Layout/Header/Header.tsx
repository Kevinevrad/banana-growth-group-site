import { Container, Button } from "@/components/ui";

export function Header() {
  return (
    <header
      className="
sticky
top-0
z-50
bg-white/80
backdrop-blur
border-b
border-slate-100
"
    >
      <Container>
        <div
          className="
h-20
flex
items-center
justify-between
"
        >
          <div
            className="
font-bold
text-xl
"
          >
            BANANA
            <span className="text-yellow-500">GROWTH</span>
          </div>

          <nav
            className="
hidden
md:flex
gap-8
text-sm
font-medium
"
          >
            <a href="#">Accueil</a>

            <a href="#">Services</a>

            <a href="#">Méthode</a>

            <a href="#">Contact</a>
          </nav>

          <Button size="sm">Parlons projet</Button>
        </div>
      </Container>
    </header>
  );
}
