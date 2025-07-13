import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

interface SkillItem {
  name: string;
  description: string[];
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

interface SkillSectionProps {
  title: string;
  skills: SkillGroup[];
  colorTheme: 'blue' | 'green';
  gridCols: 'lg:grid-cols-3' | 'md:grid-cols-2';
  baseDelay: number;
}

export default function SkillSection({
  title,
  skills,
  colorTheme,
  gridCols,
  baseDelay,
}: SkillSectionProps) {
  const colorClasses = {
    blue: {
      title: 'text-blue-600',
      border: 'hover:border-blue-300',
      leftBorder: 'border-blue-100',
    },
    green: {
      title: 'text-green-600',
      border: 'hover:border-green-300',
      leftBorder: 'border-green-100',
    },
  };

  const colors = colorClasses[colorTheme];

  return (
    <div className="space-y-8">
      <AnimatedSection animation="fade-up" delay={baseDelay}>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          {title}
        </h3>
      </AnimatedSection>

      <div className={`grid gap-6 ${gridCols}`}>
        {skills.map((skillGroup, groupIndex) => (
          <AnimatedSection
            key={groupIndex}
            animation="fade-up"
            delay={groupIndex * 150 + baseDelay + 100}
          >
            <Card
              className={`border-2 border-gray-200 ${colors.border} transition-colors duration-300 h-full`}
            >
              <CardContent className="p-6">
                <h4
                  className={`text-xl font-bold ${colors.title} mb-4 text-center`}
                >
                  {skillGroup.title}
                </h4>
                <div className="space-y-4">
                  {skillGroup.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`border-l-2 ${colors.leftBorder} pl-4`}
                    >
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h5>
                      <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                        {item.description.map((descriptionItem, descIndex) => (
                          <p key={descIndex}>- {descriptionItem}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
