import { useMDXComponent } from "next-contentlayer2/hooks";

const components = {
  h1: ({ ...props }) => (
    <h1 className="text-xl text-center font-semibold mb-8" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="text-lg font-semibold mt-6 mb-4" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-base font-semibold mt-4 mb-2" {...props} />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 py-2 my-4"
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Content = useMDXComponent(code);
  return <Content components={components} />;
}
