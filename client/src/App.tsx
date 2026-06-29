import {
  Container,
  Section,
  Typography,
  Button,
  Card,
  Badge,
  IconBox,
} from "@/components/ui";

import { TrendingUp } from "lucide-react";

export default function App() {
  return (
    <Section>
      <Container>
        <Badge>Growth Consulting</Badge>

        <Typography variant="h1" as="h1">
          BANANA GROWTH GROUP
        </Typography>

        <Card>
          <IconBox icon={TrendingUp} />

          <Typography variant="body">
            Transformation digitale et croissance.
          </Typography>

          <Button size="lg">Découvrir</Button>
        </Card>
      </Container>
    </Section>
  );
}
