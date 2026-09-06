type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * Renders a structured-data block. Escaping `<` stops a `</script>` sequence in
 * the data from closing the tag early — nothing in the schema comes from user
 * input today, but it will once Contentful copy feeds project pages.
 */
const JsonLd = (props: JsonLdProps) => {
  const { data } = props;

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
};

export { JsonLd };
