type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}
