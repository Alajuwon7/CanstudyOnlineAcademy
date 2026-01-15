import { Section } from '@/components/layout/Section';

export default function AboutPage() {
  return (
    <Section padding="xl" background="white" className="pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-display-2 font-primary font-bold text-text-primary mb-6">
          About Us
        </h1>
        <div className="prose max-w-none space-y-4">
          <p className="text-body-lg text-text-secondary">
            We are providing high-quality courses for about five years. Our
            mission is to make education accessible to everyone, everywhere.
          </p>
          <p className="text-body-md text-text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </Section>
  );
}
