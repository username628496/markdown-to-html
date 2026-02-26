import { Hero } from '@/components/home/Hero';
import { ConverterTool } from '@/components/tool/ConverterTool';
import { FeatureCards } from '@/components/home/FeatureCards';
import { ToolGrid } from '@/components/home/ToolGrid';
import { FAQ } from '@/components/home/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container py-12">
        <ConverterTool />
      </div>
      <FeatureCards />
      <ToolGrid />
      <FAQ />
    </>
  );
}
