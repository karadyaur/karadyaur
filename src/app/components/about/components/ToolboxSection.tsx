import { TOOLBOX_DATA } from '@/app/constants/data';
import { Tool, ToolCategory } from '@/app/types/toolType';

const ToolItem = ({ name }: Tool) => (
  <code className="text-sm bg-neutral-800 px-2.5 py-1 rounded-full hover:bg-neutral-700 transition-colors cursor-default">
    {name}
  </code>
);

const CategorySection = ({ title, tools }: ToolCategory) => (
  <div>
    <strong className="text-neutral-200">{title}:</strong>
    <div className="flex flex-wrap gap-2 mt-2">
      {tools.map((tool, j) => (
        <ToolItem key={j} name={tool} />
      ))}
    </div>
  </div>
);

export const ToolboxSection = () => (
  <div className="space-y-6">
    {TOOLBOX_DATA.map((category, i) => (
      <CategorySection key={i} {...category} />
    ))}
  </div>
);