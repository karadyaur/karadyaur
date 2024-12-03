import { FUN_FACTS } from '@/app/constants/data';

const FactItem = ({ fact }: { fact: string }) => (
  <li className="flex items-center text-neutral-300">
    <span className="text-yellow-400 mr-2">★</span> {fact}
  </li>
);

export const FunFacts = () => (
  <ul className="list-none space-y-3">
    {FUN_FACTS.map((fact, i) => (
      <FactItem key={i} fact={fact} />
    ))}
  </ul>
);