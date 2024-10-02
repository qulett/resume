const SectionTitle = ({
  title,
  paragraph,
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ marginBottom: mb }}
    >
      <h2 className="relative mb-4 inline-block text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
        <span className="absolute block h-1 w-full translate-y-1 rotate-2 bg-primary" />
      </h2>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
