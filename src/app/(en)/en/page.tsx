import { Portfolio } from '@/components/Portfolio';

// Las duraciones y los años de experiencia se calculan con la fecha actual.
export const revalidate = 86400;

export default function HomeEnglish() {
  return <Portfolio locale="en" />;
}
